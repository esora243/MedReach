// SPAナビゲーション
const sections = document.querySelectorAll('.content-section');
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    sections.forEach(sec => sec.classList.remove('active'));
    document.querySelector(link.getAttribute('href')).classList.add('active');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// 記事の動的ロード
async function loadArticles() {
  const res = await fetch('/api/articles'); // モックAPI
  const articles = await res.json();
  const grid = document.getElementById('blogGrid');
  grid.innerHTML = '';
  articles.forEach(article => {
    grid.appendChild(createArticleCard(article));
  });
}
function createArticleCard(article) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${article.image}" alt="" class="feature-image mb-3"/>
    <h3 class="text-xl font-bold">${article.title}</h3>
    <p class="article-summary">${article.summary}</p>
    <button class="button-primary mt-2" onclick="openArticleModal('${article.id}')">詳細</button>
  `;
  return card;
}
// ...さらに求人/譲渡/チャットボット/管理機能/認証/状態管理/多言語切り替えなど追加...

window.addEventListener('DOMContentLoaded', () => {
  loadArticles();
  // ...他の初期化...
});