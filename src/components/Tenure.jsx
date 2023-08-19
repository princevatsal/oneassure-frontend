import React from "react";

const Tenure = ({ tenure, setTenure }) => {
  return (
    <div>
      <p style={styles.text}> Select Tenure</p>
      <div style={styles.row}>
        <div style={styles.option}>
          <input
            type="radio"
            checked={tenure === 1}
            onChange={() => setTenure(1)}
          />
          <p> 1 Year</p>
        </div>
        <div style={styles.option}>
          <input
            type="radio"
            checked={tenure === 2}
            onChange={() => setTenure(2)}
          />
          <p> 2 Years</p>
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
export default Tenure;
