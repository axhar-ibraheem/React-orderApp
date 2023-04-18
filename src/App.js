import "./App.css";
import Order from "./components/Order";
import OrderList from "./components/OrderLIst";
import React, { useState } from "react";

function App() {
  const [table1Items, setTable1Items] = useState([]);
  const [table2Items, setTable2Items] = useState([]);
  const [table3Items, setTable3Items] = useState([]);
  const selectedTable = (table, newDish) => {
    switch (table) {
      case "Table 1":
        setTable1Items((prevState) => [...prevState, newDish]);
        break;
      case "Table 2":
        setTable2Items((prevState) => [...prevState, newDish]);
        break;
      case "Table 3":
        setTable3Items((prevState) => [...prevState, newDish]);
        break;
      default:
        break;
    }
  };
  const deleteTable1Handler = (id) => {
    setTable1Items(table1Items.filter((table1Item) => table1Item.id !== id));
    localStorage.removeItem(id);
  };
  const deleteTable2Handler = (id) => {
    setTable2Items(table2Items.filter((table2Item) => table2Item.id !== id));
    localStorage.removeItem(id);
  };
  const deleteTable3Handler = (id) => {
    setTable3Items(table3Items.filter((table3Item) => table3Item.id !== id));
    localStorage.removeItem(id);
  };

  return (
    <div className="App">
      <Order selectedTable={selectedTable}></Order>
      <OrderList
        table1={table1Items}
        table2={table2Items}
        table3={table3Items}
        deleteTable1={deleteTable1Handler}
        deleteTable2={deleteTable2Handler}
        deleteTable3={deleteTable3Handler}
      ></OrderList>
    </div>
  );
}

export default App;
