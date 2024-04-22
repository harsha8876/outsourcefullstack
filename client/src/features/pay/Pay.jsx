import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe("pk_test_51OwKeuSDvlVISlwf7HqxogdSrXqDRLp4gNDjomFevNvyfvH401GwXmRqi1UNIcih4TNOHpoq4HEAiCDX6xCYRR8u0027U985Ch");

const Pay = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [error, setError] = useState("");

    const { id } = useParams();

    useEffect(() => {
      const makeRequest = async () => {
        try {
          const res = await newRequest.post(
            `/orders/create-payment-intent/${id}`
          );
          setClientSecret(res.data.clientSecret);
        } catch (err) {
          if (err.response && err.response.status === 401) {
            setError(
              <img src="../../images/error-animation.gif" alt="Error Animation" className="h-[500px] m-auto" />
            );
          } else {
            setError("An error occurred while loading payment details.");
            console.log(err);
          }
        }
      };
      makeRequest();
  }, []);
  

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };
    
    return (
        <div name="pay" className="bg-[#F5F5F5]">
            {error ? (
                <p>{error}</p>
            ) : clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
};

export default Pay;
