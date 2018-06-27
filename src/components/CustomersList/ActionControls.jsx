import React from "react";
import { string, number, func } from "prop-types";
import Button from "../Button";

const ActionControls = ({ id, url, handleRemove }) => (
  <div className="buttons">
    <Button to={`${url}/view/${id}`}>
      <span className="icon has-text-info">
        <i className="fas fa-eye" />
      </span>
    </Button>
    <Button to={`${url}/edit/${id}`}>
      <span className="icon has-text-success">
        <i className="fas fa-pencil-alt" />
      </span>
    </Button>
    <Button
      onClick={() => {
        handleRemove(id);
      }}
    >
      <span className="icon has-text-danger">
        <i className="fas fa-trash-alt" />
      </span>
    </Button>
  </div>
);

ActionControls.propTypes = {
  url: string.isRequired,
  id: number.isRequired,
  handleRemove: func.isRequired
};

export default ActionControls;
