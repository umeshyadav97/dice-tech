// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/Search";
import SortField from "./components/Sort";
import RepoCard from "./components/RepoCard";
import styles from "./App.module.css";
import { Divider, Grid, Typography } from "@mui/material";

const App = () => {
  const [query, setQuery] = useState("");
  const [repos, setRepos] = useState([]);
  const [sortOption, setSortOption] = useState("stars");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&sort=${sortOption}`
      );
      setRepos(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query, sortOption]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div>
      <Grid container p={2}>
        <Grid item xs={6} pl={4} display="flex" alignItems="center">
          <Typography sx={{ fontSize: "28px", fontWeight: "600" }}>
            {" "}
            Repositories List
          </Typography>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="flex-end">
          <Grid item>
            <SearchBar handleSearch={handleSearch} />
          </Grid>
          <Grid item pt={1}>
            <SortField onSort={handleSort} sortOption={sortOption} />
          </Grid>
        </Grid>
      </Grid>
      <Divider/>
      {repos.length > 0 ? (
        <div className={styles.card_wrapper}>
          {repos.map((repo) => (
            <div className={styles.cardSize}>
              <RepoCard key={repo.id} repo={repo} />
            </div>
          ))}
        </div>
      ) : (
        <Grid container justifyContent="center" alignItems="center" pt={10}>
          <Grid item>
            <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
              No repositories Found
            </Typography>
            <Typography
              sx={{ fontSize: "18px", fontWeight: "500", paddingLeft: "20px" }}
            >
              Search for repositories......
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default App;
