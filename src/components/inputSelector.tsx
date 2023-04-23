interface InputSelectorProps {
  value: string;
  updateInputs: (value: string) => void;
  selectedInputs: string[];
  label: string;
}

const InputSelector = (props: InputSelectorProps) => {
  const { value, updateInputs, selectedInputs, label } = props;
  return (
    <button
      onClick={() => updateInputs(value)}
      value={value}
      className={`btn ${selectedInputs.includes(value) && "btn-active"}`}
      disabled={!selectedInputs.includes(value) && selectedInputs.length === 3}
    >
      {selectedInputs.includes(value) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-[6px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
      {label}
    </button>
  );
};

export default InputSelector;
