import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLogs } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

const EditLogModal = ({ current, updateLogs }) => {
  const [message, setmessage] = useState("");
  const [attention, setattention] = useState(false);
  const [tech, settech] = useState("");

  useEffect(() => {
    if (current) {
      setmessage(current.message);
      setattention(current.attention);
      settech(current.tech);
    }
  }, [current]);

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date()
      };

      updateLogs(updatedLog);

      M.toast({ html: `Log upadated by ${tech}` });

      //Clear Fields
      setmessage("");
      setattention(false);
      settech("");
    }
  };

  return (
    <div className="modal" id="edit-log-modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setmessage(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => settech(e.target.value)}
            >
              <option value="" disabled>
                Select Technitian
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  name="attention"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setattention(!attention)}
                />
                <span>Need Attention</span>
              </label>
            </p>
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

EditLogModal.propTypes = {
  updateLogs: PropTypes.func.isRequired,
  current: PropTypes.object
};

const mapStateToProps = state => ({
  current: state.log.current
});

export default connect(mapStateToProps, { updateLogs })(EditLogModal);
