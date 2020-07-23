import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import Title from "../Tittle/Title";

// Generate Sales Data
function createData(time, level) {
  return { time, level };
}

const data = [
  createData("00:00", 0),
  createData("03:00", 10),
  createData("06:00", 20),
  createData("09:00", 30),
  createData("12:00", 45),
  createData("15:00", 55),
  createData("18:00", 70),
  createData("21:00", 100),
  createData("24:00", undefined),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Tank Water Level (%)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="level"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
