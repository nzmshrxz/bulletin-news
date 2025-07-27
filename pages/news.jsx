// pages/news.js
import axios from "axios";
import { useEffect, useState } from "react";
import dummyNews from '../data/dummyNews.json'

export default function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 15;
  const [isLoading, setIsLoading] = useState(false)
  const [category, setCategory] = useState("all");

  const indexOfLastArticle = currentPage * articlesPerPage
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle)

  const totalPages = Math.ceil(articles.length / articlesPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }


  useEffect(() => {

    const fetchNews = async () => {
      setIsLoading(true)
      try {
        const response = await axios.get(
          "/api/news"
        );
        setArticles(response.data.articles); // fetch more than 3
      } catch (error) {
        console.error("Error fetching news:", error);
      }
      setIsLoading(false)
    };

    fetchNews();
  }, []);

  const handleCategoryChange = (newCateogry) => {
    setCategory(newCateogry)
    setCurrentPage(1)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);


  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex flex-col justify-center items-center bg-white dark:bg-gray-900 z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent">
          </div>
          <span className="text-blue-600 dark:text-white text-center text-lg font-semibold">Bulletin Getting Top News For you!</span>
        </div>
      ) : (
        <div className="bg-white min-h-screen dark:bg-gray-900 dark:text-white px-4 py-10">


          <h1 className="text-4xl font-bold text-center mb-10">All News</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {currentArticles.map((news, index) => (
              <div
                key={index}
                className="bg-gray-100  dark:bg-gray-800 rounded-lg shadow-md p-4"
              >
                <img className="h-48 object-cover mb-3 w-full rounded " src={news.urlToImage || "https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="News" />
                <h3 className="text-xl font-semibold mb-1 ">
                  {news.title ? news.title.slice(0, 100) : "No Title"}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {news.publishedAt
                    ? new Date(news.publishedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })
                    : "No Date"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300  flex-grow">
                  {news.description
                    ? news.description.slice(0, 120) + "..."
                    : "No description available"}
                </p>
                <p className="text-sm">Author: {news.author || "No Author Availble"}</p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-600 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-10 flex justify-center space-x-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-2 rounded ${currentPage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-800"
                  }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-400"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
