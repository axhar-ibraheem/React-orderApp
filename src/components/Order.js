import React, { useState } from "react";

const Order = (props) => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [dishType, setDishType] = useState("");
  const [table, setTable] = useState("Table 1");

  const inputOrderIdHandler = (event) => {
    setId(event.target.value);
  };
  const inputPriceHandler = (event) => {
    setPrice(event.target.value);
  };
  const inputDishHandler = (event) => {
    setDishType(event.target.value);
  };
  const inputTableHandler = (event) => {
    setTable(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const newDish = {
      id: id,
      price: price,
      dishType: dishType,
      table: table,
    };
    if (id !== "") {
      localStorage.setItem(id, JSON.stringify(newDish));
    }
    props.selectedTable(table, newDish);

    setId("");
    setPrice("");
    setDishType("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="order-id">Unique Order Id</label>
      <input
        type="number"
        name="order-id"
        id="order-id"
        value={id}
        onChange={inputOrderIdHandler}
      />
      <label htmlFor="price">Choose Price</label>
      <input
        type="number"
        name="price"
        id="price"
        value={price}
        onChange={inputPriceHandler}
      />
      <label htmlFor="dish">Choose Dish</label>
      <input
        type="text"
        name="order-id"
        id="dish"
        value={dishType}
        onChange={inputDishHandler}
      />
      <label htmlFor="order-id">Choose a Table</label>
      <select name="table" id="table" onChange={inputTableHandler}>
        <option value="Table 1">Table 1</option>
        <option value="Table 2">Table 2</option>
        <option value="Table 3">Table 3</option>
      </select>
      <button type="submit">Add to Bill</button>
    </form>
  );
};
export default Order;
