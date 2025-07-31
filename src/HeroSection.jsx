function HeroSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center">
      <img
        className="mt-30 md:mt-30 lg:w-9/12"
        src="https://zerodha.com/static/images/landing.png"
        alt="hero-img"
      />

      <h1 className="mt-14 text-xl font-semibold text-stone-600 md:text-3xl">
        Invest in everything
      </h1>
      <p className="mt-4 px-4 text-center text-lg text-stone-600">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      <button className="mt-12 mb-12 h-10 w-42 rounded-sm bg-[#387ED1] text-lg font-semibold text-white hover:bg-black">
        Sign up for free
      </button>
    </div>
  );
}

export default HeroSection;
