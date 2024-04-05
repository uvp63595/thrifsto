import React from "react";

const sizeClasses = {
  txtPoppinsLight15: "font-light font-poppins",
  txtPoppinsMedium8: "font-medium font-poppins",
  txtPoppinsBold15: "font-bold font-poppins",
  txtPoppinsExtraBold16Black9007f: "font-extrabold font-poppins",
  txtPoppinsExtraBold16RedA700: "font-extrabold font-poppins",
  txtPoppinsSemiBold15WhiteA700: "font-poppins font-semibold",
  txtInterRegular20: "font-inter font-normal",
  txtPoppinsBold8: "font-bold font-poppins",
  txtPoppinsBold10: "font-bold font-poppins",
  txtDhonJakoSt50: "font-dhonjakost font-normal",
  txtPoppinsRegular12WhiteA700: "font-normal font-poppins",
  txtStokeRegular20: "font-normal font-stoke",
  txtPoppinsRegular10: "font-normal font-poppins",
  txtPoppinsSemiBold15: "font-poppins font-semibold",
  txtPoppinsRegular12: "font-normal font-poppins",
  txtPoppinsMedium12: "font-medium font-poppins",
  txtUbuntuLight15: "font-light font-ubuntu",
  txtPoppinsExtraBold12: "font-extrabold font-poppins",
  txtPoppinsSemiBold10: "font-poppins font-semibold",
  txtPoppinsMedium32: "font-medium font-poppins",
  txtPoppinsMedium10: "font-medium font-poppins",
  txtPoppinsExtraBold16: "font-extrabold font-poppins",
  txtPoppinsBold20Black9007f: "font-bold font-poppins",
  txtDhyanaRegular10: "font-dhyana font-normal",
  txtPoppinsMedium12Black9007f: "font-medium font-poppins",
  txtPoppinsMedium15: "font-medium font-poppins",
  txtPoppinsBold10WhiteA700: "font-bold font-poppins",
  txtInsaniburger30WhiteA700: "font-insaniburger font-normal",
  txtInsaniburger96: "font-insaniburger font-normal",
  txtInsaniburger30: "font-insaniburger font-normal",
  txtPoppinsRegular18Gray600: "font-normal font-poppins",
  txtUbuntuLightItalic15: "font-light font-ubuntu italic",
  txtPoppinsBold15Black900: "font-bold font-poppins",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtPoppinsBold20: "font-bold font-poppins",
  txtInterSemiBold18: "font-inter font-semibold",
  txtPoppinsRegular15: "font-normal font-poppins",
  txtInterBold12: "font-bold font-inter",
  txtPoppinsExtraBold40: "font-extrabold font-poppins",
  txtPoppinsMedium20: "font-medium font-poppins",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsRegular8: "font-normal font-poppins",
  txtUbuntuMedium15: "font-medium font-ubuntu",
  txtPoppinsExtraBold20: "font-extrabold font-poppins",
  txtPoppinsRegular10WhiteA700: "font-normal font-poppins",
  txtStokeRegular20Black900: "font-normal font-stoke",
  txtPoppinsBold20Black900e5: "font-bold font-poppins",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
