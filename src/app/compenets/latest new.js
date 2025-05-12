import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Latestnew({ imageUrl, auther, title, date }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/image/DOLCE-removebg-preview.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {auther}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {title}
        </Typography>
      </CardContent>
      <hr />

      <CardActions>
        <div
          className="flex  gap-2 justify-between align-middle "
          style={{ backgroundColor: "#FF5733", width: "100%" }}
        >
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {date}
            2023-10-01
          </Typography>
          <Button
            size="small"
            style={{ backgroundColor: "#FF5733", color: "white" }}
          >
            Read More
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
