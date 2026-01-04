const fetch = require('node-fetch');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = req.body;
    const nome = body.nome || '';
    const cognome = body.cognome || '';
    const keyword = body.keyword || '';
    const lingua = body.lingua || 'it';
    const paese = body.paese || 'it';

    const query = `"${nome} ${cognome}" ${keyword}`.trim();

    const serpApiKey = f2f22d2ee84bb3910888e51bfc6e7074fd426152c059f5417747f923517441d5
    const engines = ['google', 'bing'];

    let allSnippets = [];

    for (const engine of engines) {
      const url = `https://serpapi.com/search.json?engine=${engine}&q=${encodeURIComponent(query)}&hl=${lingua}&gl=${paese}&api_key=${serpApiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.organic_results) {
        data.organic_results.slice(0, 10).forEach(result => {
          if (result.title && result.snippet) {
            allSnippets.push(`${result.title} ${result.snippet}`);
          }
        });
      }
    }

    allSnippets = [...new Set(allSnippets)].slice(0, 20);

    const hfToken = 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
    const hfUrl = 'https://api-inference.huggingface.co/models/nlptown/bert-base-multilingual-uncased-sentiment';

    let negative = 0;
    let positive = 0;
    let neutral = 0;

    for (const text of allSnippets) {
      if (!text) continue;

      const hfResponse = await fetch(hfUrl, {
        method: 'POST',
        headers: {
          'Authorization': hfToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: text.substring(0, 512) })
      });

      const hfData = await hfResponse.json();
      const prediction = Array.isArray(hfData) ? hfData[0] : hfData;
      const label = prediction?.label || '3 stars';
      const stars = parseInt(label.split(' ')[0]) || 3;

      if (stars <= 2) negative++;
      else if (stars >= 4) positive++;
      else neutral++;
    }

    const total = negative + positive + neutral || 1;

    const weighted = (positive * 1.8 + neutral * 0.7 - negative * 3.0) / total;
    const reputationScore = Math.max(0, Math.min(100, Math.round(50 + weighted * 50)));

    const negativitaPercent = Math.round((negative / total) * 100);

    let costoRange = 'Quotazione personalizzata dopo analisi';
    if (negative <= 2) costoRange = '600 – 1.200 €';
    else if (negative <= 6) costoRange = '1.500 – 3.000 €';
    else costoRange = 'Oltre 3.500 € (casi complessi)';

    res.status(200).json({
      success: true,
      score: reputationScore,
      negativita: negativitaPercent + '%',
      negativi: negative,
      neutri: neutral,
      positivi: positive,
      costo: `Costo stimato intervento: ${costoRange} (IVA esclusa)`
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Errore durante l\'elaborazione' });
  }
};
