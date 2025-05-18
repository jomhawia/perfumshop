import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

export default function Review() {
  return (
    <>
      <div className="grid col-span-1 gap-5 justify-center align-middle">
        <h1 className="text-3xl font-bold  ">Customer Reviews</h1>
        <div className=" flex justify-center">
          <Button variant="contained">Write a review</Button>
        </div>
      </div>

      <div className=" ">
        <h1 className="text-2xl font-bold justify-self-center ">
          Write a review
        </h1>
        <div className="flex flex-col items-center">
          <div>Rating</div>
          <Rating size="large" />
        </div>
        <div className="flex flex-col items-center">
          <div className="">Review Title</div>
          <input
            className="border border-gray-400 p-2.5"
            type="text"
            placeholder="Give your review atitle"
            style={{ width: "50%", height: "50px" }}
          />
        </div>
        <div className="flex flex-col items-center">
          <div>Review</div>
          <textarea
            className="border border-gray-400 p-2.5"
            placeholder="Write your comments here"
            style={{ width: "50%", height: "100px" }}
          />
        </div>
        <div className="flex flex-col items-center">
          <div>Name</div>
          <input
            className="border border-gray-400 p-2.5"
            type="text"
            placeholder="Enter your name"
            style={{ width: "50%", height: "50px" }}
          />
        </div>
        <div className="flex flex-col items-center">
          <div>Email</div>
          <input
            className="border border-gray-400 p-2.5"
            type="text"
            placeholder="Enter your email"
            style={{ width: "50%", height: "50px" }}
          />
          <Button variant="outlined">Cancel review</Button>
          <Button variant="contained" style={{ width: "50%" }}>
            Submit Review
          </Button>
        </div>
      </div>
    </>
  );
}
