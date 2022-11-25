export const TextField = (props: { label: string; data: number; setData: Function; min?: number; max?: number }) => {
  return (
    <div className="textField">
      <label htmlFor={props.label}>{props.label}</label>
      <input
        type="number"
        id={props.label}
        placeholder="enter runway heading"
        value={props.data}
        onChange={(e) => props.setData(e.target.value)}
        min={props.min}
        max={props.max}
      />
    </div>
  );
};
