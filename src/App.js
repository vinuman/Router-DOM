import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import About from "./Pages/About.js";
import Blog from "./Pages/Blog.js";
import Content from "./Pages/Content.js";
import Navigation from "./Pages/Navigation.js";
import Error from "./Pages/Error.js";
import Product from "./Pages2/Product.js";
import Apple from "./Pages2/Apple.js";
import Samsung from "./Pages2/Samsung.js";
import Vivo from "./Pages2/Vivo.js";

function App() {
  return (
    <>
      <Navigation />
      {/*  <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes> */}

      <Routes>
        <Route path="/product" element={<Product />}>
          <Route index element={<Apple />}></Route>
          <Route path="samsung" element={<Samsung />}></Route>
          <Route path="vivo" element={<Vivo />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
