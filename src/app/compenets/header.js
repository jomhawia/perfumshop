"use client";

import * as React from "react";
import "../globals.css";
import "../cssfile/header.css";
import Menu from "./Menu";
import TextField from "@mui/material/TextField";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
  return (
    <div className="grid grid-cols-1 grid-rows-1">
      <div
        className="header flex justify-center items-center "
        style={{ marginTop: "10px" }}
      >
        <div style={{ marginLeft: "100px", fontWeight: "900" }}>
          <img
            src="/image/perfumelogo-removebg-preview.png"
            alt="logo"
            width="100px"
            height="100px"
          />
        </div>
        <div
          className="searchandphone"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: "100px",
            marginLeft: "100px",
          }}
        >
          <div className="phoneHeader flex justify-center items-center">
            <LocalPhoneOutlinedIcon />
            <p
              style={{
                padding: "10px",
                marginRight: "40px",
                fontWeight: "700",
              }}
            >
              phone <br />
              <a href="tel:0787399416" style={{ textDecoration: "none" }}>
                0787399416
              </a>
            </p>
          </div>

          <div className="searchHeader">
            <TextField
              id="outlined-basic"
              style={{
                marginRight: "20px",
              }}
              label="Search Our Store"
              slotProps={{
                input: {
                  type: "search",
                  style: {
                    borderRadius: "50px",
                  },
                },
              }}
            />
          </div>
        </div>
        <div
          className="cart"
          style={{
            marginRight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <a href="/login">
              <SearchIcon
                className="searchIcon"
                style={{
                  marginTop: "10px",
                  marginRight: "20px",
                  display: "none",
                }}
              />
            </a>
            <a href="/login">
              <PersonOutlineOutlinedIcon
                style={{ marginTop: "10px", marginRight: "20px" }}
              />
            </a>
            <a href="/login">
              <ShoppingCartOutlinedIcon
                style={{ marginTop: "10px", marginRight: "20px" }}
              />
            </a>
          </div>
          <a href="/login" style={{ textDecoration: "none" }}>
            <p>
              your cart
              <br />
              $0.00
            </p>
          </a>
        </div>
      </div>
      <hr style={{ color: "#eeeeee" }} />
      {/* <Menu /> */}
      <div
        style={{
          marginTop: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="Button"
          style={{
            margin: "10px",
            color: "#000",
          }}
        >
          HOME
        </Button>
        <Button
          className="Button"
          style={{
            margin: "10px",
            color: "#000",
          }}
        >
          ABOUT US
        </Button>
        <Button
          className="Button"
          style={{
            margin: "10px",
            color: "#000",
          }}
        >
          SHOP
        </Button>
        <Button
          className="Button"
          style={{
            margin: "10px",
            color: "#000",
          }}
        >
          PRODUCT
        </Button>
        <Button
          className="Button"
          style={{
            margin: "10px",
            color: "#000",
          }}
        >
          NEWS
        </Button>
        <Button
          className="Button"
          style={{
            margin: "10px",
            color: "#000",
          }}
        >
          CONTACT
        </Button>
      </div>
    </div>
  );
}
