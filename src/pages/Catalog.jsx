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
    <div>
      <h2>Catalog</h2>
      <input placeholder="Filter by name" value={filter} onChange={e => setFilter(e.target.value)} />
      <select value={sort} onChange={e => setSort(e.target.value)}>
        <option value="name">By Name</option>
        <option value="price">By Price</option>
        <option value="rating">By Rating</option>
      </select>
      <ul>
        {filtered.map(p => (
          <li key={p.id}>
            <Link to={`/product/${p.id}`}>{p.name}</Link> — ${p.price} — Rating: {p.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}
