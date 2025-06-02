import Container from "@mui/material/Container";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
export default function Streack() {
  return (
    <Container
      className="streak flex justify-around align-middl  justify-items-center"
      sx={{
        bgcolor: "white",
        alignItems: "center",
        padding: "30px",
        background: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="item1"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "10px",
          width: "300px",
        }}
      >
        <LocalShippingOutlinedIcon
          style={{
            scale: "2",
          }}
        />
        Free Shipping
        <br />
        On all orders over $49.00
      </div>
      <div
        className="item2"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "10px",
          width: "300px",
        }}
      >
        <RequestQuoteOutlinedIcon style={{ scale: "2" }} />
        15 days returns <br />
        OMoneyback guarantee
      </div>
      <div
        className="item3"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "10px",
          width: "300px",
        }}
      >
        <CreditCardOutlinedIcon style={{ scale: "2" }} />
        Secure checkout <br />
        Protected by Paypal
      </div>
      <div
        className="item4"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          padding: "10px",
          width: "300px",
        }}
      >
        <RedeemOutlinedIcon style={{ scale: "2" }} />
        Offer & gift here <br /> On all orders over
      </div>
    </Container>
  );
}
