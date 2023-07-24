import "./Result.css";

const Result = ({ time, bomb }) => {
  return (
    <div className="result">
      {bomb ? (
        <>Vous avez échoué !</>
      ) : (
        <div>
          vous avez réusssi en{" "}
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
          <span className="mili-sec">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Result;
