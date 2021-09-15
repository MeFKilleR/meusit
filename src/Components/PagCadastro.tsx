import Cab from "./Cab";
import TextInfo from "./TextInfo";
import Inputs from "./Inputs";
import Button from "./Button";

function PagCadastro() {
  return (
    <div className="PagCadastro">
      <Cab />
      <main>
        <TextInfo />
        <div className="Impts">
          <Inputs />
          <Button Name="GetStarted"/>
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
export default PagCadastro;
