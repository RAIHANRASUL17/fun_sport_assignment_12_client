import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import useSelected from "../../../hooks/useSelected";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
  const [selected] = useSelected();
  console.log(selected);

  /*____________________________________________________*/
  const { ID } = useParams();
  console.log("figure out useParams", ID);

  const specificId = selected.find((item) => item.price);
  console.log("getting specificId or not: ", specificId);

  /*____________________________________________________*/

  const total = selected.reduce(
    (previous, current) => current.price + previous,
    0
  );

  const price = parseInt(total.toFixed(2));

  return (
    <>
    <Helmet>
      <title>Fun Sport | Payment</title>
    </Helmet>
    <div className="w-full">
      <SectionTitle
        subHeading={"Please Pay And Enjoy Fun Sport"}
        heading={"Payment"}
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm price={price} selected={selected} ID={ID}></CheckoutForm>
      </Elements>
    </div>
    </>
  );
};

export default Payment;
