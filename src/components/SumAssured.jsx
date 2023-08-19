import React from "react";

const SumAssured = ({ amount, setAmount }) => {
  return (
    <div>
      <p style={styles.text}>Sum Insured</p>
      <div style={styles.row}>
        <div style={styles.option}>
          <input
            type="radio"
            checked={amount === "300000"}
            onChange={() => setAmount("300000")}
          />
          <p> Rs. 300,000</p>
        </div>
        <div style={styles.option}>
          <input
            type="radio"
            checked={amount === "400000"}
            onChange={() => setAmount("400000")}
          />
          <p> Rs. 400,000</p>
        </div>
        <div style={styles.option}>
          <input
            type="radio"
            checked={amount === "500000"}
            onChange={() => setAmount("500000")}
          />
          <p> Rs. 500,000</p>
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
export default SumAssured;
