import { Link } from "react-router-dom";
import WarehouseInventoryListItem from "../WarehouseInventoryListItem/WarehouseInventoryListItem";

const WarehouseInventoryList = ({ items }) => {
  return (
    <>
      <Link className="WarehouseInventoryList__link">
        {items.map((item) => (
          <WarehouseInventoryListItem
            name={item.item_name}
            category={item.category}
            quantity={item.quantity}
          />
        ))}
      </Link>
    </>
  );
};

export default WarehouseInventoryList;
