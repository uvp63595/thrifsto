import React from "react";

import { Button, Img, Input, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const MenSectionPage = () => {
  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-black-900_f4 flex flex-col items-center justify-end p-[3px] w-full">
            <Text
              className="mt-0.5 text-amber-600 text-xs"
              size="txtPoppinsExtraBold12"
            >
              PERFECT YOUR SUMMER STYLE WITH A NEW SESON UPDATE
            </Text>
          </div>
          <div className="flex md:flex-col flex-row font-stoke md:gap-5 items-end justify-start max-w-[1232px] mt-[7px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row items-center justify-between mb-2 md:mt-0 mt-[53px] w-[17%] md:w-full">
              <Text
                className="text-black-900_7f text-xl"
                size="txtStokeRegular20"
              >
                MEN
              </Text>
              <Text
                className="text-black-900 text-xl"
                size="txtStokeRegular20Black900"
              >
                WOMEN
              </Text>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row font-arial sm:gap-10 gap-[72px] items-end justify-center mb-[5px] md:ml-[0] ml-[300px] md:mt-0 mt-[13px] w-[39%] md:w-full">
              <div className="md:h-16 h-[67px] relative w-[46%] sm:w-full">
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
              <Input
                name="searchbar"
                placeholder="Search"
                value={searchbarvalue}
                onChange={(e) => setSearchbarvalue(e)}
                className="!placeholder:text-black-900_4c !text-black-900_4c leading-[normal] p-0 text-base text-left w-full"
                wrapClassName="flex sm:mt-0 mt-[35px] w-2/5 sm:w-full"
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
            </div>
            <div className="flex md:flex-1 flex-col font-inter gap-[27px] items-end justify-start md:ml-[0] ml-[65px] w-[16%] md:w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-black-900_99 text-xs"
                  size="txtInterBold12"
                >
                  SHIPING UPDATES
                </Text>
                <Text
                  className="text-black-900_99 text-xs"
                  size="txtInterBold12"
                >
                  INDIA
                </Text>
              </div>
              <div className="flex flex-row font-poppins gap-5 items-center justify-center w-[168px]">
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
          </div>
          <div className="flex font-poppins h-24 sm:h-[465px] md:h-[98px] justify-end max-w-[1240px] mt-0.5 mx-auto md:px-5 relative w-full">
            <div className="flex sm:flex-col flex-row gap-[46px] md:h-auto h-full items-center justify-center max-w-[852px] mb-[26px] mt-auto mx-auto w-full">
              <Text
                className="text-amber-600 text-base tracking-[4.80px] w-auto"
                size="txtPoppinsExtraBold16"
              >
                ALL
              </Text>
              <Text
                className="text-amber-600 text-base tracking-[4.80px] w-auto"
                size="txtPoppinsExtraBold16"
              >
                NEW IN
              </Text>
              <Text
                className="text-base text-black-900_7f tracking-[4.80px] w-auto"
                size="txtPoppinsExtraBold16Black9007f"
              >
                CLOTHING
              </Text>
              <Text
                className="text-amber-600 text-base tracking-[4.80px] w-auto"
                size="txtPoppinsExtraBold16"
              >
                SHOES
              </Text>
              <Text
                className="text-amber-600 text-base tracking-[4.80px] w-auto"
                size="txtPoppinsExtraBold16"
              >
                ACCESSORIES
              </Text>
              <Text
                className="text-amber-600 text-base tracking-[4.80px] w-auto"
                size="txtPoppinsExtraBold16"
              >
                GIFT
              </Text>
              <Text
                className="text-base text-red-A700 tracking-[4.80px] w-auto"
                size="txtPoppinsExtraBold16RedA700"
              >
                SALE
              </Text>
            </div>
            <Img
              className="absolute h-24 inset-[0] justify-center m-auto"
              src="images/img_navbar.svg"
              alt="navbar"
            />
          </div>
          <Text
            className="mt-[34px] text-black-900_7f text-xl tracking-[6.00px]"
            size="txtPoppinsExtraBold20"
          >
            CLOTHING
          </Text>
          <div className="font-poppins md:gap-5 gap-[35px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center max-w-[1240px] min-h-[auto] mt-[27px] mx-auto md:px-5 w-full">
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[99%]"
                  src="images/img_drop4.png"
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[99%]"
                  src="images/img_drop5.png"
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[99%]"
                  src="images/img_rectangle7.png"
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[99%]"
                  src="images/img_drop4.png"
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
            <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-1 flex-col items-center justify-start p-[11px] w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start my-0.5 w-full">
                <Img
                  className="h-[250px] md:h-auto object-cover w-[99%]"
                  src="images/img_drop5.png"
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
                      <Text
                        className="bg-black-900_19 justify-center text-[8px] text-black-900 w-[13px]"
                        size="txtPoppinsBold8"
                      >
                        34
                      </Text>
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
                  <Button
                    className="cursor-pointer font-bold h-6 leading-[normal] text-[10px] text-center tracking-[1.50px] w-[158px]"
                    color="black_900_f2"
                    size="xs"
                  >
                    Add to Cart{" "}
                  </Button>
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
          </div>
          <Footer className="flex font-poppins items-center justify-center mt-[111px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default MenSectionPage;
