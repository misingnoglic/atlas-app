import React, { useState } from "react";
import ScatterPlot from "./ScatterPlot";
import {
  fakeScatterData,
  fakeScatterDataOptions,
} from "../data/fakeScatterData";
import {
  realData,
  realDataOptions,
  realDataOptionsKey,
} from "../data/realScatterData";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Skeleton from "@mui/material/Skeleton";
import "./ScatterPlotControl.css";

const ScatterPlotControl = () => {
  const [firstGroupLabel, setFirstGroupLabel] = useState("group1");
  const [secondGroupLabel, setSecondGroupLabel] = useState("group10");

  const handleFirstGroupChange = (event) => {
    setFirstGroupLabel(event.target.value);
  };

  const handleSecondGroupChange = (event) => {
    setSecondGroupLabel(event.target.value);
  };

  let graph;
  if (
    firstGroupLabel &&
    secondGroupLabel &&
    firstGroupLabel !== secondGroupLabel
  ) {
    let graphData = null;
    let negate = 1;
    if (
      realData.hasOwnProperty(firstGroupLabel) &&
      realData[firstGroupLabel].hasOwnProperty(secondGroupLabel)
    ) {
      graphData = realData[firstGroupLabel][secondGroupLabel];
    } else if (
      realData.hasOwnProperty(secondGroupLabel) &&
      realData[secondGroupLabel].hasOwnProperty(firstGroupLabel)
    ) {
      graphData = realData[secondGroupLabel][firstGroupLabel];
      negate = -1;
    } else {
      return "Invalid Data";
    }
    graph = (
      <ScatterPlot
        firstGroupLabel={realDataOptionsKey[firstGroupLabel]}
        secondGroupLabel={realDataOptionsKey[secondGroupLabel]}
        listOfComparisons={graphData}
        negate={negate}
      />
    );
  } else {
    graph = (
      <Skeleton
        variant="rectangular"
        animation={false}
        width={500}
        height={500}
      />
    );
  }

  const options = realDataOptions.map((option) => (
    <MenuItem value={option} key={option}>
      {realDataOptionsKey[option]}
    </MenuItem>
  ));

  return (
    <div>
      <div className="graph">{graph}</div>
      <div className="selectionForm">
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="group1-selection">Community 1</InputLabel>
            <Select
              labelId="group1-selection"
              value={firstGroupLabel}
              label="First Group"
              onChange={handleFirstGroupChange}
            >
              {options}
            </Select>
          </FormControl>
        </div>
        <div className="selectionBox">
          <FormControl>
            <InputLabel id="group2-selection">Community 2</InputLabel>
            <Select
              labelId="group2-selection"
              value={secondGroupLabel}
              label="Second Group"
              onChange={handleSecondGroupChange}
            >
              {options}
              <MenuItem value="All" key="All">
                All
              </MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default ScatterPlotControl;
