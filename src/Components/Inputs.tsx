import "../fostyls/Inputs.css";

function Inputs() {
  return (
    <>
      <input type="text" placeholder="Email" />
      <p className="PName">
        Full name <br /> <input type="text" placeholder="Nome completo" />
      </p>

      <br />
      <input type="password" placeholder="Password" />
      <br />
    </>
  );
}

export default Inputs;
