import ShoppingListItem from "./ShoppingListItem";
function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          {...i}
        />
        // <ShoppingListItem key={i.id} {...i} />
      ))}
    </ul>
  );
}

export default ShoppingList;
