import React from 'react';
import Classes from './AboutUs.css';

const aboutUs = () => (
  <div className={Classes.LearnContent}>
    <div className={Classes.LearnContentHeader}>WHO ARE WE</div>
    <div className={Classes.LearnContentTitle}>ABOUT iREPORTER</div>
    <p>Corruption is a huge bane to Africa’s development. African countries must develop novel and localised
      solutions that
      will curb this menace, hence the birth of iReporter. iReporter enables any/every citizen to bring any form of
      corruption
      to the notice of appropriate authorities and the general public. Users can also report on things that needs
      government
      intervention.
    </p>
    <h3>Communication</h3>
    <p>iReporter provides a platform for reporting corruption and intervention cases. Anyone can safely share what
      they experience
      and observe and can speak out against corruption. Our communication channels include our website, an SMS line,
      social
      media, email or post.</p>
    <h3>Investigation</h3>
    <p>We investigate selected reports of alleged acts of corruption, in particular those cases that have the most
      serious
      impact on our society. We hand our findings over to the relevant authorities to take further action, and we
      monitor
      the progress of each case. We work with mainstream and community media to make sure that corruption is fully
      exposed
      through our investigative work.</p>
  </div>
);

export default aboutUs;
