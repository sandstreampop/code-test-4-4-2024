/* eslint-disable @typescript-eslint/no-unused-vars */

import "./App.css";
import { data as suitData, Item, Data } from "./data";

function App() {
  const currency = "SEK";
  const totalPrice = getTotalPrice();

  return (
    <div className="App">
      <div className="App-modal">
        <div className="App-modal-main">
          <h1>ORDER / SUMMARY</h1>
          <div className="App-modal-main-text">
            <p>
              <strong>
                Add express delivery for 500kr per model and get your Custom
                Made design in 4-5 business days.
              </strong>
            </p>
            <p>
              Regular delivery time is 5-6 weeks | Refunds are not possible for
              Custom Made orders.
            </p>
          </div>
          <div className="App-modal-main-table">
            <div className="App-modal-main-table-rows">
              <div className="divider full" />
              <div>
                <strong>CATEGORY</strong>
              </div>
              <div>
                <strong>DETAILS</strong>
              </div>
              <div>
                <strong>PRICE</strong>
              </div>
              <div>
                <strong>QUANTITY</strong>
              </div>
              <div className="divider full" />
            </div>
            <div className="App-modal-main-table-rows">
              {suitData.map((category) => (
                <>
                  {category.items.map((item, index) => (
                    <>
                      <div className="uppercase">
                        {index === 0 ? category.category : null}
                      </div>
                      <div>
                        <div className="uppercase">
                          <strong>{item.label}</strong>
                        </div>
                        <div className="uppercase">{item.selection}</div>
                      </div>
                      <div>
                        {index === 0 ? (
                          <strong>
                            {item.price} {currency}
                          </strong>
                        ) : null}
                      </div>
                      <div>
                        {index === 0 ? <strong>{item.quantity}</strong> : null}
                      </div>
                      <div
                        className={
                          "divider" +
                          (index === category.items.length - 1 ? " full" : "")
                        }
                      />
                    </>
                  ))}
                </>
              ))}
            </div>
          </div>
        </div>
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
