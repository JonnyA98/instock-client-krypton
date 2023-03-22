import "./Warehouses.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ListWarehouses from "../../components/ListWarehouses/ListWarehouses";
import SearchWarehouses from "../../components/SearchWarehouses/SearchWarehouses";

const Warehouses = () => {
  const [listWarehouses, setListWarehouses] = useState(null);

  const getWarehouses = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/warehouses`
    );
    setListWarehouses(data);
  };
  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <div className="warehouses">
      <div className="warehouses__card">
        <SearchWarehouses />
        <ListWarehouses listWarehouses={listWarehouses} />
      </div>
    </div>
  );
};

export default Warehouses;
