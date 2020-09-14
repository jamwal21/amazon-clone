import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../store/StateProvider";

function Subtotal() {
  const [{basket}, dispatch] = useStateValue()
  var totalAmount = [];
  basket.map(( item ) => totalAmount.push(item.price))
  var sum=0
  for( var i=0; i<totalAmount.length;i++){
    sum = sum + totalAmount[i]
  }
  console.log(sum)
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length}:items) : <strong>0</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
