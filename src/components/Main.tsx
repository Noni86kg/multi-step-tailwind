import React, { useState, useContext } from "react";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import PickAdd from "./PickAdd";
import ThankYou from "./ThankYou";
import FinishingUp from "./FinishingUp";
import { UserContext } from "../context/ContextProvider";

const Main = () => {
  const { step } = useContext(UserContext);

  switch (step) {
    case 1:
      return <PersonalInfo />;
    case 2:
      return <SelectPlan />;
    case 3:
      return <PickAdd />;
    case 4:
      return <FinishingUp />;
    default:
      return <ThankYou />;
  }
};

export default Main;
