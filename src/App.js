import "./App.css";
import ShoppingList from "./components/ShoppingList";

//cd tabulatorem wybór pliku + npm run start - wpisane w terminalu uruchamia aplikację

function App() {
  const name = "Jan";
  const surname = "Kowalski";
  const age = 29;

  const shoppingList = [
    { name: "Pomidory", isNew: false },
    { name: "Ogórki", isNew: false },
    { name: "Kalafiory", isNew: true },
  ];
  const secondShoppingList = [
    { name: "komputer", isNew: false },
    { name: "samochód", isNew: false },
    { name: "buty", isNew: true },
  ];

  return (
    <div className="container">
      <h1>
        Witaj {name} {surname}, {age}
      </h1>
      <h2>Twoja lista zakupów</h2>
      <ShoppingList shoppingList={shoppingList} />
      <h2>Kolejna lista zakupów</h2>
      <ShoppingList shoppingList={secondShoppingList} />
    </div>
  );
}

export default App;
