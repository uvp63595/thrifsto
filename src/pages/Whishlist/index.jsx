import React from "react";

import { Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const WhishlistPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-black-900_f4 flex flex-col items-center justify-end p-[3px] w-full">
            <Text
              className="mt-0.5 text-amber-600 text-xs"
              size="txtPoppinsExtraBold12"
            >
              PERFECT YOUR SUMMER STYLE WITH A NEW SESON UPDATE
            </Text>
          </div>
          <div className="flex flex-row font-inter gap-[34px] items-center justify-end md:ml-[0] ml-[1163px] mt-[7px] md:px-5 w-[13%] md:w-full">
            <Text className="text-black-900_99 text-xs" size="txtInterBold12">
              SHIPING UPDATES
            </Text>
            <Text className="text-black-900_99 text-xs" size="txtInterBold12">
              INDIA
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-arial md:gap-5 items-center justify-start max-w-[1240px] mt-3 mx-auto md:px-5 w-full">
            <div className="md:h-16 h-[67px] relative w-[18%] md:w-full">
              <Text
                className="absolute bottom-[0] inset-x-[0] mx-auto sm:text-[40px] md:text-[46px] text-[50px] text-black-900 w-max"
                size="txtDhonJakoSt50"
              >
                THRIFSTO
              </Text>
              <Text
                className="absolute right-[0] text-[10px] text-black-900 top-[0]"
                size="txtDhyanaRegular10"
              >
                Let’s Style Create
              </Text>
            </div>
            <div className="flex flex-row font-poppins gap-[11px] items-start justify-start ml-20 md:ml-[0] w-auto">
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtPoppinsMedium15"
              >
                MEN
              </Text>
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtPoppinsMedium15"
              >
                WOMEN
              </Text>
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtPoppinsMedium15"
              >
                UNISEX
              </Text>
              <Text
                className="text-[15px] text-black-900 w-auto"
                size="txtPoppinsMedium15"
              >
                ACCESSORIES
              </Text>
            </div>
            <Input
              name="searchbar"
              placeholder="Search"
              value={searchbarvalue}
              onChange={(e) => setSearchbarvalue(e)}
              className="!placeholder:text-black-900_4c !text-black-900_4c leading-[normal] p-0 text-base text-left w-full"
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[281px] w-[15%] md:w-full"
              suffix={
                <div className="h-3.5 ml-[35px] w-3.5 bg-black-900_4c my-0.5">
                  {searchbarvalue?.length > 0 ? (
                    <CloseSVG
                      className="cursor-pointer h-3.5 my-auto"
                      onClick={() => setSearchbarvalue("")}
                      fillColor="#0000004c"
                      height={14}
                      width={14}
                      viewBox="0 0 14 14"
                    />
                  ) : (
                    <Img
                      className="cursor-pointer h-3.5 my-auto"
                      src="images/img_search_black_900.svg"
                      alt="search"
                    />
                  )}
                </div>
              }
              shape="square"
              color="black_900_4c"
              size="xs"
              variant="outline"
            ></Input>
            <div className="flex flex-row font-poppins gap-5 items-center justify-center md:ml-[0] ml-[31px] w-[168px]">
              <div className="flex flex-col gap-2 items-center justify-start w-auto">
                <Img
                  className="h-[21px] w-5"
                  src="images/img_lock_black_900.svg"
                  alt="lock"
                />
                <a
                  href="javascript:"
                  className="text-[10px] text-black-900 w-auto"
                >
                  <Text size="txtPoppinsBold10">SIGN IN</Text>
                </a>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                <Img
                  className="h-5 w-5"
                  src="images/img_favorite.svg"
                  alt="favorite"
                />
                <Text
                  className="text-[10px] text-black-900 w-auto"
                  size="txtPoppinsBold10"
                >
                  WISH LIST
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center w-auto">
                <Img className="h-5 w-5" src="images/img_bag.svg" alt="bag" />
                <Text
                  className="text-[10px] text-black-900 w-auto"
                  size="txtPoppinsBold10"
                >
                  CART{" "}
                </Text>
              </div>
            </div>
          </div>
          <Line className="bg-black-900 h-px mt-[30px] shadow-bs w-full" />
          <div className="font-poppins sm:h-[1256px] h-[506px] md:h-[879px] max-w-[1240px] mt-[65px] mx-auto md:px-5 relative w-full">
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[0] w-[59%]">
              <div className="flex flex-col gap-[35px] items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                  size="txtPoppinsExtraBold40"
                >
                  WISHLIST
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-auto md:w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-[11px] w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                      <Img
                        className="h-[250px] md:h-auto object-cover w-[99%]"
                        src="images/img_drop1.png"
                        alt="rectangleSeven"
                      />
                      <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                        <div className="flex flex-col font-poppins items-start justify-start">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsMedium12"
                          >
                            H&M Joggers{" "}
                          </Text>
                          <div className="flex flex-row gap-1.5 items-start justify-start w-[52%] md:w-full">
                            <Text
                              className="text-[10px] text-black-900"
                              size="txtPoppinsSemiBold10"
                            >
                              Size:
                            </Text>
                            <div className="bg-black-900_19 flex flex-col items-center justify-center w-[13px]">
                              <Text
                                className="text-[8px] text-black-900 w-auto"
                                size="txtPoppinsBold8"
                              >
                                34
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="mt-[3px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          $ 345
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <div className="bg-black-900_f2 flex flex-col h-6 md:h-auto items-center justify-center sm:px-5 px-[25px] py-[5px] w-[158px]">
                          <Text
                            className="text-[10px] text-white-A700 tracking-[1.50px] w-auto"
                            size="txtPoppinsBold10WhiteA700"
                          >
                            Add to Cart{" "}
                          </Text>
                        </div>
                        <div className="bg-black-900_f2 flex flex-col h-6 md:h-auto items-center justify-center p-2.5 w-[27px]">
                          <Img
                            className="h-2.5 w-2.5"
                            src="images/img_favorite_white_a700.svg"
                            alt="favorite"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-[11px] w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                      <Img
                        className="h-[250px] md:h-auto object-cover w-[99%]"
                        src="images/img_drop2.png"
                        alt="rectangleSeven"
                      />
                      <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                        <div className="flex flex-col font-poppins items-start justify-start">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsMedium12"
                          >
                            H&M Joggers{" "}
                          </Text>
                          <div className="flex flex-row gap-1.5 items-start justify-start w-[52%] md:w-full">
                            <Text
                              className="text-[10px] text-black-900"
                              size="txtPoppinsSemiBold10"
                            >
                              Size:
                            </Text>
                            <div className="bg-black-900_19 flex flex-col items-center justify-center w-[13px]">
                              <Text
                                className="text-[8px] text-black-900 w-auto"
                                size="txtPoppinsBold8"
                              >
                                34
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="mt-[3px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          $ 345
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <div className="bg-black-900_f2 flex flex-col h-6 md:h-auto items-center justify-center sm:px-5 px-[25px] py-[5px] w-[158px]">
                          <Text
                            className="text-[10px] text-white-A700 tracking-[1.50px] w-auto"
                            size="txtPoppinsBold10WhiteA700"
                          >
                            Add to Cart{" "}
                          </Text>
                        </div>
                        <div className="bg-black-900_f2 flex flex-col h-6 md:h-auto items-center justify-center p-2.5 w-[27px]">
                          <Img
                            className="h-2.5 w-2.5"
                            src="images/img_favorite_white_a700.svg"
                            alt="favorite"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-[11px] w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                      <Img
                        className="h-[250px] md:h-auto object-cover w-[99%]"
                        src="images/img_drop3.png"
                        alt="rectangleSeven"
                      />
                      <div className="flex flex-row items-start justify-between w-[99%] md:w-full">
                        <div className="flex flex-col font-poppins items-start justify-start">
                          <Text
                            className="text-black-900 text-xs"
                            size="txtPoppinsMedium12"
                          >
                            H&M Joggers{" "}
                          </Text>
                          <div className="flex flex-row gap-1.5 items-start justify-start w-[52%] md:w-full">
                            <Text
                              className="text-[10px] text-black-900"
                              size="txtPoppinsSemiBold10"
                            >
                              Size:
                            </Text>
                            <div className="bg-black-900_19 flex flex-col items-center justify-center w-[13px]">
                              <Text
                                className="text-[8px] text-black-900 w-auto"
                                size="txtPoppinsBold8"
                              >
                                34
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Text
                          className="mt-[3px] text-black-900 text-lg"
                          size="txtInterSemiBold18"
                        >
                          $ 345
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-between w-full">
                        <div className="bg-black-900_f2 flex flex-col h-6 md:h-auto items-center justify-center sm:px-5 px-[25px] py-[5px] w-[158px]">
                          <Text
                            className="text-[10px] text-white-A700 tracking-[1.50px] w-auto"
                            size="txtPoppinsBold10WhiteA700"
                          >
                            Add to Cart{" "}
                          </Text>
                        </div>
                        <div className="bg-black-900_f2 flex flex-col h-6 md:h-auto items-center justify-center p-2.5 w-[27px]">
                          <Img
                            className="h-2.5 w-2.5"
                            src="images/img_favorite_white_a700.svg"
                            alt="favorite"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
            </div>
            <div className="absolute border border-black-900_7f border-solid bottom-[0] h-[451px] inset-x-[0] mx-auto w-full"></div>
          </div>
          <Footer className="flex font-poppins items-center justify-center mt-[109px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WhishlistPage;
