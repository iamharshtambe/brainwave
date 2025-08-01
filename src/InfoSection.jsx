function InfoSection() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col items-center px-4 md:flex-row md:gap-6">
        <div>
          <h2 className="mt-16 mb-10 text-xl font-semibold text-stone-600">
            Trust with confidence
          </h2>

          <h3 className="text-xl font-semibold text-stone-600">
            Customer-first always
          </h3>
          <p className="mt-2 text-stone-500 md:max-w-4xl">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-stone-600">
            No spam or gimmicks
          </h3>
          <p className="mt-2 text-stone-500 md:max-w-4xl">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like. Our
            philosophies.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-stone-600">
            The Zerodha universe
          </h3>
          <p className="mt-2 text-stone-500 md:max-w-4xl">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h3 className="mt-10 text-xl font-semibold text-stone-600">
            Do better with money
          </h3>
          <p className="mt-2 text-stone-500 md:max-w-4xl">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div>
          <img
            className="mt-2 md:w-[600px]"
            src="https://zerodha.com/static/images/ecosystem.png"
            alt="ecosystem-img"
          />

          <div className="mx-auto mt-6 flex justify-center gap-10">
            <button className="w-46 cursor-pointer font-semibold text-[#387ED1]">
              Explore our products &rarr;
            </button>
            <button className="w-46 cursor-pointer font-semibold text-[#387ED1]">
              Try Kite demo &rarr;
            </button>
          </div>
        </div>
      </div>
      <img
        className="mx-auto mt-18 mb-14"
        src="https://zerodha.com/static/images/press-logos.png"
        alt="press-img"
      />
    </div>
  );
}

export default InfoSection;
