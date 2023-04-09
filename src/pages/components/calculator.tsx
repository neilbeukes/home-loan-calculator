import InputSelector from "./inputSelector";
import CalculatorInput from "./calculatorInput";

interface CalculatorProps {
  term: number;
  interestPerc: number;
  loanAmount: number;
  monthlyPayment: number;
  setTerm: (term: number) => void;
  setInterestPerc: (interest: number) => void;
  setLoanAmount: (loanAmount: number) => void;
  setMonthlyPayment: (monthlyPayment: number) => void;
  currency: string;
  calculate: () => void;
  updateInputs: (input: string) => void;
  selectedInputs: string[];
}

const Calculator = (props: CalculatorProps): JSX.Element => {
  const {
    term,
    interestPerc,
    loanAmount,
    monthlyPayment,
    setTerm,
    setInterestPerc,
    setLoanAmount,
    setMonthlyPayment,
    currency,
    calculate,
    updateInputs,
    selectedInputs,
  } = props;

  const renderInput = (input: string, key: number) => {
    switch (input) {
      case "term":
        return (
          <CalculatorInput
            key={key}
            label="Term"
            name="term"
            placeholder="12"
            post={"Months"}
            value={term}
            onChange={setTerm}
          />
        );
      case "interestPerc":
        return (
          <CalculatorInput
            key={key}
            placeholder="12"
            post={"%"}
            label="Interest Rate"
            name="interestPerc"
            value={interestPerc}
            onChange={setInterestPerc}
          />
        );
      case "loanAmount":
        return (
          <CalculatorInput
            key={key}
            placeholder="10000"
            pre={currency}
            label="Loan Amount"
            name="loanAmount"
            value={loanAmount}
            onChange={setLoanAmount}
          />
        );
      case "monthlyPayment":
        return (
          <CalculatorInput
            key={key}
            placeholder="200"
            pre={currency}
            label="Monthly Payment"
            name="monthlyPayment"
            value={monthlyPayment}
            onChange={setMonthlyPayment}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-[24px] w-full h-full">
      <div className="flex flex-col justify-center items-center max-w-[500px] m-auto">
        <div className="alert alert-info shadow-lg mb-12">
          <div className="flex flex-col items-start">
            <div className="card-title">How to use?</div>
            <div>1. Select 3 fields to fill in</div>
            <div>2. Fill in the values</div>
            <div>3. Click calculate</div>
          </div>
        </div>

        <div className="flex flex-row gap-2 flex-wrap mb-6">
          <InputSelector
            label="Term"
            value="term"
            updateInputs={updateInputs}
            selectedInputs={selectedInputs}
            key={"term_selector"}
          />

          <InputSelector
            label="Interest Rate"
            value="interestPerc"
            updateInputs={updateInputs}
            selectedInputs={selectedInputs}
            key={"interestPerc_selector"}
          />

          <InputSelector
            label="Loan/Bond Amount"
            value="loanAmount"
            updateInputs={updateInputs}
            selectedInputs={selectedInputs}
            key={"loanAmount_selector"}
          />
          <InputSelector
            label="Monthly Payment"
            value="monthlyPayment"
            updateInputs={updateInputs}
            selectedInputs={selectedInputs}
            key={"monthlyPayment_selector"}
          />
        </div>

        <div className="min-h-[200px] flex flex-col justify-center items-center">
          {selectedInputs.map((input, index) => renderInput(input, index))}
        </div>

        {selectedInputs?.length === 3 && (
          <button className="btn mt-8" onClick={calculate}>
            Calculate
          </button>
        )}
      </div>
    </div>
  );
};

export default Calculator;
