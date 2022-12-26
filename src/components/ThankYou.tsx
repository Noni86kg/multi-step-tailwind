import React from "react";
import iconThanYkou from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <main>
      <section className="flex flex-col py-20 my-auto items-center gap-5">
        <div className="mb-5 w-16 lg:w-auto">
          <img src={iconThanYkou} alt={"icon-thank-you"} />
        </div>
        <h2>Thank you!</h2>
        <p className="max-w-md text-center text-lg lg:text-base">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </p>
      </section>
    </main>
  );
};

export default ThankYou;
