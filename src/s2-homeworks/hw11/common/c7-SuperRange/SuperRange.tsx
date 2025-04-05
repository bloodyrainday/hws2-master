import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        color: "#00CC22",
        width: "147px",
        "& .MuiSlider-thumb": {
          border: "2px solid #00CC22",
          color: "white",
        },
        "& .MuiSlider-thumb::before": {
          display: "block",
          width: "6px",
          height: "6px",
          backgroundColor: "#00CC22",
          boxShadow: "0px 0px 2px 0px #1D21261A",
        },
        "& .MuiSlider-rail": {
          backgroundColor: "#8B8B8B",
          opacity: "10",
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
