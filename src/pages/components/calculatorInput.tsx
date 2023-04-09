interface CalculaterInputProps {
  name: string;
  value: number;
  onChange: (value: number) => void;
  label: string;
  placeholder: string;
  pre?: string;
  post?: string;
}

const CalculatorInput = (props: CalculaterInputProps) => {
  const { name, value, onChange, label, pre, post, placeholder } = props;
  return (
    <div className="form-control w-full mb-4">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <label className="input-group ">
        {!!pre && <span>{pre}</span>}
        <input
          name={name}
          type="number"
          value={value}
          onChange={(e) => onChange(parseFloat(e.target.value))}
          placeholder={placeholder}
          className="input input-bordered w-full"
        />
        {!!post && <span>{post}</span>}
      </label>
    </div>
  );
};

export default CalculatorInput;
