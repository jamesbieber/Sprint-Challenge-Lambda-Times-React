import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return (
            <Tab
              tab={tab}
              selectedTab={props.selectedTab}
              selectTabHandler={props.selectTabHandler}
            />
          );
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      tabs: PropTypes.array,
      selectedTab: PropTypes.func,
      selectTabHander: PropTypes.func
    })
  )
};
export default Tabs;
