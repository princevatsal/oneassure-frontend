import "./App.css";
import { useState } from "react";
import AddMember from "./components/AddMember";
import SumAssured from "./components/SumAssured";
import City from "./components/City";
import Tenure from "./components/Tenure";

function App() {
  const [memberList, setMemberList] = useState([{ age: "", id: Date.now() }]);
  const [calculatedPremium, setCalculatedPremium] = useState(0);
  const [amount, setAmount] = useState("300000");
  const [tier, setTier] = useState(1);
  const [tenure, setTenure] = useState(1);
  const [loading, setLoading] = useState(false);
  const removeMember = (id) => {
    setMemberList((old) => old.filter((item) => item.id !== id));
  };
  const addMoreMember = () => {
    setMemberList((old) => [...old, { age: null, id: Date.now() }]);
  };
  const setAge = (age, id) =>
    setMemberList((old) =>
      old.map((item) => (item.id === id ? { ...item, age: age } : item))
    );

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const body = {
        age_list: memberList.map((mem) => mem.age),
        sum_insured: amount,
        city_tier: tier,
        tenure: tenure,
      };
      console.log(body);
      // send it to the server as a post request with content type as application/json
      const response = await fetch(
        "https://backend-616g.onrender.com/calculate_premium",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        console.log(data);
        setCalculatedPremium(data.calculated_premium);
      }
      setLoading(false);
    } catch {
      setLoading(false);
      console.log("some error occured during requesting");
    }
  };
  return (
    <form style={styles.app} onSubmit={handleSubmit}>
      <div style={styles.hero}>Premium Calculator</div>
      <div style={styles.heroTab}>
        <button style={styles.calculate} type="submit">
          <p style={styles.calTxt}>{loading ? "Loading.." : "Calculate"}</p>
        </button>
        <p style={styles.premium}>₹ {calculatedPremium}</p>
      </div>
      <p style={styles.addLabel}>Add Members</p>
      <div style={styles.cards}>
        {memberList.map((member, index) => (
          <AddMember
            key={index}
            id={member.id}
            age={member.age}
            setAge={setAge}
            removeMember={removeMember}
            addMoreMember={addMoreMember}
            showAddMember={index === memberList.length - 1}
            showRemove={memberList.length > 1}
          />
        ))}
      </div>
      <div style={styles.container}>
        <SumAssured amount={amount} setAmount={setAmount} />
        <City tier={tier} setTier={setTier} />
        <Tenure tenure={tenure} setTenure={setTenure} />
      </div>
    </form>
  );
}

const styles = {
  app: {
    display: "flex",
    flexDirection: "column",
  },
  hero: {
    textAlign: "center",
    fontSize: "20px",
    marginTop: "1%",
  },
  premium: {
    textAlign: "center",
    fontSize: "30px",
    padding: "10px",
    border: "1px solid #fff",
    borderRadius: "3px",
    display: "inlineblock",
    alignSelf: "center",
    justifySelf: "center",
    fontWeight: "bold",
    letterSpacing: "1.5px",
  },
  addLabel: {
    fontFamily: "sans-serif",
    marginLeft: "2%",
    textAlign: "center",
    fontSize: "20px",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-around",
  },
  heroTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  calculate: {
    fontFamily: "sans-serif",
    backgroundColor: "#16a085",
    display: "flex",
    padding: "8px 15px",
    borderRadius: "3px",
    fontWeight: "bold",
    fontSize: "13px",
    alignItems: "center",
    justifyContent: "center",
    height: "35px",
    marginRight: "2%",
    border: 0,
  },
  calTxt: {
    fontSize: "18px",
    fontWeight: "400",
    color: "#fff",
  },
  container: {
    backgroundColor: "#1e2946",
    padding: ".25% 2%",
    margin: "2%",
    borderRadius: "5px",
  },
};
export default App;
