import Button from "@mui/material/Button";

export default function RightBody() {
  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-2xl">
        J. l p t Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.
      </div>
      <div className="flex gap-2 justify-start align-bottom items-end">
        <p className="text-2xl">$19.00</p>
        <p className="line-through">$21.00</p>
        <p className="" style={{ backgroundColor: "#e0e0e0" }}>
          Save -10%
        </p>
      </div>
      <div>
        Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
        Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc
        nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean
        ut eros et nisl sagittis vestibulum. Nullam...
      </div>
      <hr />
      <div className="flex flex-col gap-0">
        <p>SKU: 1510</p>
        <p>Vendor: Vendor J</p>
        <p>Type: Type J</p>
      </div>
      <hr />
      <div className="grid grid-cols-3 gap-1">
        <div className="flex justify-start align-middle w-20">
          <div>-</div>
          <input type="text" className="w-15" />
          <div>+</div>
        </div>
        <Button className="w-30">Add to cart</Button>
        <Button className="w-30">Buy it now</Button>
        <p className="w-30">Add to wishlist</p>
        <p className="w-30">Compare</p>
        <p className="w-30">Ask about this product</p>
      </div>
      <hr />

      <div className="flex gap-2 ">
        <div>share:</div>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Pinterest</div>
      </div>
      <hr />
      <div>
        <div>Guaranteed Safe Checkout</div>
        <div className="flex justify-start align-middle gap-1">
          <div className=" w-13 border p-1  border-gray-400">
            <img
              className="w-10 h-5 "
              src={"/image/payMethed/amazon-logo-1024x576.webp"}
            />
          </div>
          <div className="w-13 border  p-1  border-gray-400">
            <img
              className="w-10 h-5"
              src={"/image/payMethed/Apple_Pay_logo.svg.png"}
            />
          </div>
          <div className="w-13 border p-1  border-gray-400">
            <img
              className="w-5 h-5 place-self-center"
              src={"/image/payMethed/Bitcoin.svg.png"}
            />
          </div>
          <div className="w-13 border p-1 border-gray-400">
            <img
              className="w-10 h-5"
              src={"/image/payMethed/google-pay-logo_1280x531.png"}
            />
          </div>
          <div className="w-13 border  p-1  border-gray-400">
            <img
              className="w-10 h-5"
              src={"/image/payMethed/Visa_Inc._logo.svg.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
