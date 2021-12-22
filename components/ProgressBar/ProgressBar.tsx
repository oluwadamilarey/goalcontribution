import React from "react";
import styles from "./ProgressBar.module.css";

const ProgressBar = ({ done }: { done: any }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 200);

  return (
    <div className={styles.progress}>
      <div className={styles.progress_done} style={style}></div>
    </div>
  );
};

export default ProgressBar;
