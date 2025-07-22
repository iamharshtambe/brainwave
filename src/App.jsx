import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/zerodha">
        <h1>Go to Zerodha</h1>
      </Link>
      <Link to="/stripe">
        <h1>Go to Stripe</h1>
      </Link>
    </div>
  );
}

export default App;
