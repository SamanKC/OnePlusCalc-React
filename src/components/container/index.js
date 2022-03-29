import Button from "../button";
import Screen from "../screen";
import "../button/Button.css";
import "./Container.css";
import "../screen/Screen.css";

const FunctionProvider = ({ input, buttons, prevState }) => {
  const buttonsArray = buttons.map((button) => {
    return (
      <Button name={button.name} click={button.click} button={button.button} />
    );
  });

  return (
    <div className="container">
      <div className="top">
        <h2>Calculator</h2>
        <Screen input={input} prevState={prevState} />
      </div>
      <div className="wrapper">{buttonsArray}</div>
    </div>
  );
};

export default FunctionProvider;
