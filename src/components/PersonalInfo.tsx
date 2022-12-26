import React, { useState, useEffect, useContext } from "react";
import MainBtns from "./MainBtns";
import { UserContext } from "../context/ContextProvider";
import { handleRequired } from "./Utility";

const PersonalInfo = () => {
  const { step, handleStep, handlePersonalInfo, getPersonalInfo } =
    useContext(UserContext);
  const [name, setName] = useState({ value: "", valid: false });
  const [email, setEmail] = useState({ value: "", valid: false });
  const [phone, setPhone] = useState({ value: "", valid: false });

  /**
   * Set new value in state
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameOfEvent = event.target.name;
    const valueOfEvent = event.target.value;
    const isRequired = handleRequired(nameOfEvent, valueOfEvent);

    const setStateName =
      nameOfEvent === "name"
        ? setName
        : nameOfEvent === "email"
        ? setEmail
        : setPhone;

    setStateName({ value: valueOfEvent, valid: isRequired });
  };

  /**
   *
   * @returns Check if is all state value valid
   */
  const isValidPersonalInfo = () => {
    const nameValid = handleRequired("name", name.value);
    const emailValid = handleRequired("email", email.value);
    const phoneValid = handleRequired("phone", phone.value);
    debugger;
    setName({ value: name.value, valid: nameValid });
    setEmail({
      value: email.value,
      valid: emailValid,
    });
    setPhone({
      value: phone.value,
      valid: phoneValid,
    });

    return !(nameValid || emailValid || phoneValid);
  };

  /**
   * Set step value
   * @param {string} operater
   */
  const setStep = (operater: string) => {
    if (isValidPersonalInfo()) {
      handleStep(step + 1);
      handlePersonalInfo(name, email, phone);
    }
  };

  /**
   * Set state value
   */
  const setState = () => {
    const nameDate = getPersonalInfo()[0].name;
    const emailDate = getPersonalInfo()[1].email;
    const phoneDate = getPersonalInfo()[2].phone;

    setName(nameDate);
    setEmail(emailDate);
    setPhone(phoneDate);
  };

  useEffect(() => {
    setState();
  }, []);

  return (
    <main>
      <section className="flex flex-col">
        <h2>Personal Info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        <form className="mt-10 flex flex-col gap-5">
          <label
            className={name.valid ? "personalInfo__inputValid block" : "block "}
          >
            <div className="flex justify-between items-end">
              <span>Name</span>
              {name.valid && (
                <p className="text-pink-500 font-bold text-xs">
                  This field is required
                </p>
              )}
            </div>

            <input
              type="text"
              placeholder="e.g. Stephen King"
              name={"name"}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              value={name.value}
            />
          </label>

          <label
            className={
              email.valid ? "personalInfo__inputValid block" : "block "
            }
          >
            <div className="flex justify-between items-end">
              <span>Email Address</span>
              {email.valid && (
                <p className="text-pink-500 font-bold text-xs">
                  This field is required
                </p>
              )}
            </div>

            <input
              type="text"
              placeholder="e.g. stepheking@lorem.com"
              name={"email"}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              value={email.value}
            />
          </label>

          <label
            className={
              phone.valid ? "personalInfo__inputValid block" : "block "
            }
          >
            <div className="flex justify-between items-end">
              <span>Phone Number</span>
              {phone.valid && (
                <p className="text-pink-500 font-bold text-xs">
                  This field is required
                </p>
              )}
            </div>

            <input
              type="text"
              placeholder="e.g. +1 234 567 890"
              name={"phone"}
              onChange={handleOnChange}
              onBlur={handleOnChange}
              value={phone.value}
            />
          </label>
        </form>
      </section>
      <MainBtns setStep={setStep} step={step} />
    </main>
  );
};

export default PersonalInfo;
