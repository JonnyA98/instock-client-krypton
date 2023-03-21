import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import AddStock from "./pages/AddStock/AddStock";
import AddWarehouse from "./pages/AddWarehouse/AddWarehouse";
import EditStock from "./pages/EditStock/EditStock";
import EditWarehouse from "./pages/EditWarehouse/EditWarehouse";
import Inventory from "./pages/Inventory/Inventory";
import StockDetails from "./pages/StockDetails/StockDetails";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import Warehouses from "./pages/Warehouses/Warehouses";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Warehouses />} />
        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/warehouses/:warehouseId" element={<WarehouseDetails />} />
        <Route
          path="/warehouses/edit/:warehouseId"
          element={<EditWarehouse />}
        />
        <Route path="/warehouses/add-warehouse" element={<AddWarehouse />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:stockId" element={<StockDetails />} />
        <Route path="/inventory/edit/:stockId" element={<EditStock />} />
        <Route path="/inventory/add-stock" element={<AddStock />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
