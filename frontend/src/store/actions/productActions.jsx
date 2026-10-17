import axios from "../../api/apiConfigure";
import { loadProduct } from "../reducer/productSlice";

export const asyncLoadProduct = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadProduct(data));
  } catch (error) {
    console.log(error);
  }
};
