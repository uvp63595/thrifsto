import React from "react";

import { Img, Input, Line, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const ProductviewPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");
  const [searchbaronevalue, setSearchbaronevalue] = React.useState("");

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
          <div className="flex md:flex-col flex-row font-arial md:gap-5 items-end justify-start max-w-[1239px] mt-[3px] mx-auto md:px-5 w-full">
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
            <div className="flex flex-row font-poppins gap-[29px] items-start justify-start mb-1 ml-20 md:ml-[0] md:mt-0 mt-10 w-auto">
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
              wrapClassName="flex md:flex-1 md:ml-[0] ml-[227px] md:mt-0 mt-[34px] w-[16%] md:w-full"
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
            <div className="flex flex-row font-poppins gap-5 items-center justify-center md:ml-[0] ml-[30px] md:mt-0 mt-6 w-[168px]">
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
          <div className="font-arial h-[681px] md:h-[719px] mt-[38px] md:px-5 relative w-full">
            <div className="h-[681px] m-auto w-full">
              <div className="md:h-[679px] h-[681px] m-auto w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col md:gap-10 gap-[475px] justify-start w-full">
                    <div className="h-px relative w-full">
                      <Line className="bg-black-900 h-px m-auto shadow-bs w-full" />
                      <Line className="absolute bg-black-900 h-px inset-[0] justify-center m-auto shadow-bs w-full" />
                    </div>
                    <Input
                      name="searchbar_One"
                      placeholder="Search"
                      value={searchbaronevalue}
                      onChange={(e) => setSearchbaronevalue(e)}
                      className="!placeholder:text-black-900_4c !text-black-900_4c leading-[normal] p-0 text-base text-left w-full"
                      wrapClassName="flex ml-40 md:ml-[0] w-[13%]"
                      suffix={
                        <div className="h-3.5 ml-[35px] w-3.5 bg-black-900_4c my-0.5">
                          {searchbaronevalue?.length > 0 ? (
                            <CloseSVG
                              className="cursor-pointer h-3.5 my-auto"
                              onClick={() => setSearchbaronevalue("")}
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
                  </div>
                </div>
                <div className="absolute bg-black-900_0c border border-black-900_19 border-solid flex flex-col font-poppins h-full inset-y-[0] items-start justify-end left-[7%] my-auto p-[18px] w-[22%]">
                  <Text
                    className="md:ml-[0] ml-[42px] mt-[100px] text-red-A700 text-xl"
                    size="txtPoppinsBold20"
                  >
                    SALE
                  </Text>
                  <div className="flex flex-col gap-[29px] items-start justify-start md:ml-[0] ml-[42px] mt-[88px] w-auto">
                    <Text
                      className="text-black-900_7f text-xl w-auto"
                      size="txtPoppinsBold20Black9007f"
                    >
                      MEN
                    </Text>
                    <Text
                      className="text-black-900_e5 text-xl w-auto"
                      size="txtPoppinsBold20Black900e5"
                    >
                      WOMEN
                    </Text>
                    <Text
                      className="text-black-900_e5 text-xl w-auto"
                      size="txtPoppinsBold20Black900e5"
                    >
                      UNISEX
                    </Text>
                    <Text
                      className="text-black-900_e5 text-xl w-auto"
                      size="txtPoppinsBold20Black900e5"
                    >
                      ACCESSORIES
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[7px] items-start justify-start md:ml-[0] ml-[42px] mt-[98px] w-auto">
                    <Text
                      className="text-[15px] text-black-900_b2 w-auto"
                      size="txtPoppinsLight15"
                    >
                      help
                    </Text>
                    <Text
                      className="text-[15px] text-black-900_b2 w-auto"
                      size="txtPoppinsLight15"
                    >
                      about us
                    </Text>
                    <a
                      href="javascript:"
                      className="text-[15px] text-black-900_b2 w-auto"
                    >
                      <Text size="txtPoppinsLight15">contact us</Text>
                    </a>
                  </div>
                  <div className="flex flex-row gap-[21px] items-start justify-start ml-11 md:ml-[0] mt-[18px] w-auto">
                    <Img
                      className="h-5 w-5"
                      src="images/img_volume.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col items-center justify-start w-[11%]">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-5"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_info.svg"
                      alt="info"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bg-black-900_19 border border-black-900_19 border-solid h-[681px] inset-y-[0] left-[28%] my-auto w-[4%]"></div>
              <Img
                className="absolute h-[362px] object-cover right-[7%] top-[0] w-2/5"
                src="images/img_rectangle32.png"
                alt="rectangleThirtyTwo"
              />
              <Img
                className="absolute h-[181px] left-[42%] object-cover top-[0] w-[11%]"
                src="images/img_rectangle29.png"
                alt="rectangleTwentyNine"
              />
              <Img
                className="absolute h-[181px] left-[32%] object-cover top-[27%] w-[11%]"
                src="images/img_rectangle28.png"
                alt="rectangleTwentyEight"
              />
            </div>
            <Img
              className="absolute h-[181px] left-[32%] object-cover top-[0] w-[11%]"
              src="images/img_rectangle31.png"
              alt="rectangleThirtyOne"
            />
            <Img
              className="absolute h-[181px] left-[42%] object-cover top-[27%] w-[11%]"
              src="images/img_rectangle30.png"
              alt="rectangleThirty"
            />
            <div className="absolute bg-white-A700 border border-black-900_19 border-solid bottom-[0] flex flex-col font-poppins gap-[37px] items-start justify-start left-[32%] p-[18px]">
              <Text
                className="text-black-900_7f text-xs"
                size="txtPoppinsMedium12Black9007f"
              >
                Brand
              </Text>
              <Text
                className="mb-[178px] md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                size="txtPoppinsMedium32"
              >
                Adidas
              </Text>
            </div>
            <div className="absolute bottom-[13%] flex flex-col font-poppins items-start justify-start right-[7%] w-[38%]">
              <Text
                className="text-black-900_7f text-xs"
                size="txtPoppinsMedium12Black9007f"
              >
                Products
              </Text>
              <Text
                className="mt-[15px] text-black-900 text-xl"
                size="txtPoppinsMedium20"
              >
                Men’s Puffer Jackets Black for casual{" "}
              </Text>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between mt-4 w-[97%] md:w-full">
                <div className="border border-black-900_19 border-solid flex flex-row gap-[107px] items-center justify-center p-[5px] w-[200px]">
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsMedium15"
                  >
                    Size :
                  </Text>
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsMedium15"
                  >
                    XS
                  </Text>
                </div>
                <div className="border border-black-900_19 border-solid flex flex-row gap-[107px] items-center justify-center p-[5px] w-[200px]">
                  <Text
                    className="text-[15px] text-black-900 w-auto"
                    size="txtPoppinsMedium15"
                  >
                    colour
                  </Text>
                  <div className="bg-black-900_e5 h-[11px] rounded-[5px] w-3"></div>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[47px] w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                  size="txtPoppinsMedium32"
                >
                  $369
                </Text>
                <Text
                  className="ml-9 sm:ml-[0] text-[8px] text-black-900_7f"
                  size="txtPoppinsMedium8"
                >
                  <>
                    *The price shown
                    <br />
                    without any charge
                  </>
                </Text>
                <Text
                  className="bg-black-900 justify-center mb-2.5 sm:ml-[0] ml-[123px] sm:mt-0 mt-1.5 pt-1.5 sm:px-5 px-[35px] rounded-[15px] text-[15px] text-white-A700 w-auto"
                  size="txtPoppinsBold15"
                >
                  Buy
                </Text>
                <div className="flex flex-row gap-[21px] items-start justify-start sm:ml-[0] ml-[26px] w-auto">
                  <Img
                    className="h-5 w-5"
                    src="images/img_volume.svg"
                    alt="volume_One"
                  />
                  <div className="flex flex-col items-center justify-start w-[11%]">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Img
                          className="h-5"
                          src="images/img_facebook.svg"
                          alt="facebook_One"
                        />
                      </div>
                    </div>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_info.svg"
                    alt="info_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <Footer className="flex font-poppins items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default ProductviewPage;
