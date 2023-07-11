import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, selected, ID }) => {

console.log("useParams id from checkoutFrom: ", ID);

  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const [axiosSecure] = useAxiosSecure();

  const [clientSecret, setClientSecret] = useState("");

  const { user } = useContext(AuthContext);
  const [btnDisable, setBtnDisable] = useState(false);
  const [transactionId, setTransactionId] = useState("");

console.log(price)

  useEffect(() => {
    if (price > 0) {
      console.log(price);
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        // getting clientSecret from server
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    console.log("is card", card);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }
    /*______________________________*/
    setBtnDisable(true);
    /*______________________________*/

    // card confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "Nothings",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    console.log("payment- intent", paymentIntent);
    setBtnDisable(true);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);

      // save payment information to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        quantity: selected.length,
        selectedItems: selected.map((item) => item._id),
        menuItems: selected.map((item) => item.menuItemId),
        itemsName: selected.map((item) => item.name),
        date: new Date(),
        orderStatus: "service- pending",
      };
      axiosSecure.post("/payments", payment).then((res) => {
        // console.log(res.data);
        console.log(res.data.result);
        if (res.data.result.insertedId) {
          // alert("payment is successfully posted");
          Swal.fire({
            title: 'payment is successfully done, Thanks!',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      });
    }
  };
 
  console.log("----check clientSecret",clientSecret)


  return (
    <>
      <form className="px-12" onSubmit={handleSubmit}>
        <CardElement
          className="border-gray-500 border-4 p-12 rounded"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex justify-center mt-4">
          <button
            className="btn btn-info btn-sm px-6"
            type="submit"
            disabled={!stripe || !clientSecret || btnDisable}

            // disabled={!stripe || !clientSecret }
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-500 ml-12">{cardError}</p>}
      {transactionId && (
        <p className="text-success text-xl p-4">
          Transaction is successfully done and id is= {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckoutForm;
