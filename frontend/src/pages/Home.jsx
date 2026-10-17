import {
  Truck,
  Search,
  Heart,
  ShoppingCart,
  User,
  MoveRight,
  BadgePercent,
  RotateCcw,
  Smartphone,
  Shirt,
  House,
  SprayCan,
  Dumbbell,
  Gamepad2,
  NotebookPen,
  LayoutGrid,
  ShieldCheck,
  CreditCard,
  Headset,
  RefreshCw,
 
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logo from "../images/logo.webp";
import slider from "../images/slider.webp";
import footer from "../images/footer.webp";
import { useSelector } from "react-redux";
import ProductCard from "../component/ProductCard";


const Home = () => {
  const products = useSelector((state) => state.productReducer.products);

  const randerProduct = products.slice(0, 6).map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });

  return products.length > 0 ? (
    <div>
      {/* Top Header */}
      <div className="flex flex-wrap bg-gradient-to-r from-blue-800 to-blue-600 text-white justify-between px-6 lg:px-12 xl:px-20 py-2 text-sm">
        <div className="flex items-center gap-2">
          <Truck />
          <span>Free shipping on orders over ₹999</span>
        </div>

        <div className="flex gap-4 items-center">
          <span>Customer Support</span>
          <span>|</span>
          <span>Track Order</span>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-wrap justify-between items-center px-6 lg:px-12 xl:px-20 py-3 bg-white shadow-sm">
        <img
          src={logo}
          alt="ShopSphere Logo"
          className="h-10 w-auto object-contain"
        />
        <div className="relative w-[1000px] mx-6">
          <Search
            size={18}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            type="text"
            placeholder="Search for products, brands and more..."
            className="w-full bg-slate-50 border border-slate-200 rounded-md py-2.5 pl-11 pr-4 text-sm placeholder:text-gray-400 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none"
          />
        </div>
        <div className="flex gap-7 items-center">
          <div className="flex gap-2 items-center">
            <Heart /> <span>Wishlist</span>
          </div>
          <div className="flex gap-2 items-center">
            <ShoppingCart /> <span>Cart</span>
          </div>
          <div className="flex gap-2 items-center">
            <User /> <span>Login</span> / <span>Register</span>
          </div>
        </div>
      </div>

      {/* slider & feature */}
      <div className="grid grid-cols-4 gap-7 px-20">
        <div className="col-span-3 flex relative overflow-hidden rounded-lg...">
          {/* slider1 */}
          <div className="bg-blue-100 min-w-full flex justify-between items-center py-4 px-10 mt-10 rounded-lg">
            <div>
              <p className="font-medium text-gray-600 ">UP TO 50% OFF</p>
              <h1 className="text-5xl font-bold pt-3 w-[70%] leading-tight">
                Big Savings, Better Living
              </h1>
              <p className="font-normal text-lg text-gray-600 pt-3">
                Discover amazing products at unbeatable prices.
              </p>
              <button className="bg-blue-500 text-white mt-4 py-3 px-6 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2">
                Shop Now
                <MoveRight size={16} />
              </button>
              {/* dotted */}
              <div className="flex gap-2 mt-8">
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
              </div>
            </div>
            <img
              className="w-[40%] object-contain"
              src={slider}
              alt="Slider Image"
            />
          </div>

          {/* slider2 */}
          <div className="bg-blue-100 min-w-full flex justify-between items-center py-4 px-10 mt-10 rounded-lg">
            <div>
              <p className="font-medium text-gray-600 ">UP TO 50% OFF</p>
              <h1 className="text-5xl font-bold pt-3 ">
                Big Savings,
                <br />
                Better Living
              </h1>
              <p className="font-normal text-gray-600 pt-3">
                Discover amazing products at unbeatable prices.
              </p>
              <button className="bg-blue-500 text-white mt-4 py-3 px-6 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2">
                Shop Now
                <MoveRight size={16} />
              </button>
              {/* dotted */}
              <div className="flex gap-2 mt-6">
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
              </div>
            </div>
            <img
              className="w-[40%] object-contain"
              src={slider}
              alt="Slider Image"
            />
          </div>

          {/* slider3 */}
          <div className="bg-blue-100 min-w-full flex justify-between items-center py-4 px-10 mt-10 rounded-lg">
            <div>
              <p className="font-medium text-gray-600 ">UP TO 50% OFF</p>
              <h1 className="text-5xl font-bold pt-3 ">
                Big Savings,
                <br />
                Better Living
              </h1>
              <p className="font-normal text-gray-600 pt-3">
                Discover amazing products at unbeatable prices.
              </p>
              <button className="bg-blue-500 text-white mt-4 py-3 px-6 rounded-md hover:bg-blue-600 transition-colors flex items-center gap-2">
                Shop Now
                <MoveRight size={16} />
              </button>
              {/* dotted */}
              <div className="flex gap-2 mt-6">
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
                <button className="h-2.5 w-2.5 rounded-full bg-blue-500 "></button>
              </div>
            </div>
            <img
              className="w-[40%] object-contain"
              src={slider}
              alt="Slider Image"
            />
          </div>
        </div>
        {/* featured */}
        <div className="... bg-blue-100 mt-10 rounded-lg p-10 ">
          <div className="bg-white px-7 py-4 rounded-lg flex gap-6  items-center">
            <span className="rounded-full bg-blue-50 p-3">
              <BadgePercent className="w-10 h-10  text-blue-600 flex items-center justify-center" />
            </span>
            <div>
              <h1 className="text-lg font-medium">Best Prices</h1>
              <p className="text-gray-600">Get the best deals online</p>
            </div>
          </div>

          <div className="bg-white px-7 py-4 rounded-lg flex gap-6 mt-4 items-center">
            <span className="rounded-full bg-blue-50 p-3">
              <Truck className="w-10 h-10  text-blue-600 flex items-center justify-center" />
            </span>
            <div>
              <h1 className="text-lg font-medium">Free Shipping</h1>
              <p className="text-gray-600">On orders over ₹999</p>
            </div>
          </div>

          <div className="bg-white px-7 py-4 rounded-lg flex gap-6 mt-4 items-center">
            <span className="rounded-full bg-blue-50 p-3">
              <RotateCcw className="w-10 h-10  text-blue-600 flex items-center justify-center" />
            </span>
            <div>
              <h1 className="text-lg font-medium">Easy Returns</h1>
              <p className="text-gray-600">Hassle-free returns within 7 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* category */}
      <div className="grid grid-cols-9 px-20 mt-6 justify-between gap-5">
        <div className="bg-blue-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-blue-200 p-3">
            <Smartphone className="w-10 h-10 text-blue-600 flex items-center justify-center" />
          </span>
          <h1 className="text-lg font-medium text-black">Electronics</h1>
        </div>

        <div className="bg-violet-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-violet-200 p-3">
            <Shirt className="w-10 h-10 text-violet-600 flex items-center justify-center" />
          </span>
          <h1 className="text-lg font-medium text-black">Fashion</h1>
        </div>

        <div className="bg-orange-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-orange-200 p-3">
            <House className="w-10 h-10 text-orange-600 flex items-center justify-center" />
          </span>
          <h1 className="text-base font-medium text-black">Home</h1>
        </div>

        <div className="bg-pink-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-pink-200 p-3">
            <SprayCan className="w-10 h-10 text-pink-600 flex items-center justify-center" />
          </span>
          <h1 className="text-lg font-medium text-black">Beauty </h1>
        </div>

        <div className="bg-emerald-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-emerald-200 p-3">
            <Dumbbell className="w-10 h-10 text-emerald-600 flex items-center justify-center" />
          </span>
          <h1 className="text-lg font-medium text-black">Sports</h1>
        </div>

        <div className="bg-amber-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-amber-200 p-3">
            <Gamepad2 className="w-10 h-10 text-amber-600 flex items-center justify-center" />
          </span>
          <h1 className="text-lg font-medium text-black">Toys</h1>
        </div>

        <div className="bg-teal-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-teal-200 p-3">
            <ShoppingCart className="w-10 h-10 text-teal-600 flex items-center justify-center" />
          </span>
          <h1 className="text-base font-medium text-black">Groceries</h1>
        </div>

        <div className="bg-indigo-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-indigo-200 p-3">
            <NotebookPen className="w-10 h-10 text-indigo-600 flex items-center justify-center" />
          </span>
          <h1 className="text-base font-medium text-black">Books</h1>
        </div>

        <div className="bg-slate-100 rounded-lg flex flex-col items-center justify-center gap-2 py-5 px-14 text-white">
          <span className="rounded-full bg-slate-200 p-3">
            <LayoutGrid className="w-10 h-10 text-slate-600 flex items-center justify-center" />
          </span>
          <h1 className="text-base font-medium text-black">More</h1>
        </div>
      </div>

      {/* Best selling products carts */}
      <div className=" px-6 lg:px-12 xl:px-20 py-6 text-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Best Selling Products</h1>
          <button className="flex text-blue-500 text-sm font-semibold items-center gap-2">
            View All
            <MoveRight size={16} />
          </button>
        </div>
        <div className="flex gap-4">{randerProduct}</div>
      </div>

      {/* 2 column layout */}
      <div className="flex gap-6 px-6 lg:px-12 xl:px-20 py-6 text-sm">
        {/* layout1 */}
        <div className="bg-blue-100 flex justify-between items-center py-6 px-10 rounded-lg">
          <div>
            <p className="font-medium text-gray-600 ">New Arrivals</p>
            <h1 className="text-3xl font-bold pt-1  leading-tight">
              Latest Smartphones
            </h1>
            <p className="font-normal text-lg text-gray-600 pt-1">
              Powerful. Stylish. Always Connected.
            </p>
            <button className="bg-blue-500 text-white mt-2 py-3 px-6 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center gap-2 ">
              Explore Now
              <MoveRight size={16} />
            </button>
          </div>
          <img
            className="w-[40%] object-contain"
            src={slider}
            alt="Slider Image"
          />
        </div>
        {/* layout2 */}
        <div className="bg-blue-100 flex justify-between items-center py-6 px-10 rounded-lg">
          <div>
            <p className="font-medium text-gray-600 ">Up to 60% off</p>
            <h1 className="text-3xl font-bold pt-1  leading-tight">
              Fashion Collection
            </h1>
            <p className="font-normal text-lg text-gray-600 pt-1">
              Trendy styles for every you.
            </p>
            <button className=" text-black mt-2 py-3 px-6 font-medium rounded-full text-sm border border-gray-500 flex items-center gap-2 ">
              Shop Now
              <MoveRight size={16} />
            </button>
            {/* dotted */}
          </div>
          <img
            className="w-[40%] object-contain"
            src={slider}
            alt="Slider Image"
          />
        </div>
      </div>

      {/* Top Categories carts */}
      <div className=" px-6 lg:px-12 xl:px-20 py-6 text-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Top Categories</h1>
          <button className="flex text-blue-500 text-sm  font-semibold items-center gap-2">
            View All
            <MoveRight size={16} />
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Your Shopping Cart</h2>
          <p className="text-gray-600">Your cart is currently empty.</p>
        </div>
      </div>

      {/* 4 colum layout */}
      <div className=" px-6 lg:px-12 xl:px-20 py-6 text-sm ">
        <div className="grid grid-cols-4 bg-blue-50 rounded-lg">
          <div className=" px-7 py-4  flex gap-6  items-center">
            <span className="rounded-full bg-blue-100 p-2">
              <ShieldCheck className="w-10 h-10  text-blue-600 flex items-center justify-center" />
            </span>
            <div>
              <h1 className="text-lg font-medium">100% Original Products</h1>
              <p className="text-gray-600">Guaranteed authentic</p>
            </div>
          </div>

          <div className=" px-7 py-4 flex gap-6  items-center">
            <span className="rounded-full bg-blue-100 p-2">
              <CreditCard className="w-10 h-10  text-blue-600 flex items-center justify-center" />
            </span>
            <div>
              <h1 className="text-lg font-medium">Secure Payments</h1>
              <p className="text-gray-600">Safe & reliable</p>
            </div>
          </div>

          <div className=" px-7 py-4 flex gap-6  items-center">
            <span className="rounded-full bg-blue-100 p-2">
              <Headset className="w-10 h-10  text-blue-600 flex items-center justify-center" />
            </span>
            <div>
              <h1 className="text-lg font-medium">24/7 Support</h1>
              <p className="text-gray-600">We're here to help</p>
            </div>
          </div>

          <div className=" px-7 py-4 flex gap-6  items-center">
            <span className="rounded-full bg-blue-100 p-2">
              <RefreshCw className="w-10 h-10  text-blue-600 flex items-center justify-center" />
            </span>
            <div>
              <h1 className="text-lg font-medium">Easy Returns</h1>
              <p className="text-gray-600">Hassle-free returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Viewed carts */}
      <div className=" px-6 lg:px-12 xl:px-20 py-6 text-sm">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Recently Viewed</h1>
          <button className="flex text-blue-500 text-sm font-semibold items-center gap-2">
            View All
            <MoveRight size={16} />
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Your Shopping Cart</h2>
          <p className="text-gray-600">Your cart is currently empty.</p>
        </div>
      </div>

      {/* footer */}
      <footer className="bg-[#0e1d31] text-white px-20">
        <div className="grid grid-cols-4 bg-[#0e1d31] text-white py-8 justify-between gap-5">
          <div>
            <img src={footer} alt="" className="w-[35%] object-cover" />
            <p className="text-base text-gray-300 pt-4">
              Your one-shop for everything you need{" "}
            </p>
            <div className="flex gap-4 mt-4 text-gray-300">
              <span className="bg-gray-700 p-2 rounded-full">
                <FaFacebookF />
              </span>
              <span className="bg-gray-700 p-2 rounded-full">
                <FaInstagram />
              </span>
              <span className="bg-gray-700 p-2 rounded-full">
                <FaTwitter />
              </span>
              <span className="bg-gray-700 p-2 rounded-full">
                <FaYoutube />
              </span>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Quick Links</h1>
            <p className="text-gray-300">Home</p>
            <p className="text-gray-300">Products</p>
            <p className="text-gray-300">Categories</p>
            <p className="text-gray-300">Deals</p>
            <p className="text-gray-300">About Us</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Customer Service</h1>
            <p className="text-gray-300">Contact Us</p>
            <p className="text-gray-300">Track Order</p>
            <p className="text-gray-300">Returns & Refunds</p>
            <p className="text-gray-300">FAQ</p>
            <p className="text-gray-300">Help</p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Join Our Newsletter</h1>
            <p className="text-base text-gray-300 pt-2">
              Get the latest updates and offers
            </p>
            <div className="flex gap-2 mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white p-2 text-gray-300 placeholder:text-gray-500 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
              />
              <button className="bg-blue-500 text-white  p-3 rounded-lg hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <hr className="border-gray-600 px-20" />
        <div className="flex flex-wrap justify-between items-center py-4 text-sm">
          <div className="font-light text-gray-400 ">
            ©2025 ShopSphere. All rights reserved.
          </div>
          <div className="font-light text-gray-400 ">
            Privacy Policy | Terms & Conditions
          </div>
        </div>
      </footer>
    </div>
  ) : (
    "Loading..."
  );
};

export default Home;
