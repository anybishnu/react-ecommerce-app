import { Star } from "lucide-react";

const ProductCard = (props) => {
  const {
    image,
    productName,
    rating: { rate, count },
    originalPrice,
    salePrice,
    discountPercentage,
  } = props.product;
  return (
    <div className="bg-gray-50 border border-gray-200 rounded  p-4">
      <img src={image} alt="" className="w-[100%] h-[50%] rounded" />
      <h1 className="text-base font-medium mt-3">{productName}</h1>
      <p className="flex item-center gap-2 mt-1">
        <span className="flex items-center  text-yellow-400 font-bold">
          <Star fill="gold" strokeWidth={0} size={14} className="mr-1" />
          {rate}
        </span>
        <span className="flex items-center  text-gray-400">
          <Star fill="gray" strokeWidth={0} size={14} className="mr-1" />(
          {count})
        </span>
      </p>
      <p className="flex item-center gap-3 mt-2">
        <span className="text-xl font-semibold">${salePrice}</span><span className="text-base text-gray-400 line-through">${originalPrice}</span>
      </p>
      <p className="mt-2 bg-green-500 text-white p-1 w-20 text-center rounded">{discountPercentage}% OFF</p>
    </div>
  );
};

export default ProductCard;
