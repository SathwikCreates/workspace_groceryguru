import { ShoppingBag, Sparkles, Clock, DollarSign, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="border-b border-pink-100 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">GroceryGuru</h1>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-gray-600 hover:text-pink-600 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-pink-600 transition">How it Works</a>
            <a href="#platforms" className="text-gray-600 hover:text-pink-600 transition">Platforms</a>
            <Link
              href="/recommendations"
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition font-medium"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Smart Grocery Shopping</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find the Best Deals
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400">
              Every Time
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare grocery prices across Blinkit, Zepto, Instamart, BigBasket, Amazon Fresh & Flipkart.
            Save money and time with real-time price tracking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recommendations"
              className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition font-semibold text-lg flex items-center justify-center gap-2"
            >
              Start Shopping
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#features"
              className="bg-white text-pink-600 px-8 py-4 rounded-full border-2 border-pink-200 hover:border-pink-400 transition font-semibold text-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Why GroceryGuru?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We make grocery shopping smarter, faster, and cheaper for you
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-pink-50 rounded-2xl border border-pink-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Price Comparison</h3>
              <p className="text-gray-600">
                Compare prices across 6+ platforms instantly to find the best deals
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl border border-pink-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Updates</h3>
              <p className="text-gray-600">
                Get live price updates and alerts when prices drop
              </p>
            </div>
            <div className="p-6 bg-pink-50 rounded-2xl border border-pink-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                Get personalized grocery suggestions based on your budget and needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-pink-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">How It Works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Three simple steps to smarter grocery shopping
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Set Your Budget</h3>
              <p className="text-gray-600">
                Enter your budget and select your quality preferences
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Compare Prices</h3>
              <p className="text-gray-600">
                We search across all platforms to find you the best deals
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Order & Save</h3>
              <p className="text-gray-600">
                Order directly from your chosen platform and save money
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Supported Platforms</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            We compare prices across all major grocery delivery platforms
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {['Blinkit', 'Zepto', 'Instamart', 'BigBasket', 'Amazon Fresh', 'Flipkart'].map((platform) => (
              <div
                key={platform}
                className="p-6 bg-gray-50 rounded-xl text-center hover:bg-pink-50 transition border border-gray-200"
              >
                <div className="text-sm font-semibold text-gray-700">{platform}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold">GroceryGuru</h2>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 GroceryGuru. Smart grocery shopping for everyone.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
