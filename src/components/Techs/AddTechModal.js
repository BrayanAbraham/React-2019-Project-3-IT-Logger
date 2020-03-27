import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the First & Last Name" });
    } else {
      console.log(firstName, lastName);
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

export default AddTechModal;
