import { useParams } from 'react-router-dom';
import productsData from '../products';
import { useCart } from '../store/cartContext';
import { useState } from 'react';

export default function ProductPage() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === Number(id));
  const { addToCart } = useCart();
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem('reviews_' + id);
    return saved ? JSON.parse(saved) : [];
  });
  const [text, setText] = useState('');
  const [rating, setRating] = useState(5);

  function submitReview(e) {
    e.preventDefault();
    const newReviews = [...reviews, { text, rating }];
    setReviews(newReviews);
    localStorage.setItem('reviews_' + id, JSON.stringify(newReviews));
    setText('');
    setRating(5);
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-500">Product not found</h2>
        <Link 
          to="/catalog" 
          className="mt-4 inline-block px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Product Image Section */}
        <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
          {/* Replace with actual product image */}
          <span className="text-gray-400 text-lg">Product Image</span>
        </div>

        {/* Product Info Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">{product.rating.toFixed(1)}</span>
          </div>

          <p className="text-2xl font-bold text-indigo-600">${product.price.toFixed(2)}</p>

          <p className="text-gray-700">{product.description || "No description available"}</p>

          <button 
            onClick={() => addToCart(product)}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full md:w-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="border-t border-gray-200 pt-8">
        <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>

        {/* Review Form */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h4 className="text-lg font-medium mb-4">Write a Review</h4>
          <form onSubmit={submitReview} className="space-y-4">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <select
                id="rating"
                value={rating}
                onChange={e => setRating(Number(e.target.value))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                {[5,4,3,2,1].map(n => (
                  <option key={n} value={n}>{n} star{n !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <textarea
                id="review"
                rows="4"
                value={text}
                onChange={e => setText(e.target.value)}
                required
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Share your thoughts about this product..."
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        {reviews.length > 0 ? (
          <ul className="space-y-6">
            {reviews.map((r, i) => (
              <li key={i} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg
                        key={starIndex}
                        className={`w-5 h-5 ${starIndex < r.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">{new Date().toLocaleDateString()}</span>
                </div>
                <p className="text-gray-700 whitespace-pre-line">{r.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">No reviews yet. Be the first to review!</p>
        )}
      </div>
    </div>
  );
}