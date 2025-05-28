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

  if (!product) return <div>Product not found</div>;
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((r, i) => (
          <li key={i}>Rating: {r.rating} — {r.text}</li>
        ))}
      </ul>
      <form onSubmit={submitReview}>
        <textarea value={text} onChange={e => setText(e.target.value)} required />
        <select value={rating} onChange={e => setRating(Number(e.target.value))}>
          {[5,4,3,2,1].map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button type="submit">Add review</button>
      </form>
    </div>
  );
}
