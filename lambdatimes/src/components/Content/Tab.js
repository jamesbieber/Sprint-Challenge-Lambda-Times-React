import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  // onClick={props.selectTabHandler(props.tab)}
  function className(tab, selectedTab) {
    if (tab === selectedTab) {
      return "tab active-tab";
    } else {
      return "tab";
    }
  }

  return (
    <div
      className={className(props.tab, props.selectedTab)}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
      /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      tab: PropTypes.string,
      selectedTab: PropTypes.func,
      selectTabHandler: PropTypes.func
    })
  )
};

export default Tab;
