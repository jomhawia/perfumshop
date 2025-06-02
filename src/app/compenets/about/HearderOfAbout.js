import Link from "next/link";
import Button from "@mui/material/Button";
import Streack from "../Streack";
import { Margin } from "@mui/icons-material";

export default function HeaderOfAbout() {
  return (
    <div className="flex flex-col gap-20">
      <div
        className="flex flex-col p-15 items-center justify-center align-middle"
        style={{
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease",
          height: "220px",
        }}
      >
        <h1 className="font-bold text-4xl text-center m-5">About</h1>

        <div className="flex justify-center items-center align-middle gap-1">
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
          {">"}
          <p>About</p>
        </div>
      </div>
      <div className=" shadow-x1/30 mb-44">
        <Streack />
      </div>
    </div>
  );
}
