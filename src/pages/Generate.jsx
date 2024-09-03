import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import QRCode from "react-qr-code";
import { useParams } from "react-router-dom";

const Generate = () => {
  const { name } = useParams();
  return (
    <div>
      <Navbar />
      <hr />

      <div className="text-center mt-20 pb-5">
        <h1 className="text-white text-2xl pb-2 md:text-5xl">Welcome {name}</h1>
        <p className="text-yellow-500">Thanks for registering for the Event</p>
      </div>

      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
          backgroundColor: "red-500",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={name}
          viewBox={`0 0 26 256`}
          bgColor="#EAB308"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Generate;
