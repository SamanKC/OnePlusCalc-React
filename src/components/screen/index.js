import NumberFormat from "react-number-format";

const Screen = ({ input, prevState }) => {
  return (
    <div className="screen">
      {input !== "" || input === "0" ? (
        <NumberFormat
          value={input}
          displayType={"text"}
          thousandSeparator={true}
        />
      ) : (
        <NumberFormat
          value={prevState}
          displayType={"text"}
          thousandSeparator={true}
        />
      )}
    </div>
  );
};

export default Screen;
