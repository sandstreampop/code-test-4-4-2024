import "./App.css";
import { data as suitData, Item, Data } from "./data";

function App() {
  const currency = "SEK";
  const totalPrice = getTotalPrice();

  return (
    <div className="App">
      <div className="App-modal">
        <div className="App-modal-main"></div>
        <div className="App-modal-sidebar"></div>
      </div>
    </div>
  );
}

// Utility method for calculating the total price of the suit.
function getTotalPrice() {
  let totalPrice = 0;
  suitData.forEach((suit) => {
    const { items } = suit;
    items.forEach((item) => {
      const { price } = item;
      if (price !== undefined) {
        totalPrice += price;
      }
    });
  });

  return totalPrice;
}

export default App;
