import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import GoalInfo from "../../components/GoalInfo/GoalInfo";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/Modal/Modal";

const Goal = ({ goal }: { goal: any }) => {
  const [showModal, setShowModal] = useState(false);
  console.log(goal);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  const Goal = goal.goalDetails;
  return (
    <>
      <Layout>
        <div>
          <Banner goal={goal} />
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
      </Layout>
    </>
  );
};

export default Goal;

export const getServerSideProps = async (pageContext: any) => {
  const pageSlug = pageContext.query.slug;
  const token = "MYLOOP_5117845288";
  const res = await fetch(
    `http://myloop.io/api/client/goal/${token}/${pageSlug}`
  );

  const goal = await res.json();

  return {
    props: {
      goal,
    },
  };
};
