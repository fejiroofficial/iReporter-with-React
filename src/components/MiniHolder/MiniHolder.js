import React from 'react';
import Classes from './MiniHolder.css';

const MiniHolder = (props) => (
    <div className={Classes.MiniHolder}>
        <div className={Classes.MiniHolderHeader}>{props.header}</div>
        <div className={Classes.MiniHolderContent}>{props.children}</div>
    </div>
)

export default MiniHolder;
