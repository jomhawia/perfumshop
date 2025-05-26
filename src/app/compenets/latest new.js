import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Latestnew({ src, title, description, dateToAdd }) {
  return (
    <Card
      style={{
        transition: "transform 0.3s ease",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
        borderRadius: "10px",
      }}
    >
      <CardMedia
        style={{
          height: "350px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        image={src}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description}
        </Typography>
      </CardContent>
      <hr />

      <CardActions style={{ backgroundColor: "#f8f8f8" }}>
        <div
          className="flex  gap-2 justify-between align-middle "
          style={{ width: "100%" }}
        >
          <Typography variant="body2" sx={{ color: "black" }}>
            {dateToAdd}
          </Typography>
          <Button
            className="hover:bg-[#f8f8f8]"
            size="small"
            style={{ color: "black" }}
          >
            Read More
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
