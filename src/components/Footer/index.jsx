import React from "react";

import { Img, Input, Text } from "components";

const Footer = (props) => {
  function handleNavigate2() {
    window.location.href = "https://instagram.com";
  }

  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="bg-black-900_e5 flex md:flex-col flex-row md:gap-5 items-end justify-start p-2.5 w-full">
            <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start mb-2.5 md:ml-[0] ml-[89px] md:mt-0 mt-[7px] w-[22%] md:w-full">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-white-A700"
                size="txtInsaniburger30WhiteA700"
              >
                <>
                  GET THE LATEST <br />
                  INFORMATION FROM US!
                </>
              </Text>
              <Input
                name="mailinput"
                placeholder="enter email hear"
                className="!placeholder:text-white-A700 !text-white-A700 font-poppins leading-[normal] md:h-auto p-0 sm:h-auto text-left text-sm w-full"
                wrapClassName="rounded-[15px] w-[90%]"
                color="white_A700"
                size="xs"
                variant="outline"
              ></Input>
              <div className="flex flex-row gap-[25px] items-start justify-start w-auto">
                <Text
                  className="common-pointer bg-black-900 h-5 justify-center px-[5px] py-0.5 rounded-[10px] text-[10px] text-white-A700 w-auto"
                  size="txtPoppinsMedium10"
                  onClick={handleNavigate2}
                >
                  Instagram
                </Text>
                <Text
                  className="common-pointer bg-black-900 h-5 justify-center px-[5px] py-0.5 rounded-[10px] text-[10px] text-white-A700 w-auto"
                  size="txtPoppinsMedium10"
                  onClick={props?.onClick1}
                >
                  Facebook
                </Text>
                <Text
                  className="common-pointer bg-black-900 h-5 justify-center px-[5px] py-0.5 rounded-[10px] text-[10px] text-white-A700 w-auto"
                  size="txtPoppinsMedium10"
                  onClick={props?.onClick}
                >
                  Youtube
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mb-5 md:ml-[0] ml-[400px]">
              <Text
                className="text-[15px] text-white-A700"
                size="txtPoppinsSemiBold15WhiteA700"
              >
                Products
              </Text>
              <Text
                className="mt-0.5 text-white-A700 text-xs"
                size="txtPoppinsRegular12WhiteA700"
              >
                <>
                  sneakers
                  <br />
                  shoes
                  <br />
                  t-shirts
                  <br />
                  shirts
                  <br />
                  pants
                  <br />
                  accessories
                  <br />
                  glasses
                </>
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mb-[85px] md:ml-[0] ml-[94px]">
              <Text
                className="text-[15px] text-white-A700"
                size="txtPoppinsSemiBold15WhiteA700"
              >
                Categories
              </Text>
              <Text
                className="text-white-A700 text-xs"
                size="txtPoppinsRegular12WhiteA700"
              >
                <>
                  men
                  <br />
                  women
                  <br />
                  unisex
                </>
              </Text>
            </div>
            <Img
              className="h-[54px] mb-2 md:ml-[0] ml-[42px] md:mt-0 mt-[110px]"
              src="images/img_logo_white_a700.svg"
              alt="logo"
            />
          </div>
          <div className="bg-black-900 h-[30px] md:h-[35px] p-[3px] relative w-full">
            <div className="absolute flex flex-col md:h-auto h-max inset-[0] items-center justify-center m-auto p-2.5 w-auto">
              <Text
                className="text-[10px] text-white-A700 w-auto"
                size="txtPoppinsRegular10WhiteA700"
              >
                2024 Copyrights - THRIFSTO
              </Text>
            </div>
            <Text
              className="absolute border border-solid border-white-A700 h-max inset-y-[0] left-[44%] my-auto px-1 rounded-md text-[8px] text-white-A700 w-[13px]"
              size="txtPoppinsRegular8"
            >
              R
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
