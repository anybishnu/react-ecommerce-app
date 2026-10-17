import MainRoute from "./routes/MainRoute";
import Navbar from "./component/Navbar";
import { useEffect } from "react";
import { asyncLoadProduct } from "./store/actions/productActions";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadProduct());
  });
  return (
    <div>
      <Navbar />
      <MainRoute />
    </div>
  );
};

export default App;
