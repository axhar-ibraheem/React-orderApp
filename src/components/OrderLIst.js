import React from "react";

const OrderList = (props) => {
  return (
    <div>
      <h1>Orders</h1>
      <h2>Table 1</h2>
      <ul>
        {props.table1.map((item) => (
          <li key={item.id}>
            {` ${item.price}-${item.dishType} ${item.table}`}
            <button onClick={() => props.deleteTable1(item.id)}>
              Delete Order
            </button>
          </li>
        ))}
      </ul>
      <h2>Table 2</h2>
      <ul>
        {props.table2.map((item) => (
          <li key={item.id}>
            {` ${item.price}-${item.dishType} ${item.table}`}
            <button onClick={() => props.deleteTable2(item.id)}>
              Delete Order
            </button>
          </li>
        ))}
      </ul>
      <h2>Table 3</h2>
      <ul>
        {props.table3.map((item) => (
          <li key={item.id}>
            {` ${item.price}-${item.dishType} ${item.table}`}
            <button onClick={() => props.deleteTable3(item.id)}>
              Delete Order
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
