import React, {
  Children,
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { NPER, PMT } from "../utils/calculations";

interface LoanContextType {
  term: number;
  setTerm: React.Dispatch<React.SetStateAction<number>>;
  interestPerc: string;
  setInterestPerc: React.Dispatch<React.SetStateAction<string>>;
  loanAmount: number;
  setLoanAmount: React.Dispatch<React.SetStateAction<number>>;
  monthlyPayment: number;
  setMonthlyPayment: React.Dispatch<React.SetStateAction<number>>;
  totalLoanCost: number;
  setTotalLoanCost: React.Dispatch<React.SetStateAction<number>>;
  totalInterest: number;
  setTotalInterest: React.Dispatch<React.SetStateAction<number>>;
  currency: string;
  calculate: () => void;
  selectedInputs: string[];
  updateInputs: (input: string) => void;
  resultsRef: any;
}

const LoanContext = createContext<LoanContextType>({
  term: 0,
  setTerm: () => {},
  interestPerc: "0",
  setInterestPerc: () => {},
  loanAmount: 0,
  setLoanAmount: () => {},
  monthlyPayment: 0,
  setMonthlyPayment: () => {},
  totalLoanCost: 0,
  setTotalLoanCost: () => {},
  totalInterest: 0,
  setTotalInterest: () => {},
  currency: "R",
  calculate: () => {},
  selectedInputs: [],
  updateInputs: () => {},
  resultsRef: null,
});

export const useLoanContext = () => useContext(LoanContext);

const LoanProvider: React.FC = ({ children }: any) => {
  const [term, setTerm] = useState<number>(0);
  const [interestPerc, setInterestPerc] = useState<string>("0");
  const [loanAmount, setLoanAmount] = useState<number>(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
  const [totalLoanCost, setTotalLoanCost] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [currency, setCurrency] = useState<string>("R");
  const [selectedInputs, setSelectedInputs] = useState<string[]>([]);
  const resultsRef = useRef<HTMLDivElement>(null);

  const calculateTotalLoanCost = () => {
    // Add present value
    const monthlyRePayment = -PMT(
      parseFloat(interestPerc) / 100 / 12,
      term,
      loanAmount
    );
    setTotalLoanCost(monthlyRePayment * term);
    setMonthlyPayment(
      Number(Math.round(parseFloat(monthlyRePayment + "e" + 2)) + "e-" + 2)
    );
    setTotalInterest(monthlyRePayment * term - loanAmount);
  };

  const calculateTotalPeriodForLoanRepayment = () => {
    // Add present value
    const term = NPER(
      parseFloat(interestPerc) / 100 / 12,
      -monthlyPayment,
      loanAmount
    );
    setTerm(Math.round(term));
  };

  const updateInputs = (input: string) => {
    if (selectedInputs.includes(input)) {
      const index = selectedInputs.indexOf(input);
      if (index > -1) {
        selectedInputs.splice(index, 1);
      }
    } else {
      selectedInputs.push(input);
    }
    setSelectedInputs([...selectedInputs]);
  };

  const calculate = useCallback(() => {
    if (monthlyPayment && interestPerc && loanAmount) {
      calculateTotalPeriodForLoanRepayment();
    }
    if (term && interestPerc && loanAmount) {
      calculateTotalLoanCost();
    }
    if (resultsRef?.current) {
      resultsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [term, interestPerc, loanAmount, monthlyPayment]);

  const value: LoanContextType = {
    term,
    setTerm,
    interestPerc,
    setInterestPerc,
    loanAmount,
    setLoanAmount,
    monthlyPayment,
    setMonthlyPayment,
    totalLoanCost,
    setTotalLoanCost,
    totalInterest,
    setTotalInterest,
    currency,
    calculate,
    selectedInputs,
    updateInputs,
    resultsRef,
  };

  return <LoanContext.Provider value={value}>{children}</LoanContext.Provider>;
};

export default LoanProvider;
