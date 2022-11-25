import Logic from "../../logic";

export const Result = (props: { data: { capPiste: number; capVent: number; forceVent: number } }) => {
  const logic = new Logic(props.data.capPiste, props.data.capVent, props.data.forceVent);
  const result = logic.computeResult();

  return (
    <div className="result">
      <h1>Result</h1>
      <h2>{result.windCondition}</h2>
      <h2>{result.goodToGo ? "Good to go!, décollage possible" : "Not good, décollage impossible."}</h2>
    </div>
  );
};
