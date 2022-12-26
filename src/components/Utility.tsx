export const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    ? false
    : true;
};

export const validatePhone = (email: string) => {
  return String(email).match(
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{1,6}$/im
  )
    ? false
    : true;
};

export const handleRequired = (name: string, value: string) => {
  if (name === "name") {
    return value === "";
  } else if (name === "email") {
    return validateEmail(value);
  } else {
    return validatePhone(value);
  }
};

export const planOptions = [
  { name: "arcade", price: { month: 9, year: 90 } },
  { name: "advanced", price: { month: 12, year: 120 } },
  { name: "pro", price: { month: 15, year: 150 } },
];

export const adds = [
  {
    name: "Online service",
    text: "Access to multiplayer games",
    price: { month: 1, year: 10 },
  },
  {
    name: "Larger storage",
    text: "Extra 1TB of cloud save",
    price: { month: 2, year: 20 },
  },
  {
    name: "Customizable Profile",
    text: "Cumstom theme on your profile",
    price: { month: 2, year: 20 },
  },
];
