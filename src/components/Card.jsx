import React from "react";

const Card = ({ title, subtitle, icon, description }) => {
  return (
    <div
      className="flex flex-col"
      style={{
        height: "370px",
        width: "265px",
        maxWidth: '317px',
        marginTop: "94px",
        borderRadius: "12px",
        border: "1px solid rgba(253, 253, 253, 1)",
        boxShadow: "10px 10px rgba(55, 84, 170, 0.1)",
      }}
    >
      <div
        style={{
          height: "10px",
          width: "100%",
          borderRadius: "8px 8px 0px 0px",
          backgroundColor: "#7223D8",
        }}
      />
      <div style={{ padding: "30px 0px 21px 32px" }}>{icon}</div>
      <div
        style={{
          height: "65px",
          fontSize: "20px",
          lineHeight: "30px",
          paddingLeft: "32px",
          color: "#7223D8",
          fontWeight: 600,
        }}
      >
        {title}
        <p style={{ color: "#0D0C38" }}>{subtitle}</p>
      </div>
      <div
        style={{
          padding: "12px 41px 56px 32px",
          fontSize: "14px",
          lineHeight: "20.3px",
          fontFamily: 'Plus Jakarta Sans',
          fontWeight: 400,
          color: '#4C4D69'
        }}
      >
        {description}
      </div>
    </div>
  );
};

export default Card;
