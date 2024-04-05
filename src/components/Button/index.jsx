import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[3px]", square: "rounded-none" };
const variants = {
  fill: {
    black_900_f4: "bg-black-900_f4 text-amber-600",
    black_900_19: "bg-black-900_19 text-black-900",
    white_A700: "bg-white-A700 text-black-900",
    black_900: "bg-black-900 text-white-A700",
    black_900_f2: "bg-black-900_f2 text-white-A700",
  },
  outline: {
    black_900_7f: "border border-black-900_7f border-solid text-black-900",
    black_900: "border-[3px] border-black-900 border-solid text-black-900",
  },
};
const sizes = { xs: "p-1", sm: "p-2.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "square",
  size = "sm",
  variant = "fill",
  color = "black_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "black_900_f4",
    "black_900_19",
    "white_A700",
    "black_900",
    "black_900_f2",
    "black_900_7f",
  ]),
};

export { Button };
