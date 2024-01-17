// RepoCard.js
import React from "react";
import styles from "./Component.module.css";

const RepoCard = ({ repo }) => {
  return (
      <div >
          <div className={styles.parent}>
      <img
        src={repo.owner.avatar_url}
        alt="Avatar"
        className={styles.image_size}
      /></div>
      <h3>{repo.name}</h3>
      <p>Stars: {repo.stargazers_count}</p>
      <p>Description: {repo.description ? repo.description.slice(0, 20) : null}</p>
      <p>Language: {repo.language}</p>
    </div>
  );
};

export default RepoCard;
