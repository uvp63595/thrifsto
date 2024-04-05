import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import Footer from "components/Footer";

import { CloseSVG } from "../../assets/images";

const HomePagePage = () => {
  const navigate = useNavigate();

  const [searchbarvalue, setSearchbarvalue] = React.useState("");

  function handleNavigate() {
    window.location.href = "https://youtube.com";
  }
  function handleNavigate1() {
    window.location.href = "https://facebook.com";
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-start justify-start mx-auto w-full">
        <div className="flex flex-col items-center w-full">
          <div className="md:h-[1088px] h-[772px] md:px-5 relative w-full">
            <div className="absolute bg-black-900_0c bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto pb-[100px] md:px-10 sm:px-5 px-[100px] w-full">
              <div className="bg-white-A700 flex flex-col items-center justify-start mb-[404px] p-[13px] w-full">
                <div className="flex md:flex-col flex-row gap-[38px] items-center justify-center w-auto md:w-full">
                  <Img
                    className="h-[25px] w-[25px]"
                    src="images/img_lock.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-black-900_7f text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Delivered with Eco-friendly packaging
                  </Text>
                  <Line className="bg-black-900_7f md:h-0.5 h-8 w-0.5 md:w-full" />
                  <Img
                    className="h-[25px] w-[38px]"
                    src="images/img_car.svg"
                    alt="car"
                  />
                  <Text
                    className="text-gray-600 text-lg w-auto"
                    size="txtPoppinsRegular18Gray600"
                  >
                    Fast Shipping
                  </Text>
                  <Line className="bg-black-900_7f md:h-0.5 h-8 w-0.5 md:w-full" />
                  <Img
                    className="h-[25px] w-[38px]"
                    src="images/img_television.svg"
                    alt="television"
                  />
                  <Text
                    className="text-black-900_7f text-lg w-auto"
                    size="txtPoppinsRegular18"
                  >
                    Duties included in final price
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute font-ubuntu md:h-[148px] h-[47px] inset-x-[0] mx-auto top-[21%] w-full">
              <div className="flex md:flex-col flex-row gap-[18px] h-full items-center justify-center m-auto w-auto">
                <Text
                  className="text-[15px] text-black-900_e5 w-auto"
                  size="txtUbuntuMedium15"
                >
                  Most Trusted Plateform
                </Text>
                <Line className="bg-black-900_7f h-[11px] rotate-[-90deg] w-0.5" />
                <Text
                  className="text-[15px] text-black-900_e5 w-[116px]"
                  size="txtUbuntuLight15"
                >
                  Limited time only
                </Text>
                <Line className="bg-black-900_7f h-[11px] rotate-[-90deg] w-0.5" />
                <a
                  href="javascript:"
                  className="italic text-[15px] text-black-900_e5 w-auto"
                >
                  <Text size="txtUbuntuLightItalic15">Read More</Text>
                </a>
              </div>
              <div className="absolute bg-black-900_19 h-[47px] inset-[0] justify-center m-auto w-full"></div>
            </div>
            <header className="flex md:flex-col flex-row font-inter md:gap-5 items-center justify-center mt-[34px] mx-auto w-full">
              <div className="flex flex-col gap-3.5 items-end justify-start md:mt-0 mt-[57px] w-auto">
                <div className="flex flex-row font-stoke gap-[57px] items-center justify-end w-[68%] md:w-full">
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
                <Text
                  className="text-amber-600 text-xl w-auto"
                  size="txtInterRegular20"
                >
                  *Please select a gender to shop
                </Text>
              </div>
              <Img
                className="h-[51px] mb-[55px] md:ml-[0] ml-[211px] md:mt-0 mt-4"
                src="images/img_logo.svg"
                alt="logo"
              />
              <div className="flex sm:flex-1 flex-col gap-[27px] items-end justify-start mb-9 md:ml-[0] ml-[84px] w-auto sm:w-full">
                <div className="flex flex-row gap-[46px] items-start justify-end w-auto">
                  <Text
                    className="text-black-900_99 text-xs w-[109px]"
                    size="txtInterBold12"
                  >
                    SHIPING UPDATES
                  </Text>
                  <Text
                    className="text-black-900_99 text-xs w-[34px]"
                    size="txtInterBold12"
                  >
                    INDIA
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row font-arial sm:gap-10 gap-[75px] items-end justify-start w-auto sm:w-full">
                  <Input
                    name="searchbar"
                    placeholder="Search"
                    value={searchbarvalue}
                    onChange={(e) => setSearchbarvalue(e)}
                    className="!placeholder:text-black-900_4c !text-black-900_4c leading-[normal] p-0 text-base text-left w-full"
                    wrapClassName="flex w-[44%] sm:w-full"
                    suffix={
                      <div className="h-[15px] ml-[35px] w-[15px] bg-gray-400 my-px">
                        {searchbarvalue?.length > 0 ? (
                          <CloseSVG
                            className="cursor-pointer h-[15px] my-auto"
                            onClick={() => setSearchbarvalue("")}
                            fillColor="#0000004c"
                            height={15}
                            width={15}
                            viewBox="0 0 15 15"
                          />
                        ) : (
                          <Img
                            className="cursor-pointer h-[15px] my-auto"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        )}
                      </div>
                    }
                    shape="square"
                    color="gray_100"
                    size="xs"
                    variant="outline"
                  ></Input>
                  <div className="flex flex-row font-poppins gap-5 items-center justify-center w-[168px]">
                    <div className="flex flex-col gap-2 items-center justify-start w-auto">
                      <Img
                        className="h-[21px] w-5"
                        src="images/img_lock_black_900.svg"
                        alt="lock_One"
                      />
                      <a
                        href="javascript:"
                        className="text-[10px] text-black-900 w-auto"
                      >
                        <Text size="txtPoppinsBold10">SIGN IN</Text>
                      </a>
                    </div>
                    <div
                      className="common-pointer flex flex-col gap-2 items-center justify-center w-auto"
                      onClick={() => navigate("/whishlist")}
                    >
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
                    <div
                      className="common-pointer flex flex-col gap-2 items-center justify-center w-auto"
                      onClick={() => navigate("/cartlist")}
                    >
                      <Img
                        className="h-5 w-5"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
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
            </header>
            <div className="absolute flex flex-col font-poppins h-full inset-[0] items-center justify-center m-auto w-full">
              <div
                className="common-pointer flex flex-col md:gap-10 gap-[238px] items-center justify-start min-w-[216px] w-full"
                onClick={() => navigate("/mensection")}
              >
                <Button
                  className="cursor-pointer font-extrabold leading-[normal] min-w-[1440px] md:min-w-full text-center text-xs"
                  color="black_900_f4"
                  size="xs"
                >
                  PERFECT YOUR SUMMER STYLE WITH A NEW SESON UPDATE
                </Button>
                <div className="flex md:flex-col flex-row gap-2.5 items-center justify-start w-[87%] md:w-full">
                  <div className="h-[504px] relative w-1/2 md:w-full">
                    <Img
                      className="h-[504px] m-auto object-cover w-full"
                      src="images/img_men.png"
                      alt="men_One"
                    />
                    <Button
                      className="absolute cursor-pointer font-extrabold h-[0] inset-[0] leading-[normal] m-auto min-h-[50px] min-w-[216px] text-center text-xl tracking-[6.00px] w-[0]"
                      color="white_A700"onClick={() => navigate("/mensection")}
                    >
                      SHOP MEN
                    </Button>
                  </div>
                  <div className="h-[504px] relative w-1/2 md:w-full">
                    <Img
                      className="h-[504px] m-auto object-cover w-full"
                      src="images/img_women.png"
                      alt="women_One"
                    />
                    <Button
                      className="absolute cursor-pointer font-extrabold h-[0] inset-[0] leading-[normal] m-auto min-h-[50px] min-w-[216px] text-center text-xl tracking-[6.00px] w-[0]"
                      color="white_A700"
                    >
                      SHOP WOMEN
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-insaniburger items-end mt-[93px] md:pl-10 sm:pl-5 pl-[100px] w-full">
          <div className="md:h-[473px] h-[662px] relative w-full">
            <div className="absolute md:h-[473px] h-[544px] inset-x-[0] mx-auto top-[0] w-full">
              <div className="md:h-[473px] h-[544px] m-auto w-full">
                <div className="absolute bg-amber-600_e5 bottom-[0] h-[473px] right-[0] w-[90%]"></div>
                <Img
                  className="absolute h-[235px] left-[0] object-cover top-[0] w-[59%]"
                  src="images/img_uperimg.png"
                  alt="uperimg"
                />
              </div>
              <Text
                className="absolute backdrop-opacity-[0.5] blur-[4.00px] h-max inset-y-[0] left-[8%] my-auto md:text-5xl text-8xl text-black-900 text-center"
                size="txtInsaniburger96"
              >
                <>
                  STEP UP YOUR STYLE
                  <br />
                  VIA THRIFT CLOTHS
                  <br />
                  COLLECTION
                  <br />
                </>
              </Text>
            </div>
            <Img
              className="absolute bottom-[0] h-[237px] object-cover right-[1%] w-[59%]"
              src="images/img_downimg.png"
              alt="downimg"
            />
            <div className="absolute border-[3px] border-black-900 border-solid bottom-[2%] flex flex-row gap-2.5 items-center justify-center left-[18%] p-2.5 rounded-[30px] w-auto">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-black-900 w-auto"
                size="txtInsaniburger30"
              >
                SHOP NOW
              </Text>
              <div className="bg-black-900 h-10 rounded-[50%] w-10"></div>
            </div>
          </div>
        </div>
        <div
          className="common-pointer flex flex-col font-poppins items-center mt-2.5 w-full"
          onClick={() => navigate("/productview")}
        >
          <div className="bg-amber-600_e5 flex flex-col items-center justify-end p-[19px] w-full">
            <div className="flex flex-row flex-wrap gap-[30px] md:gap-[39px] items-start justify-start max-w-[1161px] mt-0.5 mx-auto md:px-5 w-full">
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[125px] text-center text-xl"
                variant="outline"
              >
                SNEAKERS
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[87px] text-center text-xl"
                variant="outline"
              >
                SHOES
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[115px] text-center text-xl"
                variant="outline"
              >
                T-SHIRTS
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[92px] text-center text-xl"
                variant="outline"
              >
                SHIRTS
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[112px] text-center text-xl"
                variant="outline"
              >
                JACKETS
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[88px] text-center text-xl"
                variant="outline"
              >
                PANTS
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[160px] text-center text-xl"
                variant="outline"
              >
                ACCESSORIES
              </Button>
              <Button
                className="cursor-pointer font-extrabold leading-[normal] min-w-[109px] text-center text-xl"
                variant="outline"
              >
                GLASSES
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[66px] items-center justify-start max-w-[1240px] mt-[47px] mx-auto md:px-5 w-full">
            <Button
              className="cursor-pointer font-extrabold leading-[normal] min-w-[188px] text-center text-xl tracking-[6.00px]"
              color="black_900_19"
            >
              DROP SOON
            </Button>
            <List
              className="sm:flex-col flex-row gap-[35px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-start w-auto md:w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-3 w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-full"
                    src="images/img_drop1.png"
                    alt="dropOne"
                  />
                  <div className="flex flex-row items-start justify-start w-[91%] md:w-full">
                    <div className="flex flex-col font-poppins items-start justify-start w-[84%]">
                      <div className="flex flex-row items-end justify-between w-full">
                        <Text
                          className="text-black-900 text-xs"
                          size="txtPoppinsMedium12"
                        >
                          H&M Joggers{" "}
                        </Text>
                        <Img
                          className="h-[11px] mt-1.5"
                          src="images/img_settings.svg"
                          alt="settings"
                        />
                      </div>
                      <div className="flex flex-row gap-1.5 items-start justify-start w-[28%] md:w-full">
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
                      className="text-black-900 text-lg"
                      size="txtInterSemiBold18"
                    >
                      {" "}
                      ***
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-3 w-full"
                onClick={() => navigate("/productview")}
              >
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-full"
                    src="images/img_drop2.png"
                    alt="dropTwo"
                  />
                  <div className="flex flex-row gap-[63px] items-start justify-start w-[89%] md:w-full">
                    <div className="flex flex-col font-poppins items-start justify-start w-[47%]">
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
                      className="text-black-900 text-lg"
                      size="txtInterSemiBold18"
                    >
                      ***
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-3 w-full">
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-full"
                    src="images/img_drop3.png"
                    alt="dropThree"
                  />
                  <div className="flex flex-row gap-[63px] items-start justify-start w-[89%] md:w-full">
                    <div className="flex flex-col font-poppins items-start justify-start w-[47%]">
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
                      className="text-black-900 text-lg"
                      size="txtInterSemiBold18"
                    >
                      ***
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-3 w-full"
                onClick={() => navigate("/productview")}
              >
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-full"
                    src="images/img_drop4.png"
                    alt="dropFour"
                  />
                  <div className="flex flex-row gap-[63px] items-start justify-start w-[89%] md:w-full">
                    <div className="flex flex-col font-poppins items-start justify-start w-[47%]">
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
                      className="text-black-900 text-lg"
                      size="txtInterSemiBold18"
                    >
                      ***
                    </Text>
                  </div>
                </div>
              </div>
              <div
                className="common-pointer bg-white-A700 border border-black-900_33 border-solid flex flex-col items-center justify-start p-3 w-full"
                onClick={() => navigate("/productview")}
              >
                <div className="flex flex-col gap-[5px] items-start justify-start w-full">
                  <Img
                    className="h-[250px] md:h-auto object-cover w-full"
                    src="images/img_drop5.png"
                    alt="dropFive"
                  />
                  <div className="flex flex-row gap-[67px] items-start justify-start w-[91%] md:w-full">
                    <div className="flex flex-col font-poppins items-start justify-start w-[46%]">
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
                      className="text-black-900 text-lg"
                      size="txtInterSemiBold18"
                    >
                      {" "}
                      ***
                    </Text>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Footer
            className="flex items-center justify-center mt-[119px] md:px-5 w-full"
            onClick={handleNavigate}
            onClick1={handleNavigate1}
          />
        </div>
      </div>
    </>
  );
};

export default HomePagePage;
