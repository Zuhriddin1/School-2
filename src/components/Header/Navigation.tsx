import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../../constants/navigation';

export function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}