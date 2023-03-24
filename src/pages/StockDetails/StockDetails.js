import ItemCard from "../../components/ItemCard/ItemCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./StockDetails.scss";

const StockDetails = () => {
  const [item, setItem] = useState(null);

  const { stockId } = useParams();

  const getItem = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/inventories/${stockId}`
    );
    setItem(data);
  };

  useEffect(() => {
    try {
      getItem();
    } catch (error) {
      console.log(error);
    }
  }, []);

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
