<!-- Form di input -->
<form id="reputation-form" style="max-width: 700px; margin: 40px auto; padding: 40px; background: #f9fafb; border-radius: 12px; box-shadow: 0 8px 25px rgba(0,0,0,0.08); font-family: system-ui, sans-serif;">
  <h2 style="text-align: center; color: #1f2937; margin-bottom: 32px; font-size: 28px;">Verifica la tua Reputazione Online</h2>
  
  <div style="margin-bottom: 24px;">
    <label for="nome" style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">Nome *</label>
    <input type="text" id="nome" name="nome" required style="width: 100%; padding: 14px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; outline: none; transition: border 0.2s;">
  </div>

  <div style="margin-bottom: 24px;">
    <label for="cognome" style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">Cognome *</label>
    <input type="text" id="cognome" name="cognome" required style="width: 100%; padding: 14px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; outline: none; transition: border 0.2s;">
  </div>

  <div style="margin-bottom: 24px;">
    <label for="keyword" style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">Parole chiave * <small style="font-weight: normal; color: #6b7280;">(separale con virgola o spazio)</small></label>
    <input type="text" id="keyword" name="keyword" required placeholder="es. azienda edile Milano, consulenza turnover, impresa familiare" style="width: 100%; padding: 14px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; outline: none; transition: border 0.2s;">
  </div>

  <div style="margin-bottom: 24px;">
    <label for="email" style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">Email *</label>
    <input type="email" id="email" name="email" required style="width: 100%; padding: 14px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; outline: none; transition: border 0.2s;">
  </div>

  <div style="margin-bottom: 32px;">
    <label style="display: block; margin-bottom: 8px; font-weight: 600; color: #374151;">Numero di telefono *</label>
    <div style="display: flex; gap: 12px; align-items: stretch;">
      <div style="flex: 0 0 220px;">
        <select id="prefisso" name="prefisso" required style="width: 100%; height: 100%; padding: 14px 12px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; background: white; outline: none; transition: border 0.2s; appearance: none; background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><path fill=\"%236b7280\" d=\"M6 8.5L1 3.5h10z\"/></svg>'); background-repeat: no-repeat; background-position: right 12px center;">
          <option value="+39">🇮🇹 +39 (Italia)</option>
          <option value="+34">🇪🇸 +34 (Spagna)</option>
          <option value="+33">🇫🇷 +33 (Francia)</option>
          <option value="+49">🇩🇪 +49 (Germania)</option>
          <option value="+44">🇬🇧 +44 (Regno Unito)</option>
          <option value="+1">🇺🇸 +1 (Stati Uniti / Canada)</option>
          <option value="+7">🇷🇺 +7 (Russia)</option>
          <option value="+86">🇨🇳 +86 (Cina)</option>
          <option value="+81">🇯🇵 +81 (Giappone)</option>
          <option value="+82">🇰🇷 +82 (Corea del Sud)</option>
          <option value="+91">🇮🇳 +91 (India)</option>
          <option value="+55">🇧🇷 +55 (Brasile)</option>
          <option value="+52">🇲🇽 +52 (Messico)</option>
          <option value="+61">🇦🇺 +61 (Australia)</option>
          <option value="+351">🇵🇹 +351 (Portogallo)</option>
          <option value="+41">🇨🇭 +41 (Svizzera)</option>
          <option value="+32">🇧🇪 +32 (Belgio)</option>
          <option value="+31">🇳🇱 +31 (Paesi Bassi)</option>
          <option value="+46">🇸🇪 +46 (Svezia)</option>
          <option value="+47">🇳🇴 +47 (Norvegia)</option>
          <option value="+45">🇩🇰 +45 (Danimarca)</option>
          <option value="+358">🇫🇮 +358 (Finlandia)</option>
          <option value="+43">🇦🇹 +43 (Austria)</option>
          <option value="+420">🇨🇿 +420 (Repubblica Ceca)</option>
          <option value="+48">🇵🇱 +48 (Polonia)</option>
          <option value="+380">🇺🇦 +380 (Ucraina)</option>
          <option value="+90">🇹🇷 +90 (Turchia)</option>
          <option value="+971">🇦🇪 +971 (Emirati Arabi Uniti)</option>
          <option value="+966">🇸🇦 +966 (Arabia Saudita)</option>
          <option value="+27">🇿🇦 +27 (Sudafrica)</option>
          <option value="+65">🇸🇬 +65 (Singapore)</option>
          <option value="+852">🇭🇰 +852 (Hong Kong)</option>
          <option value="+886">🇹🇼 +886 (Taiwan)</option>
        </select>
      </div>
      <div style="flex: 1;">
        <input type="tel" id="telefono" name="telefono" required placeholder="es. 123 456 789" style="width: 100%; height: 100%; padding: 14px 16px; border: 1px solid #d1d5db; border-radius: 8px; font-size: 16px; outline: none; transition: border 0.2s;">
      </div>
    </div>
  </div>

  <button type="submit" style="width: 100%; padding: 16px; background: #2563eb; color: white; border: none; border-radius: 8px; font-size: 18px; font-weight: 600; cursor: pointer; transition: background 0.3s;">Calcola il mio Reputation Score</button>
</form>

<!-- Area risultati -->
<div id="risultato" style="max-width: 750px; margin: 50px auto; padding: 40px; background: white; border: 1px solid #e5e7eb; border-radius: 12px; display: none; box-shadow: 0 8px 30px rgba(0,0,0,0.1);">
  <h2 style="text-align: center; color: #111827; margin-bottom: 32px; font-size: 28px;">Risultati della tua analisi</h2>
  
  <div id="score" style="font-size: 42px; font-weight: bold; text-align: center; margin: 30px 0; color: #2563eb;"></div>
  
  <div style="font-size: 18px; line-height: 1.8; color: #374151;">
    <p id="negativita" style="margin: 12px 0;"></p>
    <p id="negativi" style="margin: 12px 0;"></p>
    <p id="neutri" style="margin: 12px 0;"></p>
    <p id="positivi" style="margin: 12px 0;"></p>
    <p id="costo" style="font-weight: bold; font-size: 20px; margin-top: 30px; color: #dc2626;"></p>
  </div>
</div>

<!-- Privacy -->
<p style="text-align: center; font-size: 14px; color: #6b7280; margin-top: 40px; line-height: 1.6;">
  Inserendo i tuoi dati acconsenti al trattamento per fornirti i risultati e per contatto diretto (chiamata/WhatsApp/email).  
  Consenso ai sensi GDPR art. 6. Puoi revocare in qualsiasi momento.  
  Leggi la <a href="/privacy-policy" style="color: #2563eb; text-decoration: underline;">Privacy Policy</a>.
</p>

<!-- JavaScript -->
<script>
document.getElementById('reputation-form').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData);

  // Combina prefisso + numero telefono (rimuove spazi)
  data.telefono_completo = data.prefisso + data.telefono.replace(/\s+/g, '');

  const risultatoDiv = document.getElementById('risultato');
  risultatoDiv.style.display = 'block';

  try {
    const response = await fetch('https://reputation-score-api-oqeku9g7y-collini-micheles-projects.vercel.app/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
      document.getElementById('score').innerHTML = `Reputation Score: ${result.score}/100`;
      document.getElementById('negativita').innerHTML = `<strong>Indice di negatività:</strong> ${result.negativita}`;
      document.getElementById('negativi').innerHTML = `<strong>Contenuti negativi rilevati:</strong> ${result.negativi}`;
      document.getElementById('neutri').innerHTML = `<strong>Contenuti neutri rilevati:</strong> ${result.neutri}`;
      document.getElementById('positivi').innerHTML = `<strong>Contenuti positivi rilevati:</strong> ${result.positivi}`;
      document.getElementById('costo').innerHTML = result.costo;
    } else {
      risultatoDiv.innerHTML = `<p style="color: #dc2626; text-align: center; font-size: 18px;">Errore: ${result.error || 'Riprova più tardi'}</p>`;
    }
  } catch (err) {
    risultatoDiv.innerHTML = '<p style="color: #dc2626; text-align: center; font-size: 18px;">Errore di connessione. Riprova.</p>';
  }
});
</script>
