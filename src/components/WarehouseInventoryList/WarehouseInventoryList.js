import { Link } from "react-router-dom";
import WarehouseInventoryListItem from "../WarehouseInventoryListItem/WarehouseInventoryListItem";

const WarehouseInventoryList = ({ itemsReal }) => {
  const items = [
    {
      item_name: "toothbrush",
      category: "yellow",
      quantity: 7,
    },
  ];

  return (
    <>
      <Link className="warehouse-inventory-list__link">
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
