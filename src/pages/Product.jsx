import { useParams,useSearchParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  console.log(searchParams.getAll("test")); //getAll回傳陣列
  return <div>Product {id}</div>;
};

export default Product;
