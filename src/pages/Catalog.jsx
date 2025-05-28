import { useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../products';

export default function Catalog() {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('name');

  const filtered = productsData
    .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => {
      if (sort === 'price') return a.price - b.price;
      if (sort === 'rating') return b.rating - a.rating;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="px-4 py-2 border rounded-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        
        <select
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price (Low to High)</option>
          <option value="rating">Sort by Rating (High to Low)</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map(p => (
          <div key={p.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link to={`/product/${p.id}`} className="block">
              <div className="p-4">
                <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center">
                  {/* Placeholder for product image - replace with your actual image */}
                  <span className="text-gray-400">Product Image</span>
                </div>
                <h3 className="font-semibold text-lg mb-1 truncate">{p.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-indigo-600">${p.price.toFixed(2)}</span>
                  <span className="flex items-center text-yellow-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i}>{i < Math.round(p.rating) ? '★' : '☆'}</span>
                    ))}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No products found matching your search.
        </div>
      )}
    </div>
  );
}