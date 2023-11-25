import React from 'react';
import { svgIcons } from '../assets/Icons/svgIcons';
import Acl1 from '../assets/images/acl1.png';
import Acl2 from '../assets/images/acl2.png';
import Acl3 from '../assets/images/acl3.png';

const DataDriven = () => {
  return (
    <div
      className="flex justify-center items-center font-semibold"
      style={{ backgroundColor: '#FEFEFE', gap: '55px' }}
    >
      <div style={{ width: '500px' }}>
        <p
          className="flex items-center gap-2"
          style={{ color: '#526580', fontSize: '14px' }}
        >
          {svgIcons.iamIcon} INTERNAL AUDIT MANAGEMENT
        </p>
        <p style={{ fontSize: '48px' }}>
          Data-Driven{' '}
          <p>
            with <span style={{ color: '#E00D00' }}>ACL Analytics</span>
          </p>
        </p>
        <p
          className="font-normal mt-4"
          style={{ fontSize: '18px', color: '#282E37' }}
        >
          Deliver a strategic advantage that helps your organization stay ahead
          of emerging risks, providing the Board and the C-Suite with visibility
          for informed, risk-based decision making. 
        </p>
        <div className="flex gap-10 mt-9">
          <button
            className="rounded-sm flex gap-2 items-center justify-center"
            style={{
              backgroundColor: '#E00D00',
              padding: '12px 16px 12px 24px',
              color: 'white',
            }}
          >
            Talk to sales {svgIcons.arrowRight()}
          </button>

          <p
            className="flex justify-center items-center"
            style={{ color: '#E00D00' }}
          >
            Learn more {svgIcons.arrowRight('#E00D00')}
          </p>
        </div>
      </div>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '726px',
          height: '411px',
          position: 'relative',
        }}
      >
        <img
          src={Acl1}
          alt=""
          style={{ position: 'absolute', width: '576px' }}
        />
        <img
          src={Acl2}
          alt=""
          style={{
            position: 'absolute',
            width: '500px',
            left: '191px',
            top: '175px',
          }}
        />
        <img
          src={Acl3}
          alt=""
          style={{
            position: 'absolute',
            width: '350px',
            left: '89px',
            top: '290px',
          }}
        />
      </div>
    </div>
  );
};

export default DataDriven;
