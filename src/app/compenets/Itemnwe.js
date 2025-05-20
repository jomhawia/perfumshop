"use client";

import { useState } from "react";
import "/src/app/globals.css";
import "/src/app/cssfile/itemnew.css";
import "../cssfile/itemnew.css";

export default function Itemnew() {
  const [itemstate, setItem] = useState([
    {
      id: 1,
      name: "ARMANI",
      price: "$150",
      baeckgroundColor: "white",
      image: "/image/perfume/ARMANI-removebg-preview.png",
    },
    {
      id: 2,
      name: "BOWMORE",
      price: "$220",
      baeckgroundColor: "white",

      image: "/image/perfume/BOWMORE-removebg-preview.png",
    },
    {
      id: 3,
      name: "DOLCE",
      price: "$330",
      baeckgroundColor: "white",

      image: "/image/perfume/DOLCE-removebg-preview.png",
    },
    {
      id: 4,
      name: "KAAL",
      price: "$130",
      baeckgroundColor: "white",

      image: "/image/perfume/KAAL-removebg-preview.png",
    },
    {
      id: 5,
      name: "Prageesh",
      price: "$180",
      baeckgroundColor: "white",
      image: "/image/perfume/Prageesh-removebg-preview.png",
    },
    {
      id: 6,
      name: "REBERT",
      price: "$80",
      baeckgroundColor: "white",
      image: "/image/perfume/rebert-removebg-preview.png",
    },
    {
      id: 7,
      name: "YOU",
      price: "$100",
      baeckgroundColor: "white",
      image: "/image/perfume/YOU-removebg-preview.png",
    },
    {
      id: 8,
      name: "SAUVAGE",
      price: "$300",
      baeckgroundColor: "white",
      image: "/image/perfume/SAUVAGE-removebg-preview.png",
    },
  ]);

  const items = itemstate.map((item) => {
    return (
      <div className="newitem" key={item.id}>
        <div
          style={{
            maxWidth: "250px",
            height: "250px",
            backgroundColor: "#e0e0e0",
            backgroundImage: `url(${item.image})`,
            backgroundPosition: "right bottom",
            backgroundSize: "250px 250px",
            backgroundRepeat: "no-repeat",
            borderRadius: "10px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center">
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#333",
              textAlign: "center",
            }}
          >
            {item.name}
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              textAlign: "center",
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
        new arrival items
        <hr
          style={{
            width: "11%",
            margin: " auto",
          }}
        />
      </h1>
      <div
        className="newItem grid grid-cols-4 grid-rows-2 gap-5"
        style={{ marginTop: "50px" }}
      >
        {items}
      </div>
    </>
  );
}
