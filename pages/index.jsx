import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const [articles, setArticles] = useState([
    // {
    //   title: "Global Tech Summit 2025 Begins in Silicon Valley",
    //   description: "Industry leaders and innovators gather to discuss the future of AI, blockchain, and green tech in this year’s highly anticipated summit.",
    //   url: "#",
    // },
    // {
    //   title: "Historic Climate Agreement Signed by 190 Countries",
    //   description: "Nations commit to aggressive carbon reduction targets after weeks of negotiation in Geneva’s international climate summit.",
    //   url: "#",
    // },
    // {
    //   title: "Breakthrough in Cancer Research Offers New Hope",
    //   description: "Scientists at the University of Oxford have developed a new treatment showing promising results in early-stage clinical trials.",
    //   url: "#",
    // },
  ]);

  // Uncomment to fetch real data
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get("/api/news");
        setArticles(response.data.articles.slice(0, 3));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  const handleExploreClick = () => {
    router.push("/news");
  };

  return (
    <div className="bg-white min-h-screen dark:bg-gray-900 dark:text-white">
      {/* Hero Section with Animation */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white dark:bg-gradient-to-r dark:from-gray-800 dark:to-gray-700 dark:text-gray-100 py-40 px-4 text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to BulletinNews</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Your trusted source for the latest headlines and breaking news across the globe.
        </p>
        <button
          onClick={handleExploreClick}
          className="mt-6 bg-white text-blue-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Explore News
        </button>
      </motion.section>

      {/* Top News Section with Scroll Reveal */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Top Headlines</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((news, index) => (
            <motion.div
              key={index}
              className="bg-gray-100  dark:bg-gray-800 rounded-lg shadow-md p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                className="rounded-md w-full object-cover h-48"
                src={
                  news.urlToImage ||
                  "https://plus.unsplash.com/premium_photo-1688561383203-31fed3d85417?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt=""
              />
              <h3 className="text-xl font-bold mb-2">
                {news.title ? news.title.slice(0, 100) : "No Title"}
              </h3>
              <p className="text-sm ">
                {news.description ? news.description.slice(0, 120) + "..." : "No description available"}
              </p>
              <a
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
