import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import election from "./contracts/Election.json";
import { isEditable } from "@testing-library/user-event/dist/utils";
import { ethers } from "ethers";

function App() {
  const [result, setResult] = useState(0);
  const [candidateId, setCandidateId] = useState(0);
  const [votersAddres, setVotersAddress] = useState("");
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  // const [connectedWallet, setConnectedWallet] = useState("");
  const [userAddress, setUserAddress] = useState("");

  //web3 stuffs

  //web 3 variables
  const contractAddress = "0xfe009486E954c32D867c29a60663a43F32A4C3AE";
  const contractAbi = election.abi;

  //web3 functions
  const checkWalletConnection = async () => {
    // setWalletConnected(false);
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];
        setIsWalletConnected(true);
        setUserAddress(account);
        //  setAddress(account);
      } else {
        alert("ethereum client not detected");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkWalletConnection();
  }, [isWalletConnected]);

  const addCandidate = async (candidateId) => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const Election = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      await Election.addCandidate(candidateId);
      console.log("successfully added candidate");
    } catch (e) {
      console.log(e);
    }
  };

  const getCandidateCounts = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const Election = new ethers.Contract(
        contractAddress,
        contractAbi,
        signer
      );
      let output = await Election.getCandidateCount();
      setResult(output.toString());
      console.log(`candidate count is ${output.toString()}`);
    } catch (e) {
      console.log(e);
    }
  };
  //web2 functions
  const handleAddCandidate = (e) => {
    addCandidate(candidateId);
  };

  const handleAuthorize = (e) => {};

  const handleVote = (e) => {};

  const handleGetCandidateCount = (e) => {
    getCandidateCounts();
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
      {isWalletConnected ? (
        <span>{`connected wallet address is ${userAddress}`}</span>
      ) : (
        "not connected"
      )}
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
