"use client";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "@/app/ProdectContext";
import AlertCart from "./AlertCart";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TitleIcon from "@mui/icons-material/Title";
export default function RightBody({ count, setCount }) {
  const [numberOfElement, setnumberOfElement] = useState(1);
  const products = useContext(ProductContext);
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-3xl">
        {products[count].title} : {products[count].description}{" "}
      </div>
      <div className="flex gap-1 justify-start items-end">
        <p className="text-3xl font-bold ">Price:</p>
        <p className="text-3xl font-bold">${products[count].price}</p>
        <p className="line-through text-2xl">$21.00</p>
        <p className="" style={{ backgroundColor: "#f9f9f9" }}>
          Save -10%
        </p>
      </div>
      <div>
        <p className="text-2xl">{products[count].detail}</p>
      </div>
      <hr />
      <div className="flex flex-col gap-1">
        <div className="flex gap-2">
          <p>SKU:</p>
          <p>1510</p>
        </div>
        <div className="flex gap-2">
          <p>Vendor:</p>
          <p>Vendor J</p>
        </div>
        <div className="flex gap-2">
          <p>Type:</p>
          <p>Type J</p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-2 p-5">
        <div className="flex justify-center  align-middle ">
          <div
            className="border  border-gray-300 text-3xl p-3"
            onClick={() =>
              setnumberOfElement((prev) => (prev > 1 ? prev - 1 : 1))
            }
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            -
          </div>
          <div className=" border text-2xl border-gray-300 p-3 align-middle">
            {numberOfElement}
          </div>
          <div
            className=" border text-3xl border-gray-300 p-3"
            onClick={() => setnumberOfElement((prev) => prev + 1)}
            style={{ cursor: "pointer", userSelect: "none" }}
          >
            +
          </div>
        </div>
        <AlertCart index={count} quantity={numberOfElement} />
        <Button variant="contained">Buy it now</Button>
        <div className=" hover:bg-[#f9f9f9]">
          <Button style={{ fontSize: "12px" }} variant="text" color="black">
            Add to wishlist
          </Button>
        </div>
        <div className=" hover:bg-[#f9f9f9]">
          <Button style={{ fontSize: "12px" }} variant="text" color="black">
            Compare
          </Button>
        </div>
        <div className=" hover:bg-[#f9f9f9]">
          <Button style={{ fontSize: "11px" }} variant="text" color="black">
            Ask about this product
          </Button>
        </div>
      </div>
      <hr />

      <div className="flex gap-3">
        <div>share:</div>
        <div className="flex justify-center items-center gap-1">
          <FacebookOutlinedIcon />
          Facebook
        </div>
        <div className="flex justify-center items-center gap-1">
          <TitleIcon />
          Twitter
        </div>
        <div className="flex justify-center items-center gap-1">
          <PinterestIcon />
          Pinterest
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2">
        <div>Guaranteed Safe Checkout</div>
        <div className="flex justify-start align-middle gap-1">
          <div className=" w-13 border p-1  border-gray-400">
            <img
              className="w-10 h-5 "
              src={"/image/payMethed/amazon-logo-1024x576.webp"}
            />
          </div>
          <div className="w-13 border  p-1  border-gray-400">
            <img
              className="w-10 h-5"
              src={"/image/payMethed/Apple_Pay_logo.svg.png"}
            />
          </div>
          <div className="w-13 border p-1  border-gray-400">
            <img
              className="w-5 h-5 place-self-center"
              src={"/image/payMethed/Bitcoin.svg.png"}
            />
          </div>
          <div className="w-13 border p-1 border-gray-400">
            <img
              className="w-10 h-5"
              src={"/image/payMethed/google-pay-logo_1280x531.png"}
            />
          </div>
          <div className="w-13 border  p-1  border-gray-400">
            <img
              className="w-10 h-5"
              src={"/image/payMethed/Visa_Inc._logo.svg.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
