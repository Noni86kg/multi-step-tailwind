import React, { useState, createContext } from "react";

type childrenProps = {
  children: React.ReactNode;
};

interface PersonalInfoProps {
  value: string;
  valid: boolean;
}

export const UserContext = createContext<any>(1);

export const ContextProvider = ({ children }: childrenProps) => {
  const [step, setStep] = useState<number>(1);
  const [personalInfo, setPersonalInfo] = useState([
    { name: { value: "", valid: false } },
    { email: { value: "", valid: false } },
    { phone: { value: "", valid: false } },
  ]);
  const [selectPlan, setSelectPlan] = useState({
    isMonthly: true,
    selected: "arcade",
  });
  const [pickAdds, setPickAdds] = useState([false, false, false]);

  /**
   * Set new value in state for step
   * @param {number} item
   */
  const handleStep = (item: number) => {
    setStep(item);
  };

  /**
   * Set new value in state for personalInfo
   * @param { value: string, valid: boolean } name
   * @param { value: string, valid: boolean } email
   * @param { value: string, valid: boolean } phone
   */
  const handlePersonalInfo = (
    name: PersonalInfoProps,
    email: PersonalInfoProps,
    phone: PersonalInfoProps
  ) => {
    setPersonalInfo([{ name: name }, { email: email }, { phone: phone }]);
  };

  /**
   * Get data of personalInfo
   * @returns {[{value: string, valid: boolean}]}
   */
  const getPersonalInfo = () => {
    return personalInfo;
  };

  /**
   * Set new value in state for selectPlan
   * @param { boolean } monthly
   * @param { string } selected
   */
  const handleSelectPlan = (monthly: boolean, selected: string) => {
    setSelectPlan({ isMonthly: monthly, selected });
  };

  /**
   * Get data of selectPlan
   * @returns {{ isMonthly: boolean, selected: string }}
   */
  const getSelectPlan = () => {
    return selectPlan;
  };

  /**
   * Set new value in state for pickAdds
   * @param boolean[] array
   */
  const handlePickAddsData = (array: boolean[]) => {
    setPickAdds(array);
  };

  /**
   *  Get data of pickAdds
   * @returns {{pickAdds: [boolean, boolean, boolean] , isMonthly: boolean }}
   */
  const getPickAddsData = () => {
    return { pickAdds: pickAdds, isMonthly: selectPlan.isMonthly };
  };

  /**
   * Get all data
   * @returns {selectPlanData: {   isMonthly: boolean, selected: string} , pickAddsData: [boolean, boolean, boolean]}
   */
  const getAllData = () => {
    return {
      selectPlanData: selectPlan,
      pickAddsData: pickAdds,
    };
  };

  return (
    <UserContext.Provider
      value={{
        step,
        handleStep,
        handlePersonalInfo,
        getPersonalInfo,
        handleSelectPlan,
        getSelectPlan,
        handlePickAddsData,
        getPickAddsData,
        getAllData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
