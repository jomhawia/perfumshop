"use client";

import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { useState } from "react";

// Make sure this component is not called inside another Hook or callback
export default function Review() {
  const [review, setReview] = useState({
    title: "",
    rating: 0,
    review: "",
    name: "",
    email: "",
  });
  const [display, setdisplay] = useState(false);

  function handleDisplay() {
    setdisplay(!display);
  }
  // Use CSS transitions for smooth vanishing
  return (
    <>
      <div className="grid col-span-1 gap-5 justify-center align-middle">
        <h1 className="text-3xl font-bold  ">Customer Reviews</h1>
        <div className=" flex justify-center">
          <Button variant="contained" onClick={handleDisplay}>
            Write a review
          </Button>
        </div>
      </div>

      <form
        className={`transition-all duration-1300 ease-in-out overflow-hidden ${
          display ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className=" ">
          <h1 className="text-2xl font-bold justify-self-center ">
            Write a review
          </h1>
          <div className="flex flex-col items-center">
            <div>Rating</div>
            <Rating
              name="simple-controlled"
              value={review.rating}
              onChange={(event, newValue) => {
                setReview({ ...review, rating: newValue });
              }}
              className="mb-5"
              precision={0.5}
              size="large"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="">Review Title</div>
            <input
              value={review.title}
              onChange={(t) => setReview({ ...review, title: t.target.value })}
              className="border border-gray-400 p-2.5"
              type="text"
              placeholder="Give your review atitle"
              style={{ width: "50%", height: "50px" }}
            />
          </div>
          <div className="flex flex-col items-center">
            <div>Review</div>
            <textarea
              value={review.review}
              onChange={(r) => {
                setReview({ ...review, review: r.target.value });
              }}
              className="border border-gray-400 p-2.5"
              placeholder="Write your comments here"
              style={{ width: "50%", height: "100px" }}
            />
          </div>
          <div className="flex flex-col items-center">
            <div>Name</div>
            <input
              value={review.name}
              onChange={(n) => setReview({ ...review, name: n.target.value })}
              className="border border-gray-400 p-2.5"
              type="text"
              placeholder="Enter your name"
              style={{ width: "50%", height: "50px" }}
            />
          </div>
          <div className="flex flex-col items-center">
            <div>Email</div>
            <input
              value={review.email}
              onChange={(e) => setReview({ ...review, email: e.target.value })}
              className="border border-gray-400 p-2.5"
              type="text"
              placeholder="Enter your email"
              style={{ width: "50%", height: "50px" }}
            />
            <Button variant="outlined">Cancel review</Button>
            <Button variant="contained" type="submit" style={{ width: "50%" }}>
              Submit Review
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
