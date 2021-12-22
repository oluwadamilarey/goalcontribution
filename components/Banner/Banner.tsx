import React from "react";
import banner from "../../assets/banner.png";
import Image from "next/image";
import styles from "./Banner.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const Banner = ({ goal }: { goal: any }) => {
  // const { goal_title, goal_target, date, amount, created_at } =
  //   goal.goalDetails;

  if (!goal.goalDetails) {
    return (
      <>
        <div className={styles.container}>
          <h1>No Goal Details</h1>
        </div>
      </>
    );
  } else {
    const goal_title = goal.goalDetails.goal_title;
    const amount = goal.goalDetails.amount;
    const created_at = goal.goalDetails.created_at;
    const date = goal.goalDetails.date;
    const goal_target = goal.goalDetails.goal_target;

    const date_created = new Date(created_at);
    let year = date_created.getFullYear();
    let month: any = date_created.getMonth() + 1;
    let dt: any = date_created.getDate();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    if (dt < 10) {
      dt = "0" + dt;
    }
    if (month < 10) {
      month = "0" + month;
    }

    const goal_creation_date = `${dt} ${monthNames[month - 1]} ${year}`;
    return (
      <div className={styles.container}>
        <div className={styles.banner}>
          <Image src={banner} alt="Picture of the author" />
        </div>
        <div className={styles.info}>
          <>
            <div className={styles.profile_pic}>
              <Image
                src="/profile.png"
                alt="Picture of the author"
                width={26}
                height={26}
              />
            </div>
            <div className={styles.item}>
              <h4 className={styles.goal__title}>{goal_title}</h4>
              <p className={styles.created__on}>
                Created<h6>{goal_creation_date}</h6>
              </p>
              <p className={styles.creators__details}>
                Efe Created this Contribution
              </p>
            </div>
            <div className={styles.item}>
              <h4 className={styles.goal__title}>0</h4>
              <p className={styles.contributors__amount}>Contributors so far</p>
            </div>
            <div className={styles.item}>
              <h4 className={styles.goal__title}>0</h4>
              <p className={styles.days_left_text}>Days Left</p>
            </div>
            <div className={styles.item}>
              <ProgressBar done="0" />
              <p className={styles.progress_text}> #0.00 of # {amount}</p>
            </div>
          </>
        </div>
      </div>
    );
  }
};

export default Banner;
