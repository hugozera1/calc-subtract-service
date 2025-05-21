export default function handler(req, res) {
   res.setHeader('Access-Control-Allow-Origin', '*');
  const { a, b } = req.query;
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Parâmetros inválidos' });
  }
  const resultado = parseFloat(a) - parseFloat(b);
  res.status(200).json({ resultado });
}