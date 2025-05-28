import { Outlet, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav className="bg-indigo-600 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-6">
              <Link to="/" className="font-semibold text-lg hover:text-indigo-200 transition-colors">
                Home
              </Link>
              <Link to="/catalog" className="font-medium hover:text-indigo-200 transition-colors">
                Catalog
              </Link>
              <Link to="/cart" className="font-medium hover:text-indigo-200 transition-colors">
                Cart
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link 
                to="/register" 
                className="px-4 py-2 rounded-md bg-white text-indigo-600 font-medium hover:bg-indigo-50 transition-colors"
              >
                Register
              </Link>
              <Link 
                to="/login" 
                className="px-4 py-2 rounded-md border border-white font-medium hover:bg-indigo-700 transition-colors"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <Outlet />
    </div>
  );
}