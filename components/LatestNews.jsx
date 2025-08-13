import React from "react";

export default function LatestNews({ articles = [] }) {
  // First 3 articles (with images)
  const imageArticles = articles.slice(10, 13);
  // Next 3 articles (text only)
  const textArticles = articles.slice(13, 16);

  return (
    <section className="grid grid-cols-1 p-10 gap-6 py-10 bg-black font-serif">
      {/* Header */}
      <div>
        <h2 className="text-xl font-semibold mb-2 text-[#4a3f2f]">
          Latest News
        </h2>
        <hr className="border-t border-[#4a3f2f] mb-4 w-full" />
      </div>

      <div className="space-y-4">
        {/* First 3 articles in grid with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {imageArticles.map((article, idx) => (
            <a
              key={idx}
              href={article.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm overflow-hidden block hover:shadow-lg transition-shadow duration-200"
            >
              <img
                alt={article.title}
                className="w-full h-auto"
                src={
                  article.urlToImage ||
                  "https://placehold.co/400x200?text=No+Image"
                }
              />
              <div className="p-3">
                <h3 className="font-bold text-sm leading-tight mb-1 text-white">
                  {article.title}
                </h3>
                <p className="text-xs font-semibold mb-1 text-white">
                  By {article.author || "Unknown"}{" "}
                  {article.publishedAt
                    ? new Date(article.publishedAt).toLocaleDateString()
                    : ""}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Next 3 articles without images */}
        {textArticles.map((article, idx) => (
          <a
            key={idx}
            href={article.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-sm p-3 block hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="font-extrabold text-black text-lg lg:text-lg mb-1">
              {article.title}
            </h3>
            <p className="text-[9px] lg:text-sm text-black font-semibold mb-1">
              By {article.author || "Unknown"}{" "}
              {article.publishedAt
                ? new Date(article.publishedAt).toLocaleDateString()
                : ""}
            </p>
            {article.description && (
              <p className="text-[14px] text-black leading-tight">
                {article.description}
              </p>
            )}
          </a>
        ))}
      </div>
    </section>
  );
}
