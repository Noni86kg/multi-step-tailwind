import React, { useState, useEffect, useContext } from "react";
import MainBtns from "./MainBtns";
import { UserContext } from "../context/ContextProvider";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";
import { planOptions } from "./Utility";

const SelectPlan = () => {
  const { step, handleStep, handleSelectPlan, getSelectPlan } =
    useContext(UserContext);
  const [monthly, setMonthly] = useState(true);
  const [selected, setSelected] = useState("arcade");

  const imgs = [arcade, advanced, pro];

  /**
   * Set new value in state for selected
   * @param {string} name
   */
  const handleChangeSelectedPlan = (name: string) => {
    setSelected(name);
  };

  /**
   * Set new value in state for toggle button
   */
  const handleToggleBtn = () => {
    setMonthly((prevValue) => !prevValue);
  };

  /**
   * Set step value
   * @param {string} operater
   */
  const setStep = (operater: string) => {
    if (operater === "back") {
      handleStep(step - 1);
    } else {
      handleStep(step + 1);
    }
    handleSelectPlan(monthly, selected);
  };

  /**
   * Set state value
   */
  const setState = () => {
    const { selected, isMonthly } = getSelectPlan();

    setMonthly(isMonthly);
    setSelected(selected);
  };

  useEffect(() => {
    setState();
  }, []);

  return (
    <main>
      <section className="selectPlan flex flex-col">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>
        <div className="flex gap-3 my-10 flex-col lg:flex-row">
          {planOptions.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={`flex lg:flex-col border-Magnolia w-full rounded-lg p-5 cursor-pointer  ${
                  selected === item.name
                    ? "bg-Magnolia border-purple-700"
                    : "hover:border-purple-700"
                }`}
                onClick={() => handleChangeSelectedPlan(item.name)}
              >
                <div className={"lg:mb-10 lg:mr-0 mr-5"}>
                  <img src={imgs[index]} alt={item.name} />
                </div>
                <div>
                  <h4 className="font-medium text-Marineblue first-letter:uppercase">
                    {item.name}
                  </h4>
                  <p>
                    ${monthly ? item.price.month : item.price.year}/
                    {monthly ? "mo" : "yr"}
                  </p>
                  {!monthly && (
                    <p className="text-Marineblue text-xs">2 months free</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-Magnolia rounded-lg flex justify-center">
          <button className="flex items-center" onClick={handleToggleBtn}>
            <span className={monthly ? "text-Marineblue" : "text-Coolgray"}>
              Monthly
            </span>{" "}
            <div
              className={`selectPlan__toggleIcon bg-Marineblue mx-5  w-10 h-5 rounded-full flex items-center px-1 ${
                monthly ? "justify-start" : "justify-end"
              }`}
            />{" "}
            <span className={monthly ? "text-Coolgray" : "text-Marineblue"}>
              Yearly
            </span>
          </button>
        </div>
      </section>
      <MainBtns setStep={setStep} step={step} />
    </main>
  );
};

export default SelectPlan;
