import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";
import Header from "./pages/Header";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Features from "./pages/Features";
import ProductLayout from "./pages/ProductLayout";
import Form from "./pages/Form";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="form" element={<Form />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/products" element={<ProductLayout />} >
            <Route index element={<Products />} />
            <Route path=":id" element={<Product />} />
            <Route path="features" element={<Features />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
