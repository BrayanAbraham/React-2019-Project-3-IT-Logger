import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { addTechs } from "../../actions/techActions";
import PropTypes from "prop-types";

const AddTechModal = ({ addTechs }) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the First & Last Name" });
    } else {
      addTechs({ firstName, lastName });
      M.toast({ html: `${firstName} ${lastName} was added as a tech` });
      //Clear Fields
      setfirstName("");
      setlastName("");
    }
  };

  return (
    <div className="modal" id="add-tech-modal">
      <div className="modal-content">
        <h4>New Technitian</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setfirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setlastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              First Name
            </label>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect blue waves-light btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTechs: PropTypes.func.isRequired
};

export default connect(null, { addTechs })(AddTechModal);
