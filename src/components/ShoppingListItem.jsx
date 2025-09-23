// import {useState} from "react";

import classes from "./ShoppingListItem.module.css";

export const ShoppingListItem = ({ name, checked, onToggle, onRemove }) => {
  return (
    <div className="flex items-center p-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onToggle}
        className="mr-2"
      />
      <h3 className={`flex-1 ${checked ? "line-through" : ""}`}>
        {name}
      </h3>
      <button onClick={onRemove} className={classes.removeButton}>
        x
      </button>
    </div>
  );
};
