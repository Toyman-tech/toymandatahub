import React from "react";
import { Box, useTheme } from "@mui/material";

interface StepIndicatorProps {
  steps: number;
  step: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  steps,
  step,
}) => {
  const theme = useTheme();
  return (
    <Box style={{ display: "flex" }}>
      {[...Array(steps)].map((_, index) => (
        <div
          key={index}
          style={{
            width: "25%",
            height: 8,
            borderRadius: "10px",
            backgroundColor:
              index === step
                ? '#03a9f4'
                : index < step
                ? "#607d8b"
                : "#607d8b",
            marginRight: "5px",
            transition: "background-color 0.3s ease-in-out",
          }}
        />
      ))}
    </Box>
  );
};
