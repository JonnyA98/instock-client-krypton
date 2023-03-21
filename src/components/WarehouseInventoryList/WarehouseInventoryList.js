import { Link } from "react-router-dom";

const WarehouseInventoryList = ({ items }) => {
  return (
    <>
      <Link>
        {items.map((item) => (
          <WarehouseInventoryListItem />
        ))}
      </Link>
    </>
  );
};

export default WarehouseInventoryList;
