import React from "react";

const City = ({ tier, setTier }) => {
  return (
    <div>
      <p style={styles.text}>Select City Tier</p>
      <div style={styles.row}>
        <div style={styles.option}>
          <input
            type="radio"
            checked={tier === 1}
            onChange={() => setTier(1)}
          />
          <p> Tier-1</p>
        </div>
        <div style={styles.option}>
          <input
            type="radio"
            checked={tier === 2}
            onChange={() => setTier(2)}
          />
          <p> Tier-2</p>
        </div>
      </div>
    </div>
  );
};
const styles = {
  row: {
    display: "flex",
  },
  text: {
    color: "#6c7890",
    marginBottom: 0,
  },
  option: {
    display: "flex",
    marginRight: "1%",
    alignItems: "center",
  },
};
export default City;
