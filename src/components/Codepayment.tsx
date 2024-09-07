import React, { useEffect, useRef } from "react";
import code from "@code-wallet/elements";
import { useNavigate } from "react-router-dom";

const Codepayment = ({name, id}) => {
  const el = useRef<HTMLDivElement>(null);

  const navigate = useNavigate()

  useEffect(() => {
    const { button } = code.elements.create("button", {
      currency: "usd",
      destination: "FyADBZXgbatVndStsK7L66FRSeVsPgMjVaTeGrW2iGMU",
      amount: 0.95,
      appearance: "light",
    });

    button.on('success', async (event) => {
      // Handle successful payment, the intent ID will be provided in the event object
      navigate(`/generate/${name}`)
      // return true; // Return true to prevent the browser from navigating to the optional success URL provided in the confirmParams
  });
  
  button.on('cancel', async (event) => {
      // Handle cancelled payment, the intent ID will be provided in the event object
      navigate(`/event/${id}`);
      alert("Payment not successful")
      // return true; // Return true to prevent the browser from navigating to the optional cancel URL provided in the confirmParams
  });

    button.mount(el.current!);
  }, []);

  return (
    <div id="codepayment">
      <div className="mb-5" ref={el} />
    </div>
  );
};

export default Codepayment;
