import ItemCard from "../../components/ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const StockDetails = () => {
  const [item, setItem] = useState(null);
  const [statusClass, setStatusClass] = useState("");
  const { itemId } = useParams();
  useEffect(() => {
    const getItem = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/inventories/${itemId}`
      );
      setItem(data);
    };
  });

  return (
    <div>
      <ItemCard item={item} />
    </div>
  );
};

export default StockDetails;
