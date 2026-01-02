'use client';

import { useState } from 'react';
import { Search, ShoppingBag, RefreshCw, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

interface PriceResult {
  platform: string;
  price: number;
  productName: string;
}

const GROCERY_ITEMS = [
  'Rice', 'Wheat', 'Dal', 'Oil', 'Sugar', 'Salt', 'Milk', 'Eggs',
  'Chicken', 'Fish', 'Onion', 'Potato', 'Tomato', 'Garlic', 'Ginger',
  'Turmeric', 'Chilli', 'Coriander', 'Cumin', 'Mustard'
];

const PLATFORMS = ['Blinkit', 'Zepto', 'Instamart', 'BigBasket', 'Amazon', 'Flipkart'];

export default function RecommendationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [budget, setBudget] = useState(1000);
  const [quality, setQuality] = useState<'budget' | 'premium'>('budget');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PriceResult[]>([]);

  const toggleItem = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const searchPrices = async () => {
    if (selectedItems.length === 0) {
      alert('Please select at least one item');
      return;
    }

    setLoading(true);
    try {
      const simulatedResults: PriceResult[] = [];
      selectedItems.forEach(item => {
        PLATFORMS.forEach(platform => {
          const basePrice = quality === 'budget' ? 50 : 100;
          const randomPrice = basePrice + Math.random() * 50;
          simulatedResults.push({
            platform,
            price: Math.round(randomPrice),
            productName: `${item} (${quality === 'budget' ? 'Standard' : 'Premium'})`,
          });
        });
      });

      simulatedResults.sort((a, b) => a.price - b.price);
      setResults(simulatedResults.slice(0, 12));
    } catch (error) {
      console.error('Error searching prices:', error);
      alert('Error searching prices. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = results.reduce((sum, r) => sum + r.price, 0);
  const budgetRemaining = budget - totalPrice;
  const withinBudget = budgetRemaining >= 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="border-b border-pink-100 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">GroceryGuru</h1>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Smart Price Comparison</h1>
          <p className="text-gray-600 mb-8">Find the best deals across all major platforms</p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Your Budget (₹)
              </label>
              <input
                type="number"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 text-lg"
                placeholder="Enter your budget"
              />
            </div>

            <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Quality Preference
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => setQuality('budget')}
                  className={`flex-1 py-3 rounded-xl font-medium transition ${
                    quality === 'budget'
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Budget Friendly
                </button>
                <button
                  onClick={() => setQuality('premium')}
                  className={`flex-1 py-3 rounded-xl font-medium transition ${
                    quality === 'premium'
                      ? 'bg-pink-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Premium
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Select Grocery Items</h2>
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search items..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-10 gap-2">
              {GROCERY_ITEMS
                .filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()))
                .map(item => (
                  <button
                    key={item}
                    onClick={() => toggleItem(item)}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition ${
                      selectedItems.includes(item)
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 hover:border-pink-300 text-gray-700'
                    }`}
                  >
                    {item}
                  </button>
                ))}
            </div>
          </div>

          <button
            onClick={searchPrices}
            disabled={loading || selectedItems.length === 0}
            className="w-full bg-pink-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-pink-700 transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed mb-8"
          >
            {loading ? (
              <>
                <RefreshCw className="w-5 h-5 animate-spin" />
                Searching Prices...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Search Best Prices ({selectedItems.length} items selected)
              </>
            )}
          </button>

          {results.length > 0 && (
            <div className={`p-6 rounded-2xl mb-8 ${
              withinBudget
                ? 'bg-green-50 border-2 border-green-200'
                : 'bg-red-50 border-2 border-red-200'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Budget Status</p>
                  <p className="text-2xl font-bold text-gray-900">
                    ₹{totalPrice.toFixed(0)} / ₹{budget}
                  </p>
                </div>
                <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                  withinBudget ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">
                    {withinBudget
                      ? `Within budget (Save ₹${budgetRemaining.toFixed(0)})`
                      : `Over budget by ₹${Math.abs(budgetRemaining).toFixed(0)}`
                    }
                  </span>
                </div>
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="bg-white p-6 rounded-2xl border border-pink-100 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Best Deals Found</h2>
                <button
                  onClick={searchPrices}
                  className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium"
                >
                  <RefreshCw className="w-4 h-4" />
                  Refresh
                </button>
              </div>
              <div className="space-y-3">
                {results.map((result, index) => (
                  <div
                    key={`${result.platform}-${index}`}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-pink-50 transition border border-gray-100"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold">
                          {result.platform}
                        </span>
                        <p className="font-semibold text-gray-900">{result.productName}</p>
                      </div>
                      <p className="text-sm text-gray-600">
                        {index === 0 && <span className="text-green-600 font-medium">🏆 Best Price</span>}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900">₹{result.price}</p>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center gap-1 text-pink-600 hover:text-pink-700 text-sm font-medium"
                      >
                        Order Now <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {results.length > 0 && (
            <div className="mt-8 p-6 bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl border border-pink-200">
              <h3 className="font-bold text-gray-900 mb-3">💡 Smart Shopping Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Compare prices across platforms before ordering</li>
                <li>• Bulk buying often gives better discounts</li>
                <li>• Check for coupon codes and cashback offers</li>
                <li>• Subscribe to save recurring orders for essentials</li>
              </ul>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 GroceryGuru. Smart grocery shopping for everyone.
          </p>
        </div>
      </footer>
    </div>
  );
}
