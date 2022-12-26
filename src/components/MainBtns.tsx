import React from "react";

interface Props {
  setStep: (operater: string) => void;
  step: number;
}

const MainBtns = ({ setStep, step }: Props) => {
  return (
    <section className="flex w-full p-5 bg-white lg:bg-transparent justify-between fixed lg:static bottom-0 left-0">
      {step !== 1 && (
        <button
          type="button"
          className="transparentBtn"
          onClick={() => setStep("back")}
        >
          Go Back
        </button>
      )}
      {step !== 4 ? (
        <button
          type="button"
          className="nextBtn ml-auto"
          onClick={() => setStep("next")}
        >
          Next Step
        </button>
      ) : (
        <button
          type="button"
          className="confirmBtn bg-purple-700 hover:bg-purple-500 text-white"
          onClick={() => setStep("confirm")}
        >
          Confirm
        </button>
      )}
    </section>
  );
};

export default MainBtns;
