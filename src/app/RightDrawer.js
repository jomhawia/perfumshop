import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { cartContext } from "./CartsProdectContext";
import { useContext } from "react";
export default function RightDrawer() {
  const [state, setState] = React.useState(false);
  const { cart } = useContext(cartContext);

  const cartsList = cart.map((cart) => {
    return (
      <div key={cart.id} className="flex justify-center align-middle gap-3">
        <div
          className=""
          style={{
            backgroundColor: "#e0e0e0",
            width: "220px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <img src={cart.src} />
        </div>
        <div>
          <div>{cart.description}</div>
          <div className="flex justify-start align-middle gap-1">
            <div>{cart.quantity}</div> <div>x</div>
            <div>${cart.price * cart.quantity}</div>
          </div>
        </div>
      </div>
    );
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!state);
  };

  let Subtotal = 0;
  cart.forEach((cart) => {
    Subtotal += cart.price * cart.quantity;
  });
  const list = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer("right", false)}
      onKeyDown={toggleDrawer("right", false)}
    >
      <Container>
        <div className="mt-10  flex flex-col gap-4 align-middle">
          <h1 className="text-3xl">Cart</h1>
          <hr />
          {cartsList}
          <div className="flex justify-between align-middle">
            <div className="text-2xl font-bold ">Subtotal:</div>
            <div className="text-2xl font-bold"> ${Subtotal}</div>
          </div>
          <hr />
          <div className="flex justify-between align-middle">
            <Button variant="contained">VIWE CART</Button>
            <Button variant="contained">CHECHOUT</Button>
          </div>
        </div>
      </Container>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button
          style={{ color: "black" }}
          onClick={toggleDrawer("right", true)}
        >
          Your Cart
          <br />${Subtotal}
        </Button>
        <SwipeableDrawer
          anchor="right"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
