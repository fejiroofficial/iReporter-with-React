import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Classes from './Report.css';
import Aux from '../../hoc/Aux';

const report = (props) => (
  <Aux>
    <div className={Classes.PacCard}>
      <div>
        <div className={Classes.PacTitle}>
          iReporter form
        </div>
      </div>
      <textarea className={Classes.UserComment} placeholder="What's happening in your area?" cols="30" rows="5"></textarea>
      <div className={Classes.PacContainer}>
        <input className={Classes.PacInput} type="text" placeholder="Enter a location" />
      </div>
      <select id="styledSelect" className={Classes.SelectDrop}>
        <option value="red-flag">Red-flag</option>
        <option value="intervention">Intervention</option>
      </select>
      <div className={Classes.PacFile}>
        <input type="file" id="files" name="files" />
      </div>
      <button className={Classes.ReportBtn}>iReport</button>
      <div class="geo-display" id="geo-dis"></div>
    </div>
    <div className={Classes.Map}>
    </div>
    <div className={Classes.InfowindowContent}>
      <img src="" width="16" height="16" id="place-icon" />
      <span id="place-name" className={Classes.Title}></span><br />
      <span id="place-address"></span>
    </div>
  </Aux>
);

export default report;
