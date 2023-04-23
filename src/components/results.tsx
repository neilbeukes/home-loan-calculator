import ResultsChart from "./resultsChart";

interface ResultsProps {
  totalInterest: number;
  totalLoan: number;
  netLoan: number;
  currency: string;
  term: number;
  interestPerc: string;
  monthlyPayment: number;
  resultsRef: React.RefObject<HTMLDivElement> | null;
}

const Results = (props: ResultsProps) => {
  const {
    totalInterest,
    totalLoan,
    netLoan,
    currency,
    term,
    interestPerc,
    monthlyPayment,
    resultsRef,
  } = props;
  return (
    <div className="p-[24px]">
      <div className="flex flex-col w-full">
        <div className="grid card bg-base-300 rounded-box p-4">
          <label className="block text-neutral-content  font-bold mb-2 text-xl underline">
            Basic details:
          </label>
          <label className="text-neutral-content font-bold mb-2 flex flex-row justify-between">
            {`Amount borrowed: `} <span>{`${currency} ${netLoan}`}</span>
          </label>
          <label className=" text-neutral-content  font-bold mb-2 flex flex-row justify-between">
            {`Term:  `}{" "}
            <span>{`
        ${term} months/${(term / 12).toFixed(1)} years`}</span>
          </label>
          <label className=" text-neutral-content  font-bold mb-2 flex flex-row justify-between">
            {`Interest Rate: `}{" "}
            <span>{`
        ${interestPerc}%`}</span>
          </label>
        </div>
        <div className="grid card bg-base-300 rounded-box p-4 mt-4">
          <label className=" flex flex-row justify-between text-neutral-content font-bold text-xl">
            {`Monthly payment: `}{" "}
            <span>{` ${currency}
        ${monthlyPayment.toFixed(2)}`}</span>
          </label>
        </div>
        <div className="grid card bg-base-300 rounded-box p-4 mt-4">
          <label className="block text-neutral-content  font-bold mb-2 text-xl underline">
            Loan breakdown:
          </label>
          <label className=" flex flex-row justify-between text-neutral-content font-bold mb-2">
            {`Interest payable: `}{" "}
            <span className="text-[#EA5234]">{` ${currency}
        ${totalInterest.toFixed(2)}`}</span>
          </label>
          <label className="text-neutral-content font-bold mb-2 flex flex-row justify-between">
            {`Amount borrowed: `} <span>{`${currency} ${netLoan}`}</span>
          </label>
          <div className="flex flex-row justify-between">
            <span></span>
            <div className="border-t-[1px] border-solid h-1 w-[90px] border-neutral-content"></div>
          </div>
          <label className=" flex flex-row justify-between  text-neutral-content font-bold mb-2">
            {`Total amount payable `}{" "}
            <span>{` ${currency}
        ${totalLoan.toFixed(2)}`}</span>
          </label>
        </div>
      </div>
      <div className="grid card bg-base-300 rounded-box p-4 mt-4">
        <ResultsChart
          ref={resultsRef}
          totalInterest={totalInterest}
          totalLoan={totalLoan}
          netLoan={netLoan}
        />
      </div>
    </div>
  );
};

export default Results;
