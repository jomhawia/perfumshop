"use client";
import Button from "@mui/material/Button";

export default function FooterOfNews() {
  return (
    <div className="self-center">
      <div className="flex flex-col items-center gap-5  p-5">
        <div className="font-bold text-2xl">Search</div>
        <div className="flex items-center justify-center ">
          <input
            type="text"
            placeholder="Search our store"
            className="
            w-80 h-10 p-1 border"
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#000",
              color: "#fff",
              height: "40px",
            }}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
