import axios from "axios";
import { useEffect, useState } from "react";
import InventoryCard from "../../components/InventoryCard/InventoryCard";
import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import SearchWarehouses from "../../components/SearchWarehouses/SearchWarehouses";
import "./Inventory.scss";

const Inventory = () => {
  const [inventories, setInventories] = useState(null);

  const getInventories = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/inventories`
    );
    setInventories(data);
  };

  useEffect(() => {
    getInventories();
  }, []);

  if (!inventories) {
    return <p>Loading..</p>;
  }

  const mainTitle = "Inventory";
  const descriptionBtn = "Add New Item";

  return (
    <div className="inventories">
      <div className="inventories__card">
        <SearchWarehouses
          mainTitle={mainTitle}
          descriptionBtn={descriptionBtn}
        />
        <div>
          <InventoryHeader />
        </div>
        {inventories.map((inventories) => {
          return (
            <InventoryCard key={inventories.id} inventories={inventories} />
          );
        })}
      </div>
    </div>
  );
};

export default Inventory;
