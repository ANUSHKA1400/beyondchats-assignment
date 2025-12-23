const express = require('express');
const app = express();

app.use(express.json());

app.post('/summarize', (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: 'Content is required' });
  }

  // Mock LLM response
  const summary = content.substring(0, 150) + '...';

  res.json({
    summary,
    model: 'mock-llm',
    note: 'LLM response mocked due to API constraints'
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Mock LLM service running on port ${PORT}`);
});
