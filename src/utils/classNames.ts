type Params = string;

const classNames = (...classes: Params[]) => {
  return classes.filter(Boolean).join(" ");
};

export default classNames;
