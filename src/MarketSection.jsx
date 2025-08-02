export default function MarketSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 p-4 md:flex-row md:justify-between">
      <div>
        <img
          src="https://zerodha.com/static/images/index-education.svg"
          alt="index-img"
        />
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-stone-600">
          Free and open market education
        </h2>
        <p className="mt-4 max-w-[600px] text-stone-500">
          Varsity, the largest online stock market education book in the world
          covering everything from the basics to advanced trading.
        </p>
        <button className="mt-4 text-[#387ED1]">Varsity &rarr;</button>

        <p className="mt-4 max-w-[600px] text-stone-500">
          TradingQ&A, the most active trading and investment community in India
          for all your market related queries.
        </p>
        <button className="mt-4 text-[#387ED1]">TradingQ&A &rarr;</button>
      </div>
    </div>
  );
}
