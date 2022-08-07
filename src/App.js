import { BrowserRouter, Link } from "react-router-dom";

import AppRoutes from "./Routes";

import "./styles/App.css";

export default function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <nav>
          <Link to="/">Meu Feed</Link>
          <Link to="/most-viewed">Mais Vistos</Link>
        </nav>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}
