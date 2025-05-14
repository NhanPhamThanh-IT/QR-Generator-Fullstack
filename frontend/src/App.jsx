import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav style={{ padding: 10, borderBottom: "1px solid #ccc" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/products">Products</Link>
      </nav>
      <main style={{ padding: 20 }}>
        <Outlet />
      </main>
    </div>
  );
}
