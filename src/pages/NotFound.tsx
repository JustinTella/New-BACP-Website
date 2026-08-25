import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-serif text-7xl text-azure">404</p>
        <h1 className="display mt-4 text-3xl">This page took a different path.</h1>
        <p className="mt-3 text-muted">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn-primary mt-8">
          Back to home
        </Link>
      </div>
    </section>
  );
}
