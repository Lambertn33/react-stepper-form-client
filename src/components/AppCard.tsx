import { FC, ReactNode, useContext } from "react";
import { Box, Card, CardContent } from "@mui/material";

import { UsersContext } from "../context/UsersContext";
import { AppStepper, AppText } from "./index";

export const AppCard: FC<{ children: ReactNode }> = ({ children }) => {
  const { userServerErrors } = useContext(UsersContext);
  return (
    <Card className="card">
      {userServerErrors.length > 0 && (
        <Box>
          {userServerErrors.map((err) => (
            <AppText color="error" text={err.msg} variant="subtitle1" />
          ))}
        </Box>
      )}
      <AppStepper />
      <CardContent>{children}</CardContent>
    </Card>
  );
};
