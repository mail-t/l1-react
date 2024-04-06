import { nanoid } from "nanoid";
import ShoppingListItem from "./ShoppingListItem";

const ShoppingList = ({ shoppingList }) => {
  return (
    <ul>
      {shoppingList.map((groceryItem) => {
        return (
          <ShoppingListItem
            key={nanoid()}
            itemName={groceryItem.name}
            isNew={groceryItem.isNew}

// komponet wykorzystuje 2 wlasciwosci napisane przeze mnie i 3-key ukryty w .map


          />
        );
      })}
    </ul>
  );
};

export default ShoppingList;
