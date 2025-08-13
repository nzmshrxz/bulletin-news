import Footer from "@/components/Footer";
import LatestNews from "@/components/LatestNews";
import Newses from "@/components/Newses";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/news");
        setArticles(response.data.articles); // get first 5 articles
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const handleExploreClick = () => {
    router.push("/news");
  };
  console.log(articles)

  return (
    <div className="bg-black min-h-screen text-white">
      <main className="max-w-7xl mx-auto px-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Article (Big Hero) */}
        {articles[0] && (
          <a
            href={articles[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 relative block"
          >
            <img
              alt={articles[0].title}
              className="w-full h-auto object-cover"
              src={
                articles[0].urlToImage ||
                "https://placehold.co/600x300?text=No+Image"
              }
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 p-4 max-w-[90%]">
              <h2 className="text-white text-lg font-bold leading-snug">
                {articles[0].title}
              </h2>
              <p className="text-white text-[10px] mt-1 font-normal">
                By {articles[0].author || "Unknown"}
                <span className="ml-2">
                  {new Date(articles[0].publishedAt).toLocaleDateString()}
                </span>
              </p>
            </div>
          </a>
        )}

        {/* Side Articles (Right Column) */}
        <section className="hidden md:block space-y-4">
          {articles.slice(1, 3).map((article, idx) => (
            <a
              key={idx}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block"
            >
              <img
                alt={article.title}
                className="w-full h-auto object-cover"
                src={
                  article.urlToImage ||
                  "https://placehold.co/280x140?text=No+Image"
                }
              />
              <h3 className="absolute bottom-2 left-2 text-white text-sm font-bold leading-snug max-w-[90%]">
                {article.title}
              </h3>
            </a>
          ))}
        </section>
      </main>

      {/* Bottom Section */}
      <section className="max-w-7xl mx-auto px-6 mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left (Main text article) */}
        {articles[3] && (

          <a
            href={articles[3].url}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 space-y-1 block"
          >
            <img
              alt={articles.title}
              className="w-full h-80 object-cover"
              src={
                articles[3].urlToImage ||
                "https://placehold.co/280x140?text=No+Image"
              }
            />
            <h4 className="text-white text-sm font-semibold leading-tight">
              {articles[3].title}
            </h4>
            <p className="text-[10px] text-gray-300 font-normal leading-tight">
              {articles[3].description}
            </p>
          </a>
        )}

        {/* Right (Special styled box) */}
        {/* Right (Special styled box) */}
        {articles[4] && (
          <a
            href={articles[4].url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 space-y-3 text-[10px] font-normal leading-tight text-black block"
          >
            <div className="bg-[#7a9dbd] text-white font-bold p-2 mb-2 max-w-max">
              Special Report
            </div>
            <h5 className="text-black font-semibold leading-tight">
              {articles[4].title}
            </h5>
            <p className="text-[8px] text-[#4a4a4a] font-normal">
              By {articles[4].author || "Unknown"}
              <span className="ml-2">
                {new Date(articles[4].publishedAt).toLocaleDateString()}
              </span>
            </p>
            <img
              alt={articles[4].title}
              className="w-full object-cover rounded-md max-h-48"
              src={
                articles[4].urlToImage ||
                "https://placehold.co/280x140?text=No+Image"
              }
            />
            <p className="text-[#3a6b4a] font-normal text-sm leading-tight">
              {articles[4].description}
            </p>
          </a>
        )}

      </section>
      <LatestNews articles={articles} />
      <Newses articles={articles}/>
      <Footer/>
    </div>
  );
}
