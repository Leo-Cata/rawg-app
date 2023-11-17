import { Card, CardContent, Typography } from "@mui/material";

const NoGamesBacklogged = () => {
  return (
    <Card className="max-w-[500px] rounded-2xl">
      <CardContent className="m-10 flex items-center justify-center">
        <Typography variant="h6">
          You've cleared your backlog 🤯! ...or you haven't started it yet 🤨
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoGamesBacklogged;
