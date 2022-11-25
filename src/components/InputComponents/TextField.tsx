const error = (props: any) => {
  if (props.max != undefined && props.min != undefined) {
    props.error.setError(true);
    if (props.data != null && (props.data > props.max || props.data < props.min)) props.error.setError(false);
    return props.data != null && (props.data > props.max || props.data < props.min);
  }
  return false;
};

export const TextField = (props: {
  error: { error: boolean; setError: Function };
  label: string;
  data: number | null;
  setData: Function;
  min?: number;
  max?: number;
}) => {
  return (
    <div className="textField">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="number"
        id={props.label.trim()}
        placeholder={`Entrer ${props.label.toLowerCase()}`}
        value={props.data || ""}
        onChange={(e) => props.setData(e.target.value)}
        min={props.min}
        max={props.max}
        className={error(props) ? "error" : ""}
      />
    </div>
  );
};
