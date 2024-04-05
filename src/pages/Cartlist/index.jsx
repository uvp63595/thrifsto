import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const CartlistPage = () => {
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
          <div className="flex flex-row font-inter gap-[46px] items-center justify-end md:ml-[0] ml-[1151px] mt-[7px] md:px-5 w-[14%] md:w-full">
            <Text className="text-black-900_99 text-xs" size="txtInterBold12">
              SHIPING UPDATES
            </Text>
            <Text className="text-black-900_99 text-xs" size="txtInterBold12">
              INDIA
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-arial md:gap-5 items-center justify-start max-w-[1239px] mt-3 mx-auto md:px-5 w-full">
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
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[281px] w-[16%] md:w-full"
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
            <div className="flex flex-row font-poppins gap-5 items-center justify-center md:ml-[0] ml-[30px] w-[168px]">
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
          <div className="flex md:flex-col flex-row font-poppins gap-5 items-start justify-start max-w-[1239px] mt-[65px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col gap-[33px] items-start justify-start mb-[41px] w-1/2 md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900"
                size="txtPoppinsExtraBold40"
              >
                Your Cart{" "}
              </Text>
              <List
                className="flex flex-col gap-5 items-center w-full"
                orientation="vertical"
              >
                <div className="border border-black-900_7f border-solid flex md:flex-1 sm:flex-col flex-row gap-7 h-[87px] md:h-auto items-center justify-start pl-2.5 w-[610px] md:w-full">
                  <Img
                    className="h-[70px] md:h-auto object-cover w-14 sm:w-full"
                    src="images/img_drop1.png"
                    alt="rectangleNine"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-[15px] text-black-900 w-[201px]"
                      size="txtPoppinsMedium15"
                    >
                      H&M Joggers (olive green)
                    </Text>
                    <div className="flex flex-row gap-[22px] items-center justify-start w-[32%] md:w-full">
                      <Text
                        className="text-[10px] text-black-900"
                        size="txtPoppinsSemiBold10"
                      >
                        Size:
                      </Text>
                      <Text
                        className="bg-black-900_19 justify-center px-1 text-[8px] text-black-900 w-5"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start w-[194px]">
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtPoppinsRegular10"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-[15px] text-black-900 w-auto"
                      size="txtPoppinsMedium15"
                    >
                      $200
                    </Text>
                  </div>
                  <Button
                    className="flex h-[30px] items-center justify-center w-[30px]"
                    color="black_900_7f"
                    variant="outline"
                  >
                    <Img
                      className="h-2.5"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </Button>
                </div>
                <div className="border border-black-900_7f border-solid flex md:flex-1 sm:flex-col flex-row gap-7 h-[87px] md:h-auto items-center justify-start pl-2.5 w-[610px] md:w-full">
                  <Img
                    className="h-[70px] md:h-auto object-cover w-14 sm:w-full"
                    src="images/img_rectangle9.png"
                    alt="rectangleNine"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-auto">
                    <Text
                      className="text-[15px] text-black-900 w-[201px]"
                      size="txtPoppinsMedium15"
                    >
                      H&M Joggers (olive green)
                    </Text>
                    <div className="flex flex-row gap-[22px] items-center justify-start w-[32%] md:w-full">
                      <Text
                        className="text-[10px] text-black-900"
                        size="txtPoppinsSemiBold10"
                      >
                        Size:
                      </Text>
                      <Text
                        className="bg-black-900_19 justify-center px-1 text-[8px] text-black-900 w-5"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start w-[194px]">
                    <Text
                      className="text-[10px] text-black-900 w-auto"
                      size="txtPoppinsRegular10"
                    >
                      Price
                    </Text>
                    <Text
                      className="text-[15px] text-black-900 w-auto"
                      size="txtPoppinsMedium15"
                    >
                      $170
                    </Text>
                  </div>
                  <Button
                    className="flex h-[30px] items-center justify-center w-[30px]"
                    color="black_900_7f"
                    variant="outline"
                  >
                    <Img
                      className="h-2.5"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                  </Button>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col gap-12 items-center justify-start md:mt-0 mt-[93px] w-1/2 md:w-full">
              <div className="border border-black-900_7f border-solid flex flex-row sm:gap-10 gap-[397px] items-start justify-start sm:px-5 px-6 py-[18px] w-[609px] md:w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-auto">
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsRegular15"
                  >
                    Subtotal
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsRegular15"
                  >
                    Shipping cost
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsRegular15"
                  >
                    Sales Tax
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsSemiBold15"
                  >
                    Grand Total
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-end justify-center w-auto">
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsBold15Black900"
                  >
                    $370.00
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsRegular15"
                  >
                    $4.00
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsRegular15"
                  >
                    $1.00
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsSemiBold15"
                  >
                    $375.00
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[52%] md:w-full">
                <Button className="border border-black-900_7f border-solid cursor-pointer font-extrabold leading-[normal] min-w-[314px] text-[15px] text-center">
                  CHACKOUT
                </Button>
              </div>
            </div>
          </div>
          <Footer className="flex font-poppins items-center justify-center mt-[287px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default CartlistPage;
