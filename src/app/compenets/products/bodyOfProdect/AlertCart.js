"use client";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { useContext } from "react";
import { ProductContext } from "@/app/ProdectContext";
import { cartContext } from "@/app/CartsProdectContext";

export default function AlertCart({ index, quantity }) {
  const [open, setOpen] = React.useState(false);
  const products = useContext(ProductContext);
  const carts = useContext(cartContext);

  const handleClickOpen = () => {
    console.log(carts.cart);
    console.log(index);
    console.log(products[index]);
    carts.addToCart(products[index], quantity);
    console.log(carts.cart);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        style={{
          height: "65px",
        }}
        onClick={handleClickOpen}
      >
        Add to Cart
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="p-10"
        style={{ padding: "20px" }}
      >
        <div className="flex  items-center justify-center">
          <div className="w-50 h-50 flex justify-center items-center">
            <img src={products[index].src} className="" style={{}} />
          </div>
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="text-center">{products[index].description}</div>
            Successfully added to your Cart.
            <div className="flex justify-start align-middle gap-3">
              <Button
                variant="contained"
                onClick={handleClose}
                style={{ color: "black" }}
              >
                View Cart
              </Button>
              <Button
                variant="contained"
                onClick={handleClose}
                style={{ color: "black" }}
                autoFocus
              >
                Checkour
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
