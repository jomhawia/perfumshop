"use client";

import * as React from "react";
import "../globals.css";
import "../cssfile/header.css";
import LeftDrawer from "../LeftDrawer";
import TextField from "@mui/material/TextField";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Link from "next/link";

import RightDrawer from "@/app/RightDrawer";

export default function Header() {
  return (
    <div className="bg-[#f8f8f8] ">
      <div className="header flex justify-center items-center ">
        <div
          style={{
            backgroundImage: `url(/image/perfumelogo-removebg-preview.png)`,
            backgroundSize: "contain",
            height: "100px",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100px",
          }}
        ></div>
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <SearchIcon
            sx={{
              display: { xs: "block", md: "none" },
            }}
          />
          <a href="/login">
            <PersonOutlineOutlinedIcon />
          </a>
          <a href="/login">
            <ShoppingCartOutlinedIcon />
          </a>
          <RightDrawer />
        </div>
      </div>
      <hr style={{ color: "#eeeeee" }} />
      <div className="">
        <div className="MENU">
          <div>MENU</div>
          <LeftDrawer />
        </div>
      </div>
      <div
        className="headerButton flex justify-center items-center"
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={`/`}>
          <Button
            className="Button"
            style={{
              margin: "10px",
              color: "#000",
            }}
          >
            HOME
          </Button>
        </Link>
        <Link href={`/aboutUs`}>
          <Button
            className="Button"
            style={{
              margin: "10px",
              color: "#000",
            }}
          >
            ABOUT US
          </Button>
        </Link>
        <Button
          className="Button"
          style={{
            margin: "10px",
            color: "#000",
          }}
        >
          SHOP
        </Button>
        <Link href={`/products`}>
          <Button
            className="Button"
            style={{
              margin: "10px",
              color: "#000",
            }}
          >
            PRODUCT
          </Button>
        </Link>
        <Link href={`/Newes`}>
          <Button
            className="Button"
            style={{
              margin: "10px",
              color: "#000",
            }}
          >
            NEWS
          </Button>
        </Link>
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
