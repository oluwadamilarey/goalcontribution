import React, { useState } from "react";
import Modal from "../Modal/Modal";

import styles from "./GoalInfo.module.css";

const GoalInfo = ({ openModal }: { openModal: any }) => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.share}>share fundraising</p>
          <div className={styles.about}>
            <h2>About this Fundraising</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className={styles.donate}>
          <p>Donate Now</p>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              e.preventDefault();
              setEmail(e.target.value);
            }}
          />
          <button onClick={() => openModal(email)}>Continue</button>
        </div>
      </div>
    </>
  );
};

export default GoalInfo;
