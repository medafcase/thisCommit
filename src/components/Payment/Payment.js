import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import ShoeItem from "../Checkout/ShoeItem/ShoeItem";
import "./Payment.css";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  const history = useHistory();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(()=> {
    const getClientSecret = async () => {
      const response = await Axios.post({
        
      })
    }
  })
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{cart?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {cart?.map((item) => (
              <ShoeItem
                id={item.id}
                image={item.image}
                title={item.title}
                before={item.before}
                after={item.after}
                category={item.category}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">


            </div>
          </div>
      </div>
    </div>
  );
}
export default Payment;
