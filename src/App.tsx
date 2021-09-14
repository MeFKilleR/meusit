import React from "react";
import Cab from "./Components/Cab";
import "./fostyls/App.css";

function App() {
  return (
    <div className="App">
      <Cab />
      <main>
        <div className="MsgTex">
          <h2>
          Manage your freelance business with us!
          </h2>
          <h3>Takes less than 10 minutes to fill out all the information needed to
            register your business.</h3>
        </div>
        <div className="Impts">
          <input type="text" placeholder="Email" />
          <p className="PName">
            Full name <br /> <input type="text" placeholder="Nome completo" />
          </p>

          <br />
          <input type="password" placeholder="Password.." />
          <br />
          <button>Get started</button>
          <p>
            By signing up you are agreeing to our
            <br />
            <strong>
              <a href="#">Terms and Conditions</a>
            </strong>
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
