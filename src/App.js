import ShoppingList from "./ShoppingList";
import Clicker from "./Clicker";
import Form from "./Form";
import Counter from "./Counter";
import Toggler from "./Toggler";
import "./styles.css";

const data = [
  { id: 20, name: "eggs", quantity: 6, completed: false },
  { id: 1, name: "milk", quantity: 2, completed: false },
  { id: 2, name: "bread", quantity: 1, completed: true },
  { id: 3, name: "coffee", quantity: 2, completed: true },
  { id: 4, name: "tea", quantity: 1, completed: false },
]

export default function App() {
  return (
    <div className="App">

      <h1>⚛️ React ⚛️</h1>
      {/* <ShoppingList items={data}></ShoppingList> */}

      {/* <Form /> */}

      {/* <Counter /> */}

      <Toggler />
    </div>
  );
}
