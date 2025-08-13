export default async function handler(req, res) {
  const { keyword = 'india' } = req.query; // default if none provided

  const apiKey = process.env.NEWS_API_KEY;
  const url = `https://newsapi.org/v2/everything?q=${keyword}&language=en&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
