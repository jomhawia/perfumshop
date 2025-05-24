"use client";
import Button from "@mui/material/Button";

export default function FooterOfCart() {
  return (
    <div className="mt-10 mb-10">
      <div className="flex justify-start items-center p-4 gap-10">
        <Button
          variant="contained"
          color="primary"
          style={{
            width: "20%",
            height: "80px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Continue Shopping
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{
            width: "15%",
            height: "80px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Clear Cart
        </Button>
      </div>
      <div className="flex justify-between items-baseline p-4 gap-10">
        <div className="flex flex-col items-start justify-start gap-4 p-4">
          <div>
            <div className="text-2xl font-bold p-4">Get shipping estimates</div>
          </div>
          <select className="w-96 p-4 border border-gray-300 rounded-md">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="UK">United Kingdom</option>
            <option value="AU">Australia</option>
            <option value="IN">India</option>
          </select>
          <div>
            <input
              type="text"
              placeholder="Enter ZIP/Postal Code"
              className=" p-2 border border-gray-300 rounded-md"
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "100%",
              height: "80px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Continue Shopping
          </Button>
          <div></div>
        </div>
        <div>
          <div className="text-2xl font-bold p-4">Cart Totals</div>
          <table className=" w-96 border">
            <tbody>
              <tr className="border">
                <td className="p-4">Subtotal:</td>
                <td className="p-4">$100.00</td>
              </tr>
              <tr className="border">
                <td className="p-4 font-bold">Total:</td>
                <td className="p-4 font-bold">$110.00</td>
              </tr>
            </tbody>
          </table>
          <Button
            variant="contained"
            color="primary"
            style={{
              width: "100%",
              height: "80px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
