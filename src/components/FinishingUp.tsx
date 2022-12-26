import React, { useState, useEffect, useContext } from "react";
import MainBtns from "./MainBtns";
import { UserContext } from "../context/ContextProvider";
import { planOptions, adds } from "./Utility";

const FinishingUp = () => {
  const { step, handleStep, getAllData } = useContext(UserContext);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selected, setSelected] = useState({ name: "arcade", price: 9 });
  const [pickAdds, setPickAdds] = useState([false, false, false]);
  const [pickAddsSeledted, setPickAddsSeledted] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  /**
   * Set step value
   * @param {string} operater
   */
  const setStep = (operater: string) => {
    if (operater === "back") {
      handleStep(step - 1);
    } else if (operater === "selectPlan") {
      handleStep(2);
    } else {
      handleStep(step + 1);
    }
  };

  /**
   * Set state value
   */
  const setState = () => {
    const { selectPlanData, pickAddsData } = getAllData();
    let totPrice = 0;
    setIsMonthly(selectPlanData.isMonthly);
    planOptions.forEach((item: any, index: number) => {
      if (item.name === selectPlanData.selected) {
        const selectedPrice = selectPlanData.isMonthly
          ? item.price.month
          : item.price.year;

        totPrice = selectedPrice;

        setSelected({
          name: item.name,
          price: selectedPrice,
        });
      }
    });
    let pickAddArray: any = [];
    pickAddsData.forEach((item: boolean, index: number) => {
      if (item) {
        const addPrice = selectPlanData.isMonthly
          ? adds[index].price.month
          : adds[index].price.year;

        pickAddArray = [
          ...pickAddArray,
          { name: adds[index].name, price: addPrice },
        ];
        totPrice = totPrice + addPrice;
      }
    });
    setPickAdds(pickAddsData);
    setTotalPrice(totPrice);
    setPickAddsSeledted(pickAddArray);
  };

  useEffect(() => {
    setState();
  }, []);

  return (
    <main>
      <section className="flex flex-col">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        <div className="flex flex-col gap-3 my-10">
          <div className="bg-Magnolia flex flex-col w-full rounded-lg p-5">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="font-medium first-letter:uppercase text-Marineblue">
                  {selected.name} ({isMonthly ? "Monthly" : "Yearly"})
                </p>
                <div
                  className="cursor-pointer text-purple-700 text-sm hover:underline"
                  onClick={() => setStep("selectPlan")}
                >
                  Change
                </div>
              </div>
              <p className="font-bold text-Marineblue">
                ${selected.price}/{isMonthly ? "mo" : "yr"}
              </p>
            </div>
            {(pickAdds[0] || pickAdds[1] || pickAdds[2]) && (
              <div className="flex flex-col gap-2 pt-5 mt-5 border-top-Coolgray">
                {pickAddsSeledted.map((item: any, index: number) => {
                  return (
                    <div key={index} className="flex justify-between">
                      <p>{item.name}</p>
                      <p className="text-Marineblue">
                        +{item.price}/{isMonthly ? "mo" : "yr"}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="flex justify-between p-5">
            <p>Total (per {isMonthly ? "month" : "year"})</p>
            <p className="text-purple-700 text-2xl lg:text-3xl font-bold">
              +{totalPrice}/{isMonthly ? "mo" : "yr"}
            </p>
          </div>
        </div>
      </section>
      <MainBtns setStep={setStep} step={step} />
    </main>
  );
};

export default FinishingUp;
