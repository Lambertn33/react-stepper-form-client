import { FC, ReactNode } from "react";
import { Card, CardContent } from "@mui/material";

export const AppCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Card sx={{ maxWidth: '50%' }} className="card">
      <CardContent>{children}</CardContent>
    </Card>
  );
};

