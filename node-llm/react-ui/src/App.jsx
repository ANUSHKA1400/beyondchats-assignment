import { useEffect, useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/articles')
      .then(res => res.json())
      .then(data => setArticles(data.data ?? data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>BeyondChats Articles</h1>

      {articles.length === 0 && <p>No articles found.</p>}

      <ul>
        {articles.map(article => (
          <li key={article.id} style={{ marginBottom: '15px' }}>
            <h3>{article.title}</h3>
            <p>{article.content.substring(0, 120)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
