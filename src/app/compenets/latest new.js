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
        style={{ backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        sx={{ height: 140, backgroundsize: "50px 50px" }}
        image={imageUrl}
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
          style={{ backgroundColor: "#e0e0e0", width: "100%" }}
        >
          <Typography variant="body2" sx={{ color: "black" }}>
            {date}
            2023-10-01
          </Typography>
          <Button
            size="small"
            style={{ backgroundColor: "#e0e0e0", color: "black" }}
          >
            Read More
          </Button>
        </div>
      </CardActions>
    </Card>
  );
}
