"use client";

import { useContext } from "react";
import "/src/app/globals.css";
import "/src/app/cssfile/itemnew.css";
import "../cssfile/itemnew.css";
import { ProductContext } from "../ProdectContext";

export default function Itemnew() {
  const products = useContext(ProductContext);

  const items = products.map((item) => {
    return (
      <div className="newitem hover:[]" key={item.id}>
        <div
          style={{
            backgroundPosition: "center",
            backgroundSize: "contain",
            height: "300px",
            backgroundImage: `url(${item.src})`,
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
            borderRadius: "10px",
          }}
        ></div>
        <div
          className="flex 
          items-center justify-between"
        >
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
            }}
          >
            {item.title}
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
            }}
          >
            {item.price}
          </p>
        </div>
      </div>
    );
  });

  return (
    <>
      <h1
        className="text-3xl font-bold text-center"
        style={{
          marginTop: "80px",
          fontSize: "50px",
          width: "100%",
          textAlign: "center",
        }}
      >
        New Arrival Items
        <hr
          style={{
            width: "11%",
            margin: " auto",
          }}
        />
      </h1>
      <div
        className="newItem grid grid-cols-4 gap-5"
        style={{ marginTop: "50px" }}
      >
        {items}
      </div>
    </>
  );
}
