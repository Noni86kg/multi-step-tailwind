import React, { useContext } from "react";
import { UserContext } from "../context/ContextProvider";

const steps: string[] = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const SideBar = () => {
  const { step } = useContext(UserContext);

  return (
    <div className="SideBar flex justify-center lg:justify-start flex-row lg:flex-col gap-4 lg:w-[275px] h-[200px] lg:h-full lg:rounded-2xl py-10 lg:px-8">
      {steps.map((item: string, index: number) => {
        return (
          <div className="flex gap-2" key={index}>
            <div
              className={`w-9 h-9 flex justify-center items-center border rounded-full font-bold ${
                step === index + 1 || (step === 5 && index === 3)
                  ? "borderColor-Pastelblue bg-Pastelblue text-Marineblue"
                  : "text-Alabaster"
              } `}
            >
              {(index + 1).toString()}
            </div>
            <div className="hidden lg:flex flex-col">
              <p className="text-Pastelblue text-xs font-medium">
                STEP {(index + 1).toString()}
              </p>
              <p className="text-Alabaster text-sm font-medium">{item}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
