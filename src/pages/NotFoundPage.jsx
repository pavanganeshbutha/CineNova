import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <main>
      <h1>404</h1>
      <h2>Page not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Go back to Home</Link>
    </main>
  );
};

export default NotFoundPage;
