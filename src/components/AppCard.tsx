import { FC, ReactNode } from "react";
import { Card, CardContent } from "@mui/material";
import { AppStepper } from "./index";

export const AppCard: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Card className="card">
      <AppStepper />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

