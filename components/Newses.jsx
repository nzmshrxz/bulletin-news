import React, { useState } from 'react';

export default function Newses({ articles = [] }) {
  const [showAll, setShowAll] = useState(false);

  // All trending articles starting from index 16
  const allTrendingArticles = articles.slice(16);
  // Show first 3 or all depending on state
  const displayedArticles = showAll
    ? allTrendingArticles
    : allTrendingArticles.slice(0, 3);

  return (
    <aside className="xl:col-span-4 max-w-[370px] md:max-w-[700px]  sm:max-w-[600px] lg:max-w-[1450px] mx-auto bg-white rounded-sm p-10 text-black text-xs font-sans">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-sm">Trending Headlines</h3>
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-white px-2 py-2 rounded-sm bg-black text-xs font-semibold"
        >
          {showAll ? 'Show Less' : 'View All'}
        </button>
      </div>

      {displayedArticles.map((article, idx) => (
        <a
          key={idx}
          href={article.url || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:bg-gray-100 transition-colors duration-200"
        >
          <article className="flex mb-4 border border-[#d9d9d9] rounded overflow-hidden">
            <img
              alt={article.title}
              className="w-[80px] h-[60px] object-cover"
              src={
                article.urlToImage ||
                'https://placehold.co/80x60?text=No+Image'
              }
            />
            <div className="p-2 flex flex-col justify-between">
              <p className="text-[10px] leading-tight mb-1">
                {article.title}
              </p>
              <p className="text-[8px] text-gray-600 leading-tight">
                {article.description || 'No description available.'}
              </p>
              <p className="text-[7px] text-gray-500 mt-1">
                By {article.author || 'Unknown'}{' '}
                {article.publishedAt
                  ? new Date(article.publishedAt).toLocaleDateString()
                  : ''}
              </p>
            </div>
          </article>
        </a>
      ))}
    </aside>
  );
}
