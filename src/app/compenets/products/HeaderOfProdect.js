"use clinte";

import Button from "@mui/material/Button";

export default function HeaderOfProdect() {
  return (
    <div
      className="flex flex-col p-15"
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
      <h1 className="font-bold text-4xl text-center m-5">Product</h1>
      <div className="flex justify-center content-center ">
        <Button>
          <div className="mr-5 text-lg"> Home </div>
        </Button>
        <p>
          J. l t Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.
        </p>
      </div>
    </div>
  );
}
