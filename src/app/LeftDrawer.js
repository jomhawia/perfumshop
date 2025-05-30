import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ClearIcon from "@mui/icons-material/Clear";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import Link from "next/link";

export default function LeftDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const list = (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      onClick={toggleDrawer("left", false)}
      onKeyDown={toggleDrawer("left", false)}
    >
      <Container>
        <div className="mt-10  flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div
              style={{
                backgroundImage: `url(/image/perfumelogo-removebg-preview.png)`,
                backgroundSize: "contain",
                height: "80px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                border: "1px solid #ddd",
                width: "80px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            ></div>
            <div>
              <ClearIcon
                style={{ cursor: "pointer", color: "black" }}
                onClick={() => toggleDrawer(false)}
                className="
            bg-white rounded-full p-1
            hover:bg-gray-200 transition-colors duration-300"
              />
            </div>
          </div>
          <hr style={{ color: "" }} />
          <div className="flex flex-col  gap-2 ">
            <div>
              <input
                type="search"
                placeholder="Search our store "
                style={{
                  height: "50px",
                  padding: "5px",
                  paddingLeft: "10px",
                  border: "1px solid #ddd",
                  background: "white",
                  width: "100%",
                }}
              />
            </div>
            <Link href={`/`} style={{ background: "#f9f9f9" }}>
              <Button
                className="Button"
                style={{
                  color: "#000",
                }}
              >
                HOME
              </Button>
            </Link>
            <div className="bg-[#f9f9f9]">
              <Button
                className="Button"
                style={{
                  color: "#000",
                }}
              >
                ABOUT US
              </Button>
            </div>
            <div className="bg-[#f9f9f9]">
              <Button
                className="Button"
                style={{
                  color: "#000",
                }}
              >
                SHOP
              </Button>
            </div>
            <Link href={`/products`} style={{ background: "#f9f9f9" }}>
              <Button
                className="Button"
                style={{
                  color: "#000",
                }}
              >
                PRODUCT
              </Button>
            </Link>
            <Link href={`/Newes`} style={{ background: "#f9f9f9" }}>
              <Button
                className="Button"
                style={{
                  color: "#000",
                }}
              >
                NEWS
              </Button>
            </Link>
            <div className="bg-[#f9f9f9]">
              <Button
                className="Button"
                style={{
                  color: "#000",
                }}
              >
                CONTACT
              </Button>
            </div>
          </div>
          <hr style={{ color: "" }} />
          <div className="flex justify-start items-center gap-2">
            <div style={{ border: "1px solid #ddd", padding: "10px" }}>
              <PersonOutlineIcon />
            </div>
            <p>My Account</p>
          </div>
          <div className="flex justify-start items-center  gap-2">
            <div style={{ border: "1px solid #ddd", padding: "10px" }}>
              <FavoriteIcon />
            </div>

            <p>Wishlist</p>
          </div>
          <div className="flex justify-start items-center  gap-2">
            <div style={{ border: "1px solid #ddd", padding: "10px" }}>
              <ShoppingCartIcon />
            </div>

            <p>Shopping Cart</p>
          </div>
        </div>
      </Container>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Button style={{ color: "black" }} onClick={toggleDrawer("left", true)}>
          <DensitySmallIcon />
          <br />
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
        >
          {list}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}
