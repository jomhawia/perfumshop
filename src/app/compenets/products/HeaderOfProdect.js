"use clinte";

import Button from "@mui/material/Button";

export default function HeaderOfProdect() {
  return (
    <div className="flex flex-col p-15 bg-gray-300">
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
