import React from "react";

import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const UserCard = (props) => {
  const { user, login } = props;

  return (
    <Card
      style={{
        height: 200,
        width: 175,
        alignContent: "center",
      }}
      onClick={() => login(user.id)}
    >
      <CardContent>
        <CardMedia
          src={user.avatarURL}
          title={user.id}
          height={125}
          component="img"
          style={{ marginTop: "10px" }}
        />
        <Typography
          style={{ textAlign: "center", marginTop: "20x" }}
          color="textPrimary"
          gutterBottom
        >
          {user.name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserCard;
