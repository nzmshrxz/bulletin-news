import React from 'react'

export default function NewsHero() {
  return (
    <nav className="w-full bg-gray-900 px-4 py-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center">
        
        {/* Left: Categories */}
        <ul className="flex flex-wrap gap-x-1 gap-y-1 text-[16px] lg:text-sm font-semibold text-white flex-grow">
          <li className="bg-black px-2 py-1 cursor-pointer">Politics</li>
          <li className="bg-[#064a44] px-2 py-1 cursor-pointer">World</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Economy</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Science &amp; Tech</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Business</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Travel</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Climate</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Lifestyle</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Food</li>
          <li className="px-2 py-1 cursor-pointer hover:bg-black">Sports</li>
        </ul>

        {/* Right: Weather Info */}
        <div className="flex items-center space-x-2 text-white text-[13px] lg:text-sm font-normal flex-shrink-0 mt-2 sm:mt-0">
          <span>13:40</span>
          <i className="fas fa-cloud-sun"></i>
          <span>24 °C</span>
        </div>
      </div>
    </nav>
  )
}
