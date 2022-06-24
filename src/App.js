import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);
  const [candidateId, setCandidateId] = useState(0);
  const [votersAddres, setVotersAddress] = useState("");

  //web2 functions

  const handleAddCandidate = (e) => {};

  const handleAuthorize = (e) => {};

  const handleVote = (e) => {};

  const handleGetCandidateCount = (e) => {
    setResult(100);
  };

  const handleGetVotersWeight = (e) => {};

  const handleChangeVotersAddress = (e) => {
    setVotersAddress(e.target.value);
  };

  const handleChangeCandidateId = (e) => {
    setCandidateId(e.target.value);
  };

  return (
    <div className="App-header">
      <h1>{result}</h1>
      <section>
        <span>Add Candidate</span>
        <br />
        <input
          type={"number"}
          placeholder="candidateId"
          onChange={(e) => handleChangeCandidateId(e)}
        ></input>
        <br></br>
        <button
          style={{ backgroundColor: "green", borderColor: "green" }}
          onClick={(e) => handleAddCandidate(e)}
        >
          Add Candidate
        </button>
      </section>
      <section style={{ marginTop: "30px" }}>
        <span>Authorize</span>
        <br />
        <input
          type={"string"}
          placeholder="voter's address"
          onChange={(e) => handleChangeVotersAddress(e)}
        ></input>
        <br></br>
        <button
          style={{ backgroundColor: "green", borderColor: "green" }}
          onClick={(e) => handleAuthorize(e)}
        >
          Authorize
        </button>
      </section>

      <section style={{ marginTop: "30px" }}>
        <span>Vote</span>
        <br />
        <input
          type={"number"}
          placeholder="candidates id"
          onChange={(e) => handleChangeCandidateId(e)}
        ></input>
        <br></br>
        <button
          style={{ backgroundColor: "green", borderColor: "green" }}
          onClick={(e) => handleVote(e)}
        >
          vote
        </button>
      </section>

      <section style={{ marginTop: "30px" }}>
        <br></br>
        <button
          style={{ backgroundColor: "green", borderColor: "green" }}
          onClick={(e) => handleGetVotersWeight(e)}
        >
          getVotersWeight;
        </button>
        <button
          style={{
            backgroundColor: "green",
            borderColor: "green",
            marginLeft: "30px",
          }}
          onClick={(e) => handleGetCandidateCount(e)}
        >
          getCandidateCount;
        </button>
      </section>
    </div>
  );
}

export default App;
