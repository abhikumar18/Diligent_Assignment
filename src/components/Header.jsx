import React from 'react';
import { svgIcons } from '../assets/Icons/svgIcons';
import DiligentIcon from '../assets/images/dilligent.png';

const Header = () => {
  return (
    <div className="font-semibold">
      <div
        className="flex justify-around items-center"
        style={{
          backgroundColor: '#F6F8FC',
          height: '51px',
        }}
      >
        <div
          className="flex justify-center bg gap-3 rounded-xl items-center "
          style={{
            backgroundColor: '#F4DDDD',
            padding: '2px, 10px, 2px, 10px',
            width: '466px',
            height: '25px',
            fontSize: '14px',
          }}
        >
          Modern Governance Summit - September 13-15.
          <span style={{ color: '#E00D00' }}>Register Now &gt;</span>
        </div>

        <div className="flex justify-center items-center gap-8">
          <div className="flex items-center gap-3">
            <p className="cursor-pointer">Partner</p>
            <div className="vertical-line"></div>
            <p className="cursor-pointer">Company</p>
            <div className="vertical-line"></div>
            <p className="cursor-pointer">Support</p>
          </div>

          <div className="flex gap-3" style={{ height: '30px' }}>
            <div className="flex items-center gap-2 cursor-pointer">
              {svgIcons.loginIcon} <p style={{ color: '#E00D00' }}>Login</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              {svgIcons.languageIcon}
              ENG
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-around items-center"
        style={{
          backgroundColor: ' #FDFDFD',
          fontSize: '20px',
          height: '93px',
        }}
      >
        <div className="flex items-center gap-7">
          <img src={DiligentIcon} alt="DiligentIcon" width="150px" />
          <p>Solutions</p>
          <p>Products</p>
          <p>Industries</p>
          <p>Resources</p>
        </div>
        <div className="flex gap-5">
          <div
            className="flex justify-center items-center"
            style={{
              backgroundColor: '#F3F3F6',
              borderRadius: '50px',
              height: '40px',
              width: '40px',
            }}
          >
            {svgIcons.searchIcon}
          </div>
          <button
            className="rounded flex items-center justify-center gap-2"
            style={{
              fontSize: '18px',
              height: '50px',
              width: '200px',
              backgroundColor: '#7223D8',
              color: 'white',
              padding: '6px 12px',
            }}
          >
            Request a demo {svgIcons.arrowRight()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
