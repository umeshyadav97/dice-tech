import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useStyles } from "./selectStyles";

const SortField = ({ onSort, sortOption }) => {
  const styles = useStyles();
  const sortOptions = [
    "stars",
    "watchers",
    "score",
    "name",
    "created_at",
    "updated_at",
  ];

  return (
    <div>
      <Select
        value={sortOption}
        onChange={onSort}
        label="Sort By"
        sx={styles.inputfield}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option} value={option}>
            {option
              .replace(/_/g, " ")
              .replace(/\b\w/g, (c) => c.toUpperCase())}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default SortField;
