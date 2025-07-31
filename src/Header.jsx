import { Menu } from 'lucide-react';

function Header() {
  return (
    <div className="fixed top-0 right-0 left-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-5">
        <div>
          <img
            className="w-32 md:w-36"
            src="https://zerodha.com/static/images/logo.svg"
            alt="logo-img"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="hidden gap-10 text-stone-600 md:flex md:items-center">
            <a href="/">Signup</a>
            <a href="/">About</a>
            <a href="/">Products</a>
            <a href="/">Pricing</a>
            <a href="/">Support</a>
          </div>
          <Menu className="ml-8 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Header;
