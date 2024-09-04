import React, { useEffect, useRef } from "react";
import code from "@code-wallet/elements";

const Codepayment = () => {
  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { button } = code.elements.create("button", {
      currency: "usd",
      destination: "FyADBZXgbatVndStsK7L66FRSeVsPgMjVaTeGrW2iGMU",
      amount: 0.95,
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
