import React from "react";
import { object, string } from "prop-types";
import _ from "lodash";

import Button from "../Button";

const ControlBtns = ({ buttons }) =>
  _.map(buttons, ({ btnCls, iconCls, to, label }) => (
    <Button
      key={label}
      className={`button ${btnCls}`}
      to={`/customers/edit/${to}`}
    >
      <span className="icon">
        <i className={iconCls} />
      </span>
      <span>{label}</span>
    </Button>
  ));

const Header = ({ details, url }) => {
  const { name = {} } = details;
  const fullName = _.startCase(`${name.first} ${name.last}`);

  const _buttonsConfig = [
    {
      btnCls: "is-success is-pulled-right m-l-xs",
      iconCls: "fas fa-pencil-alt",
      to: `/customers/edit/${url}`,
      label: "Edit"
    },
    {
      btnCls: "is-link is-pulled-right",
      iconCls: "fas fa-chevron-left",
      to: `/customers`,
      label: "Back"
    }
  ];

  return (
    <React.Fragment>
      <div className="column is-8">
        <h2 className="title">{fullName}</h2>
      </div>
      <div className="column is-4">
        <ControlBtns buttons={_buttonsConfig} />
      </div>
    </React.Fragment>
  );
};

Header.defaultProps = {
  details: {},
  url: ""
};

Header.propTypes = {
  details: object.isRequired,
  url: string.isRequired
};

export default Header;
