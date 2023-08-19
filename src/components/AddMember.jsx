import React from "react";

const AddMember = ({
  id,
  age,
  setAge,
  showRemove,
  showAddMember,
  removeMember,
  addMoreMember,
}) => {
  return (
    <div style={styles.card}>
      <div>
        <input
          style={styles.ageInput}
          required
          type="number"
          max={90}
          value={age}
          onChange={(e) => {
            setAge(e.target.value, id);
          }}
          placeholder="Enter age"
        />
      </div>
      <div id="second-division" className="">
        {showRemove && (
          <p style={styles.removeBtn} onClick={() => removeMember(id)}>
            <span>Remove</span>
          </p>
        )}
      </div>
      <div style={styles.btnContainer}>
        {showAddMember && (
          <p style={styles.button} onClick={addMoreMember}>
            <span>Add More Member</span>
          </p>
        )}
      </div>
    </div>
  );
};
const styles = {
  card: {
    padding: "10px",
    backgroundColor: "#1e2946",
    margin: "10px",
    boxShadow: "1px 1px 5px #0d1529",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "column",
    width: "28%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "2%",
  },
  ageInput: {
    padding: "5px",
    fontSize: "15px",
  },
  btnContainer: {},
  button: {
    fontFamily: "sans-serif",
    backgroundColor: "#16a085",
    display: "inline-block",
    padding: "8px 15px",
    borderRadius: "2px",
    fontWeight: "bold",
    fontSize: "13px",
  },
  removeBtn: {
    backgroundColor: "#c0392b",
    display: "inline-block",
    padding: "8px 15px",
    borderRadius: "2px",
    fontWeight: "bold",
    fontSize: "13px",
  },
};
export default AddMember;
