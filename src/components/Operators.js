const Operators = ({ handleClick }) => {
  const operatorButtons = ["+", "-", "/", "*"];
  return (
    <div className="calculator-keys">
      {operatorButtons.map((button) => (
        <button className="operator" onClick={handleClick} key={button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Operators;
