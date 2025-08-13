import React from 'react';

const Newsletter = () => {
  return (
  <header className="bg-[#030a0a] px-6 py-10">
  <div className="max-w-7xl  mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0">
    <h1 className="text-white text-2xl font-bold tracking-wide">
      BULLETIN
    </h1>
    <form aria-label="Search headlines" className="flex w-full max-w-[1000px]" role="search">
      <input aria-label="Search for headlines" className="flex-grow bg-[#064a44] text-[#a3b1a9] text-xs px-3  py-1 focus:outline-none" placeholder="Search for headlines" type="search" />
      <button aria-label="Search" className="bg-[#7a3a3a] text-white text-xs font-semibold px-4 py-3" type="submit">
        SEARCH
      </button>
    </form>
  </div>
</header>

  );
};

export default Newsletter;
