import React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import "../cssfile/footer.css";

import "../globals.css";
export default function Footer() {
  return (
    <div
      className="footer flex flex-col bg-gray-200"
      style={{ marginTop: "auto" }}
    >
      <Container maxWidth="x-lg" className="bd">
        <div className="footer-content grid grid-cols-5 gap-4 p-4 ">
          <div className=" flex flex-col gap-4">
            <div>MY ACCOOUT</div>
            <p>My account</p>
            <p>Checkout</p>
            <p>Contact us</p>
            <p>Shopping Cart</p>
            <p>Wishlist</p>
            <p>About Us</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div>QUICK LINKS</div>
            <p>My account</p>
            <p>Store Location</p>
            <p>Orders Tracking</p>
            <p>My account</p>
            <p>FAQs</p>
            <p>Service</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div>INFORMATION</div>
            <p>Privacy Page</p>
            <p>Careers</p>
            <p>Contact us</p>
            <p>Delivery Inforamtion</p>
            <p>Faqs</p>
            <p>Term & Conditions</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div>Company</div>
            <p>Shipping Policy</p>
            <p>Help & Contact Us</p>
            <p>Returns & Refunds</p>
            <p>Online Stores</p>
            <p>Wishlist</p>
            <p>Terms and Conditions</p>
          </div>
          <div className=" flex flex-col gap-4">
            <div>ABOUT OUR SHOP</div>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmo incididunt ut labore et dolore
            </p>
            <p>Brooklyn, New York, United States</p>
            <p>+0123-456789</p>
            <p>example@example.com</p>
            <p>as as as as as</p>
          </div>
        </div>
        <hr className="border-t border-gray-300" />
        <div className="flex justify-around items-center p-4 bg-gray-200">
          <div>All Rights Reserved @ Company 2023</div>

          <div className="flex gap-4 justify-center items-center">
            <Button variant="secondary" className="ml-auto mr-4">
              My account
            </Button>
            <Button variant="secondary" className="ml-auto mr-4">
              Checkout
            </Button>
            <Button variant="secondary" className="ml-auto mr-4">
              Contact us
            </Button>
            <Button variant="secondary" className="ml-auto mr-4">
              Shopping Cart
            </Button>
            <Button variant="secondary" className="ml-auto mr-4">
              Wishlist
            </Button>
            <Button variant="secondary" className="ml-auto mr-4">
              About Us
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
