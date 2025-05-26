"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import { useContext } from "react";

import { ProductContext } from "../ProdectContext";
import Button from "@mui/material/Button";

const MotionSlide = motion(Slide);

const variants = {
  enter: (direction) => ({
    x: direction === "left" ? -300 : 300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction === "left" ? 300 : -300,
    opacity: 0,
  }),
};

// Slider item component
function Slide({ slide, direction }) {
  return (
    <motion.div
      className=""
      key={slide.id}
      custom={direction}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: 0.5 }}
      style={{
        padding: "2rem",
        paddingLeft: "100px",
        paddingTop: "100px",
        borderRadius: "1rem",
        color: "#000",
        height: "450px",
        border: "1px solid #ddd",
        transition: "transform 0.3s ease",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
      }}
    >
      <div className="flex flex-col justify-center items-start align-middle">
        <h1 style={{ fontSize: "50px" }}>{slide.title}</h1>
        <p>{slide.description}</p>
        <hr style={{ margin: "10px 0 0 0", width: "100px" }} />
        <p style={{ marginTop: "20px" }}>{slide.detail}</p>
        <button
          style={{
            background: "white",
            color: "#005577 ",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
            marginTop: "30px",
            width: "150px",
            height: "50px",
            fontSize: "20px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
              background: "#b28900",
            },
          }}
        >
          buy now
        </button>
      </div>

      <div>
        <img
          className="imageInSlider"
          src={slide.src}
          alt={slide.title}
          style={{
            width: "300px",
            height: "300px",
            position: "absolute",
            right: "300px",
            transform: "translateY(-50%)",
            top: "50%",
            zIndex: "0",
          }}
        />
      </div>
    </motion.div>
  );
}

export default function Slider() {
  const products = useContext(ProductContext);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isHovered, setIsHovered] = useState(false);
  const handleChange = (dir) => {
    setDirection(dir);
    setIndex((prev) => {
      if (dir === "left") {
        return prev === 0 ? products.length - 1 : prev - 1;
      } else {
        return prev === products.length - 1 ? 0 : prev + 1;
      }
    });
  };
  return (
    <div className="button-container flex flex-col justify-center align-middle gap-10">
      <div>
        <AnimatePresence mode="wait" custom={direction}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MotionSlide
              key={products[index].id}
              slide={products[index]}
              direction={direction}
            />
            <Button
              className="button-transition transition-all duration-1000 ease-in-out"
              style={{
                position: "absolute",
                top: "50%",
                left: "20px",
                fontSize: "30px",
                fontWeight: "bold",
                transition: "all 5s ease",
                display: isHovered ? "block" : "none",
              }}
              variant="contained"
              onClick={() => handleChange("left")}
            >
              ←
            </Button>
            <Button
              className="button-transition transition-all duration-1000 ease-in-out"
              style={{
                position: "absolute",
                top: "50%",
                right: "20px",
                fontSize: "30px",
                fontWeight: "bold",
                transition: "all 5s ease",
                display: isHovered ? "block" : "none",
              }}
              variant="contained"
              onClick={() => handleChange("right")}
            >
              →
            </Button>
          </div>
        </AnimatePresence>
      </div>

      <Container
        className="streak flex justify-around align-middl border-1 justify-items-center"
        sx={{
          bgcolor: "white",
          alignItems: "center",
          padding: "30px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="item1"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
            width: "300px",
          }}
        >
          <LocalShippingOutlinedIcon
            style={{
              scale: "2",
            }}
          />
          Free Shipping
          <br />
          On all orders over $49.00
        </div>
        <div
          className="item2"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
            width: "300px",
          }}
        >
          <RequestQuoteOutlinedIcon style={{ scale: "2" }} />
          15 days returns <br />
          OMoneyback guarantee
        </div>
        <div
          className="item3"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
            width: "300px",
          }}
        >
          <CreditCardOutlinedIcon style={{ scale: "2" }} />
          Secure checkout <br />
          Protected by Paypal
        </div>
        <div
          className="item4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px",
            width: "300px",
          }}
        >
          <RedeemOutlinedIcon style={{ scale: "2" }} />
          Offer & gift here <br /> On all orders over
        </div>
      </Container>
    </div>
  );
}
