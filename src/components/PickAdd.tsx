import React, { useState, useEffect, useContext } from "react";
import MainBtns from "./MainBtns";
import { UserContext } from "../context/ContextProvider";
import checkBox from "../assets/images/icon-checkmark.svg";
import { adds } from "./Utility";

const PickAdd = () => {
  const { step, handleStep, handlePickAddsData, getPickAddsData } =
    useContext(UserContext);
  const [pickAdds, setPickAdds] = useState([false, false, false]);
  const [isMonth, setIsMonth] = useState(true);

  /**
   * Set new value in state for Pick Adds
   * @param {number} id
   */
  const handlePickAdds = (id: number) => {
    let newPickAdds = pickAdds;
    const value = pickAdds[id];
    newPickAdds[id] = !value;
    setPickAdds([...newPickAdds]);
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
    handlePickAddsData(pickAdds);
  };

  /**
   * Set state value
   */
  const setState = () => {
    const { pickAdds, isMonthly } = getPickAddsData();

    setPickAdds(pickAdds);
    setIsMonth(isMonthly);
  };

  useEffect(() => {
    setState();
  }, []);

  return (
    <main>
      <section className="pickAdd flex flex-col">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="flex flex-col gap-3 my-10">
          {adds.map((item: any, index: number) => {
            const isSelected = pickAdds[index];
            return (
              <div
                key={index}
                className={`border-Magnolia flex justify-between items-center w-full rounded-lg px-2 py-4 lg:p-5 cursor-pointer  ${
                  isSelected
                    ? "bg-Magnolia border-purple-700"
                    : "hover:border-purple-700"
                }`}
                onClick={() => handlePickAdds(index)}
              >
                <div className="flex items-center">
                  <div
                    className={`mr-2 lg:mr-5 w-5 h-5 flex justify-center items-center rounded-md border-Magnolia bg-Purplishblue ${
                      isSelected ? "" : "bg-transparent"
                    }`}
                  >
                    {isSelected && <img src={checkBox} alt={item.name} />}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-medium text-Marineblue">{item.name}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
                <div className="text-purple-700 font-medium text-sm">
                  $
                  {isMonth ? `${item.price.month}/mo` : `${item.price.year}/yr`}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <MainBtns setStep={setStep} step={step} />
    </main>
  );
};

export default PickAdd;
