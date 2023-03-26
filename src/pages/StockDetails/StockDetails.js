import ItemCard from "../../components/ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./StockDetails.scss";
import { GET_INVENTORY_ITEM } from "../../utils/apiCalls.mjs";

const StockDetails = () => {
  const [item, setItem] = useState(null);

  const { stockId } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const { data } = await GET_INVENTORY_ITEM(stockId);
      setItem(data);
    };

    try {
      getItem();
    } catch (error) {
      console.log(error);
    }
  }, [stockId]);

  if (!item) {
    return <p>Loading!!!</p>;
  }

  return (
    <div className="stock-details">
      <ItemCard item={item} />
    </div>
  );
};

export default StockDetails;
