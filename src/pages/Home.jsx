import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Discover <span className="text-indigo-600">Amazing Products</span> That Elevate Your Life
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          We curate only the finest items that combine quality, functionality, and style - because you deserve the best.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            to="/catalog" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Shop Now
          </Link>
          <Link 
            to="/about" 
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
          >
            Our Story
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">Every product undergoes rigorous testing to ensure it meets our high standards.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Get your orders delivered at lightning speed with our optimized logistics.</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
              <p className="text-gray-600">Shop with confidence using our 256-bit encrypted payment system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Collections</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Product {item}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">Premium Product {item}</h3>
                  <p className="text-gray-600 text-sm mb-2">Exceptional quality for discerning customers</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-indigo-600">${(99 + item * 20).toFixed(2)}</span>
                    <button className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded hover:bg-indigo-200 transition-colors">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              to="/catalog" 
              className="inline-block px-8 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Customers Say</h2>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-xl italic mb-6">
              "I've never experienced such exceptional customer service combined with outstanding product quality. 
              My order arrived faster than expected and the product exceeded all my expectations!"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center mr-4">
                <span className="font-bold">JD</span>
              </div>
              <div className="text-left">
                <p className="font-semibold">Jamie D.</p>
                <p className="text-indigo-200">Verified Customer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Experience?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Join thousands of satisfied customers who trust us for their lifestyle needs.
          </p>
          <Link 
            to="/catalog" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-lg"
          >
            Start Shopping Now
          </Link>
        </div>
      </section>
    </div>
  );
}