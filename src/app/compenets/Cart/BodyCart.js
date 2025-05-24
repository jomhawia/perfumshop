"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ClearIcon from "@mui/icons-material/Clear";
import { useContext } from "react";
import { cartContext } from "../../CartsProdectContext";

export default function BodyCart() {
  const { cart, removeFromCart, addToCart, clearCart } =
    useContext(cartContext);

  const carts = cart.map((item) => (
    <div
      key={item.id}
      className="flex justify-between items-center p-4 border gap-5
      border-gray-300 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
    >
      <div className="flex justify-between items-center gap-4">
        <img src={item.src} className="w-20 h-20" />
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
      </div>
      <ClearIcon
        style={{ cursor: "pointer", color: "black" }}
        onClick={() => removeFromCart(item.id)}
        className="
            bg-white rounded-full p-1
            hover:bg-gray-200 transition-colors duration-300"
        fontSize="small"
      />
    </div>
  ));

  return <div className="mt-10 mb-10 ">{carts}</div>;
}
