import React from 'react';
import "./title.css";

export function Title(props) {
  return (
      <h2 className="row-header">
        <a className="row-title" >
          <div className="row-header-title">{props.title ? props.title : "Untitled"}</div>
          <div className="row-header-hidden">
            <div className="explore-all">Explore All</div>
            <div className="arrow-right arrow-right-icon"></div>
          </div>
        </a>
      </h2>
  );
}

