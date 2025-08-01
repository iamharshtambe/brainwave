function PricingSection() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col p-4 md:flex-row md:items-center">
      <div>
        <h2 className="mb-6 text-xl font-semibold text-stone-600">
          Unbeatable pricing
        </h2>

        <p className="text-stone-500">
          We pioneered the concept of discount broking and price transparency in
          India. Flat fees and no hidden charges.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-start">
        <div className="flex items-center">
          <img
            className="w-20"
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt=""
          />
          <p className="w-32 text-[10px] text-stone-500">
            Free account opening
          </p>
        </div>

        <div className="flex items-center">
          <img
            className="w-20"
            src="https://zerodha.com/static/images/pricing-eq.svg"
            alt=""
          />
          <p className="w-32 text-[10px] text-stone-500">
            Free equity delivery and direct mutual funds
          </p>
        </div>

        <div className="flex items-center">
          <img
            className="w-20"
            src="https://zerodha.com/static/images/other-trades.svg"
            alt=""
          />
          <p className="w-32 text-[10px] text-stone-500">Intraday and F&O</p>
        </div>
      </div>
    </div>
  );
}

export default PricingSection;
