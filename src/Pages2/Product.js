import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Product</h1>
      <button onClick={() => navigate("")}>Apple</button>
      <button onClick={() => navigate("samsung")}>Samsung</button>
      <button onClick={() => navigate("vivo")}>Vivo</button>
      <button onClick={() => navigate(-1)}>Back button</button>
      <Outlet />
      <h2>Product page ends</h2>
    </>
  );
};

export default Product;
