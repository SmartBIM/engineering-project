import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import Products from "./Pages/Products";
import Header from "./Pages/header";
import "./global.css";
import ConfigurationProvider from "./providers/ConfigurationProvider";

function App() {
  return (
    <Router>
      <ConfigurationProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </ConfigurationProvider>
    </Router>
  );
}

export default App;
