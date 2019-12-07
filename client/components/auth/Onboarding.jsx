/* eslint-disable react/jsx-indent */
import React from 'react';


function Onboarding() {
  return (
    <div className="wrapper card flex-column">
      <div className="grid-col-2 onboardingCard">
        <div>
          <h5>Are you on campus currently?</h5>
          <h5>Do you wish to recieve emails from AltCampus?</h5>
        </div>
        <div className="grid-col-2">
            <div className="flex-end">
                <p>Yes</p>
                <input type="radio" />
            </div>
            <div className="flex-end">
                <p>No</p>
                <input type="radio" />
            </div>
            <div className="flex-end">
                <p>Yes</p>
                <input type="radio" />
            </div>
            <div className="flex-end">
                <p>No</p>
                <input type="radio" />
            </div>
        </div>
      </div>
      <div className="flex-end">
      <button type="submit" className="button">Register</button>
      </div>
    </div>
  );
}


export default Onboarding;
