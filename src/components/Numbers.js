const Numbers = ({ handleClick }) => {
  const buttons = [
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "C",
    ".",
    "0",
    "=",
  ];
  return (
    <div className="calculator-keys">
      {buttons.map((button) => (
        <button onClick={handleClick} key={button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Numbers;
