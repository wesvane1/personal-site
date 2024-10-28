import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Wesley Vane</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
