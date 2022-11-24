/**
 * Fonction qui définie la logique pour calculer si l'avion peut décoller ou non.
 *
 * @param data - data est un object
 * @returns object - { windCondition: string, goodToGo: boolean }
 */
export function ResultLogic(data: { capPiste: number; capVent: number; forceVent: number }): {
  windCondition: string;
  goodToGo: boolean;
} {
  let windCondition = "";
  let goodToGo = false;

  // Vent de face
  if (data.capPiste === data.capVent) {
    windCondition = "Head Wind - Vent de face";
    goodToGo = true;
  }

  // Vent arrière, donc check si force du vent est <= 10
  if (data.capPiste - data.capVent > 90) {
    windCondition = "Tail Wind - Vent arrière";

    if (data.forceVent <= 10) {
      goodToGo = true;
    } else {
      goodToGo = false;
    }
  }

  // Vent de travers
  if (data.capPiste - data.capVent <= 90) {
    windCondition = "Cross Wind - Vent de travers";
    goodToGo = true;
  }

  return { windCondition, goodToGo };
}

export const Result = (props: { data: { capPiste: number; capVent: number; forceVent: number } }) => {
  const result = ResultLogic(props.data);

  return (
    <div className="result">
      <h1>Result</h1>
      <h2>{result.windCondition}</h2>
      <h2>{result.goodToGo}</h2>
    </div>
  );
};
