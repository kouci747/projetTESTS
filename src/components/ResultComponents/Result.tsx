import Logic from "../../logic";

export const Result = (props: {
  error: boolean;
  data: { capPiste: number | null; capVent: number | null; forceVent: number | null };
}) => {
  let logic = null;
  if (props.data.capPiste && props.data.capVent && props.data.forceVent) {
    logic = new Logic(props.data.capPiste, props.data.capVent, props.data.forceVent).computeResult();
  }

  return (
    <div className="result">
      <h1>Result</h1>
      {logic ? (
        props.error ? (
          <>
            <h2>{logic.windCondition}</h2>
            <h2>{logic.goodToGo ? "Good to go, décollage possible" : "Not good, décollage impossible."}</h2>
          </>
        ) : (
          <p>Erreur dans la saisie de données</p>
        )
      ) : (
        <p>Aucune données saisie</p>
      )}
    </div>
  );
};
