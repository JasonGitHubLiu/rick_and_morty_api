import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/About">
        <div>About</div>
      </Link>
      <Link to="/Character/:symbol">
        <div>Character</div>
      </Link>
      <Link to="/Location">
        <div>Location</div>
      </Link>
    </div>
  );
}
