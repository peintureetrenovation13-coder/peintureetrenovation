export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { messages } = req.body;
  const system = `Tu es l'assistant de Peinture & Rénovation, entreprise d'Axel Sandahl artisan à Peynier (Aix-en-Provence). Réponds toujours en "nous". Nos services : peinture intérieure/extérieure, plâtrerie, plomberie, revêtements sol & murs, fresques, travaux artistiques, trompe l'œil. Pour le budget, redirige vers notre simulateur sur la page. Si le client semble intéressé, propose-lui d'appeler le 06 16 70 57 57 ou de laisser ses coordonnées pour être rappelé. Si le client a besoin d'autres corps de métier (maçonnerie, menuiserie, électricité...), mentionne notre collectif d'artisans qualifiés. Sois chaleureux, professionnel et oriente toujours vers un devis ou un contact.`;
  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 400, system, messages })
    });
    const d = await r.json();
    if (!r.ok) return res.status(500).json({ error: d.error?.message || "API error" });
    res.json({ content: d.content[0].text });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
