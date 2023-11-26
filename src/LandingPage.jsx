import React from "react";
import Header from "./components/Header";
import DataDriven from "./components/DataDriven";
import Card from "./components/Card";
import { cardData } from "./mock/data";
import { svgIcons } from "./assets/Icons/svgIcons";
import product1 from "./assets/images/product-1.png";
import product2 from "./assets/images/product-2.png";
import product3 from "./assets/images/product-3.png";
import customer from "./assets/images/customer-quote.png";
import customerIcon from "./assets/images/customer-name-icon.png";
import aicpa from "./assets/images/aicpa.png";
import aicpaSoc from "./assets/images/aicpa-soc.png";
import schellman from "./assets/images/schellman.png";
import fedRamp from "./assets/images/fed-ramp.png";
import hipaa from "./assets/images/hipaa.png";
import ramp from "./assets/images/tx-ramp.png";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <DataDriven />
      <div className="flex" style={{ margin: "50px 195px 0px 219px" }}>
        <div
          className="flex justify-between items-center"
          style={{
            backgroundColor: "#F6F8FC",
            padding: "36px 90px",
            width: "100%",
          }}
        >
          <div>{svgIcons.mills}</div>
          <div>{svgIcons.cocacola}</div>
          <div>{svgIcons.intertek}</div>
          <div>{svgIcons.afterPay}</div>
          <div>{svgIcons.campari}</div>
        </div>
      </div>

      <div
        className="flex items-center flex-wrap"
        style={{ padding: "0px 50px" }}
      >
        {cardData.map((data, index) => (
          <div style={{ marginLeft: index > 0 ? "40px" : "0px" }}>
            <Card
              icon={svgIcons[`cardIcon${index + 1}`]}
              title={data.title}
              subtitle={data.subtitle}
              description={data.description}
            />
          </div>
        ))}
      </div>

      <div
        className="flex flex-col"
        style={{
          marginTop: "95px",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            transform:
              "translate(0,0) rotate(0) skewX(0) skewY(2deg) scaleX(1) scaleY(1)",
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "#282E37",
          }}
        />
        <div
          className="flex justify-center"
          style={{
            fontSize: "48px",
            marginTop: "122px",
            zIndex: "1",
            width: "100%",
            lineHeight: "60.48px",
            fontWeight: 600,
            fontFamily: "Plus Jakarta Sans",
            color: "#FF5D52",
          }}
        >
          Unleash The Power{" "}
          <span style={{ color: "#FDFDFD", marginLeft: "10px" }}>
            of ACL Analytics
          </span>
        </div>

        <div
          className="flex justify-center"
          style={{ marginTop: "67px", height: "363px", zIndex: "1" }}
        >
          <div className="flex" style={{ width: "567px" }}>
            <img src={product1} alt="" />
          </div>
          <div
            className="flex flex-col justify-center"
            style={{ width: "567px", marginLeft: "24px" }}
          >
            <div className="secondary-title">Secondary title</div>
            <div className="header">
              Centralize your <br /> assurance programs 
            </div>
            <div className="desc">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively. 
            </div>
          </div>
        </div>

        <div
          className="flex justify-center"
          style={{ marginTop: "67px", height: "363px", zIndex: "1" }}
        >
          <div
            className="flex flex-col justify-center"
            style={{ width: "567px", marginLeft: "24px" }}
          >
            <div className="secondary-title">Secondary title</div>
            <div className="header">
              Centralize your <br /> assurance programs 
            </div>
            <div className="desc">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively. 
            </div>
          </div>
          <div className="flex" style={{ width: "567px" }}>
            <img src={product2} alt="" />
          </div>
        </div>

        <div
          className="flex justify-center"
          style={{ marginTop: "67px", height: "363px", zIndex: "1" }}
        >
          <div className="flex" style={{ width: "567px" }}>
            <img src={product3} alt="" />
          </div>
          <div
            className="flex flex-col justify-center"
            style={{ width: "567px", marginLeft: "24px" }}
          >
            <div className="secondary-title">Secondary title</div>
            <div className="header">
              Centralize your <br /> assurance programs 
            </div>
            <div className="desc">
              Consolidate key assurance functions, maintain an audit history and
              gain real-time visibility across all audits to make better
              decisions and communicate more effectively. 
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "36px" }}>
        <div
          style={{
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: "60.48px",
            color: "#0D0C38",
          }}
        >
          <span
            style={{
              color: "#E00D00",
            }}
          >
            Report title
          </span>{" "}
          - 2023 Q2 <br /> Diligent effect in action
        </div>

        <div className="flex" style={{ marginTop: "42px" }}>
          <div className="flex flex-col" style={{ width: "518px" }}>
            <div
              style={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: "26.1px",
                color: "#4C4D69",
              }}
            >
              Fusce vel mattis augue. Sed sed felis nisl. Sed dictum in risus
              vitae eleifend. Nunc finibus massa a eleifend imperdiet. Etiam non
              vehicula diam, vitae facilisis orci. Morbi consectetur fringilla
              felis ut iaculis. Phasellus bibendum gravid
            </div>

            <div className="flex" style={{ marginTop: "32px" }}>
              <div
                style={{
                  borderRight: "1px solid #D0D5E7",
                  paddingRight: "30px",
                }}
              >
                <p
                  style={{
                    fontSize: "36px",
                    color: "#0D0C38",
                    lineHeight: "16px",
                    fontWeight: 700,
                  }}
                >
                  6700
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#4C4D69",
                    lineHeight: "16px",
                    marginTop: "23px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  user
                </p>
              </div>
              <div style={{ paddingLeft: "30px" }}>
                <p
                  style={{
                    fontSize: "36px",
                    color: "#E00D00",
                    lineHeight: "16px",
                    fontWeight: 700,
                  }}
                >
                  +32%
                </p>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#4C4D69",
                    lineHeight: "16px",
                    marginTop: "23px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  income
                </p>
              </div>
            </div>
            <p className="flex" style={{ color: "#E00D00", marginTop: "36px" }}>
              Read the report {svgIcons.arrowRight("#E00D00")}
            </p>
          </div>
          <div
            className="retail-wrapper flex px-3"
            style={{ marginLeft: "44px" }}
          >
            <div className="flex items-center justify-center">
              <div
                className="flex flex-col"
                style={{
                  borderRight: "1px solid #D0D5E7",
                  paddingRight: "30px",
                }}
              >
                <div className="flex items-center">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      border: "1px solid #E5E4E4",
                      borderRadius: "50%",
                    }}
                  >
                    <div
                      className="flex items-center justify-center"
                      style={{
                        width: "50px",
                        height: "50px",
                        padding: "11px 12px 5px 5px",
                      }}
                    >
                      {svgIcons.retail}
                    </div>
                  </div>
                  <div style={{ marginLeft: "12px" }}>
                    <p
                      style={{
                        fontSize: "18px",
                        lineHeight: "26.1px",
                        fontWeight: 700,
                        color: "#0D0C38",
                      }}
                    >
                      Capterra
                    </p>
                    <p
                      style={{
                        fontSize: "14px",
                        lineHeight: "20.3px",
                        fontWeight: 500,
                        color: "#526580",
                      }}
                    >
                      Retail
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    lineHeight: "20.3px",
                    fontWeight: 400,
                    color: "#4C4D69",
                    padding: "12px 0px 0px 5px",
                  }}
                >
                  Capterra, Inc. is a free online marketplace vendor serving as
                  an intermediary between buyers and technology vendors within
                  the software industry.
                </div>
              </div>

              <div style={{ marginLeft: "30px" }}>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "23.2px",
                    fontWeight: 400,
                    color: "#4C4D69",
                    marginBottom: "12px",
                  }}
                >
                  "The best part of Highbond is that it is an intuitive platform
                  that is easy to implement, learn, and use.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "23.2px",
                    fontWeight: 400,
                    color: "#4C4D69",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 600,
                      color: "#E00D00",
                    }}
                  >
                    Our user group of 40+ auditors worldwide were able to use
                    the platform with minimal training just because it was so
                    intuitive.
                  </span>{" "}
                  We are now working on various reports and other summaries to
                  speed up our monthly reporting”
                </p>
                <div className="flex flex-col" style={{ marginTop: "24px" }}>
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "23.2px",
                      fontWeight: 700,
                      color: "#0D0C38",
                    }}
                  >
                    Andrew
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: "20.3px",
                      fontWeight: 400,
                      color: "#4C4D69",
                    }}
                  >
                    Director, Internal Audit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-around items-center"
        style={{
          backgroundColor: "#F6F8FC",
          padding: "68px 0px 83px 0px",
          marginTop: "110px",
          width: "100%",
        }}
      >
        <div className="flex flex-col" style={{ width: "550px" }}>
          <div className="pricing">Pricing</div>
          <div className="pricing-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget
            mauris nunc. Sed ac lacus quis purus pretium accumsan sit amet sed
            turpis. Donec ac varius nisi, quis faucibus ipsum. Proin id orci sed
            ex rutrum fringilla a ut nunc. Sed sit amet nulla eget magna gravida
            sollicitudin ullamcorper a massa. Mauris ornare finibus neque, sit
            amet dictum leo lacinia vel. Phasellus pulvinar efficitur quam
            ornare pretium
          </div>
          <p className="flex" style={{ color: "#E00D00" }}>
            Pricing details {svgIcons.arrowRight("#E00D00")}
          </p>
        </div>

        <div className="flex items-center" style={{ width: "550px" }}>
          <div className="price-item">
            <div className="price-item-title">Enterprise</div>
            <div className="price-value-2">
              $100 <span className="price-value-1">/ month</span>
            </div>
          </div>
          <div className="price-item" style={{ marginLeft: "50px" }}>
            <div className="price-item-title">Non-profit</div>
            <div className="price-value-2">
              $50 <span className="price-value-1">/ month</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="mx-auto"
        style={{
          backgroundColor: "#282E37",
          maxWidth: "1280px",
          marginTop: "85px",
          boxSizing: "border-box",
        }}
      >
        <div className="mx-auto flex items-center gap-x-8 gap-y-10 px-2">
          <div
            className="-mt-8 ml-8 -mb-8"
            style={{ width: "260px", height: "463px" }}
          >
            <div className="relative aspect-[2/1] h-full">
              <img
                style={{ width: "255px" }}
                className="absolute inset-0 h-full w-full rounded-2xl bg-gray-800 object-cover shadow-2xl"
                src={customer}
                alt=""
              />
            </div>
          </div>
          <div className="w-full" style={{ padding: "58px 120px 38px 0px" }}>
            <div className="flex items-center">
              <div
                style={{ height: "6px", width: "133px", background: "#FFC72C" }}
              />
              <div className="flex">
                <img src={customerIcon} style={{ margin: "0px 20px" }} alt="" />
                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "34.8px",
                      color: "#FEFEFE",
                    }}
                  >
                    Epiroc
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      lineHeight: "20.3px",
                      color: "#E7E7F0",
                    }}
                  >
                    infrastructure
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "40px",
                marginLeft: "54px",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "37.2px",
                  fontStyle: "italic",
                  color: "#FEFEFE",
                }}
              >
                “Generating an internal audit report used to take up to four
                weeks after we finalized fieldwork. With HighBond, the report is
                done while we’re on-site.”
              </div>
              <p
                className="flex items-center flex-row-reverse"
                style={{
                  color: "#FF5D52",
                  fontSize: "18px",
                  marginTop: "32px",
                  lineHeight: "16px",
                  height: "24px",
                }}
              >
                {svgIcons.arrowRight("#FF5D52")}
                Read more about our clients stories{" "}
              </p>
              <div style={{ marginTop: "30px" }}>{svgIcons.circle}</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full py-20"
        style={{ backgroundColor: "#F6F8FC", marginTop: "110px" }}
      >
        <div className="mx-auto flex max-w-5xl flex-col justify-center px-4 text-center">
          <div
            className="pb-4"
            style={{
              fontSize: "32px",
              fontWeight: 600,
              lineHeight: "46.4px",
              color: "#0D0C38",
            }}
          >
            We are committed to providing a robust and secure service that
            protects our customers’ data.
          </div>
          <div className="mx-auto">
            <p
              className="font-regular"
              style={{
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "23.2px",
                color: "#4C4D69",
              }}
            >
              Diligent’s Security Program is governed based on NIST
              Cybersecurity Framework and Diligent follows ISO/IEC 27001
              standards to keep information assets secure by implementing an
              Information Security Management System (ISMS).
            </p>
          </div>
          <div
            className="mb-4 flex flex-wrap items-center justify-evenly gap-4 pb-16"
            style={{ marginTop: "39px" }}
          >
            <div>
              <img
                alt=""
                width="200"
                height="200"
                className=" max-w-[120px] max-h-[80px]"
                style={{ color: "transparent" }}
                src={aicpa}
              />
            </div>
            <div>
              <img
                alt=""
                width="200"
                height="200"
                className=" max-w-[120px] max-h-[80px]"
                style={{ color: "transparent" }}
                src={fedRamp}
              />
            </div>
            <div>
              <img
                alt=""
                width="200"
                height="200"
                className=" max-w-[120px] max-h-[80px]"
                style={{ color: "transparent" }}
                src={schellman}
              />
            </div>
            <div>
              <img
                alt=""
                width="200"
                height="200"
                className=" max-w-[120px] max-h-[80px]"
                style={{ color: "transparent" }}
                src={aicpaSoc}
              />
            </div>
            <div>
              <img
                alt=""
                width="200"
                height="200"
                className=" max-w-[120px] max-h-[80px]"
                style={{ color: "transparent" }}
                src={hipaa}
              />
            </div>
            <div>
              <img
                alt=""
                width="200"
                height="200"
                className=" max-w-[120px] max-h-[80px]"
                style={{ color: "transparent" }}
                src={ramp}
              />
            </div>
          </div>
          <div className="flex flex justify-center items-center font-semibold">
            <a className="flex" href="/" style={{ color: "#E00D00" }}>
              Read more about all Diligent's compliance and certifications
              {svgIcons.arrowRight("#E00D00")}
            </a>
          </div>
        </div>
      </div>

      <div
        className="rounded-sm px-6 py-8"
        style={{ backgroundColor: "#282E37" }}
      >
        <div className="grid items-center grid-cols-2">
          <div className="mb-8">
            <div className="mb-4">
              <div
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: "60.96px",
                  color: "#FDFDFD",
                  paddingLeft: "30px",
                }}
              >
                Ready to get started or want a demo?
              </div>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  marginTop: "22px",
                  lineHeight: "26.1px",
                  color: "#F6F8FC",
                  paddingLeft: "30px",
                }}
              >
                Reach out to our sales team, and we’ll work with you to schedule
                a demo or conversation.
              </p>
            </div>
            <div
              className="flex items-center justify-start"
              style={{ marginLeft: "30px" }}
            >
              <button
                className="rounded-sm flex"
                style={{
                  backgroundColor: "#E00D00",
                  padding: "12px 16px 12px 24px",
                  color: "white",
                }}
              >
                Contact Sales {svgIcons.arrowRight()}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="flex flex-col items-center justify-start border-b border-b-brand-divider px-4 py-6 text-center md:items-start md:border-b-0 md:border-r md:border-r-brand-divider md:py-0 md:text-left">
              <div className="flex flex-row items-center gap-2">
                {svgIcons.security}
                <div>
                  <h3
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "16px",
                      color: "#FFFFFF",
                    }}
                  >
                    Security
                  </h3>
                </div>
              </div>
              <div className="flex-grow">
                <p
                  className="pb-8 pt-4"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "26.1px",
                    color: "#F6F8FC",
                  }}
                >
                  Ensuring your data is protected is critical to Diligent learn
                  how we protect your data
                </p>
              </div>
              <a
                href="/"
                style={{ color: "#FF5D52" }}
                className="cursor-pointer flex items-center"
              >
                Visit Trust center
                {svgIcons.arrowRight("#FF5D52")}
              </a>
            </div>
            <div
              className="flex flex-col items-center justify-start px-4 py-6 text-center md:items-start md:py-0 md:text-left"
              style={{ marginLeft: "30px" }}
            >
              <div className="flex flex-row items-center gap-2">
                {svgIcons.support}
                <div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      lineHeight: "16px",
                      color: "#FFFFFF",
                    }}
                  >
                    Support
                  </div>
                </div>
              </div>
              <div className="flex-grow">
                <p
                  className="pb-8 pt-4"
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "26.1px",
                    color: "#F6F8FC",
                  }}
                >
                  Our customer service team is here for you 24/7/365
                </p>
              </div>
              <a
                href="/"
                style={{ color: "#FF5D52" }}
                className="cursor-pointer flex items-center"
              >
                Learn more
                {svgIcons.arrowRight("#FF5D52")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
