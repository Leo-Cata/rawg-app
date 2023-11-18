import { Card, CardContent, Typography } from "@mui/material";

const NoGamesBacklogged = () => {
  return (
    <div className="pb-52">
      <Card className="max-w-[500px] rounded-2xl">
        <CardContent className="my-5 flex items-center justify-center">
          <Typography variant="h6">
            You've cleared your backlog 🤯! ...or you haven't started it yet 🤨
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoGamesBacklogged;
