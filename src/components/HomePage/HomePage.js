import React from 'react';
import HeroBanner from '../HeroBanner/HeroBanner';
import MiniHolder from '../MiniHolder/MiniHolder';
import Classes from './HomePage.css';
import Aux from '../../hoc/Aux';

const homePage = () => (
  <Aux>
    <HeroBanner />
    <MiniHolder header='OUR WORK IS IMPORTANT'>
      <div className={Classes.Box}>
        <div className={Classes.InfoBox}>

          <div className={Classes.InfoBoxMini}>
            <div className={Classes.InfoBoxMiniImg}></div>
            <div className={Classes.InfoBoxMiniTitle}>REPORT</div>
            <div className={Classes.InfoBoxMiniText}>
              <p>We provide a platform for reporting corruption and intervention cases to us.</p>
            </div>
          </div>

          <div className={Classes.InfoBoxMini}>
            <div className={Classes.InfoBoxMiniImgTwo}></div>
            <div className={Classes.InfoBoxMiniTitle}>INVESTIGATE</div>
            <div className={Classes.InfoBoxMiniText}>
              <p>We investigate selected reports of alleged red-flag and intervention cases that have an impact on society.</p>
            </div>
          </div>

          <div className={Classes.InfoBoxMini}>
            <div className={Classes.InfoBoxMiniImgThree}></div>
            <div className={Classes.InfoBoxMiniTitle}>EXPOSE</div>
            <div className={Classes.InfoBoxMiniText}>
              <p>We work with mainstream media and security agencies to ensure corruption is fully exposed.</p>
            </div>
          </div>

        </div>
      </div>
    </MiniHolder>

    <MiniHolder header='WE COVER AFRICA'>
      <div className={Classes.HomePageMapDiv}></div>
    </MiniHolder>

    <MiniHolder header='RED-FLAGS'>
      <div className={Classes.IncidentContainer}>
          <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniOne}`}></div>
          <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniTwo}`}></div>
          <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniThree}`}></div>
          <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniFour}`}></div>
      </div>
    </MiniHolder>

    <MiniHolder header='INTERVENTIONS'>
      <div className={Classes.IncidentContainer}>
        <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniFive}`}></div>
        <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniSix}`}></div>
        <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniSeven}`}></div>
        <div className={`${Classes.IncidentMini} ${Classes.IncidentMiniEight}`}></div>
      </div>
    </MiniHolder>

    <MiniHolder header='OUR PARTNERS'>
      <div className={Classes.IncidentContainer}>
        <div className={`${Classes.PartnersMini} ${Classes.PartnersMiniOne}`}></div>
        <div className={`${Classes.PartnersMini} ${Classes.PartnersMiniTwo}`}></div>
        <div className={`${Classes.PartnersMini} ${Classes.PartnersMiniThree}`}></div>
        <div className={`${Classes.PartnersMini} ${Classes.PartnersMiniFour}`}></div>
      </div>
    </MiniHolder>
  </Aux>
)

export default homePage;