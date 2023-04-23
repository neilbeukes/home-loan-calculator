import { useState } from "react";
import Calculator from "./components/calculator";
import Results from "./components/results";
import { useLoanContext } from "./contexts/loanContext";

export default function Home() {
  const {
    term,
    interestPerc,
    loanAmount,
    monthlyPayment,
    setTerm,
    setInterestPerc,
    setLoanAmount,
    setMonthlyPayment,
    totalLoanCost,
    totalInterest,
    currency,
    calculate,
    updateInputs,
    selectedInputs,
    resultsRef,
  } = useLoanContext();

  return (
    <main className="flex flex-col md:h-screen">
      <div className="flex flex-col md:flex-row w-full h-full justify-evenly ">
        <div className="flex flex-col justify-center items-center md:items-start md:justify-start h-full w-full bg-base-100">
          <div className="hero-content text-2xl">
            <svg
              width="32px"
              height="32px"
              viewBox="-1 0 19 19"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-341.000000, -720.000000)"
                  fill="currentColor"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M299.875,576.21213 C299.875,576.76413 299.399,577.00013 298.8125,577.00013 L297.75,577.00013 C297.1635,577.00013 296.6875,576.76413 296.6875,576.21213 L296.6875,575.21213 C296.6875,574.10713 295.736562,573.00013 294.5625,573.00013 L292.4375,573.00013 C291.263438,573.00013 290.3125,574.10713 290.3125,575.21213 L290.3125,576.21213 C290.3125,576.76413 289.8365,577.00013 289.25,577.00013 L288.1875,577.00013 C287.601,577.00013 287.125,576.76413 287.125,576.21213 L287.125,568.14913 C287.125,568.01613 287.181312,567.88913 287.280125,567.79513 L292.738188,562.65913 C293.153625,562.26813 293.826188,562.26813 294.240563,562.65913 L299.719875,567.81513 C299.818688,567.90913 299.875,568.03613 299.875,568.16813 L299.875,576.21213 Z M302,567.62513 C302,567.36013 301.888438,567.10713 301.690812,566.91913 L294.998125,560.58913 C294.169375,559.80613 292.823188,559.80313 291.99125,560.58313 L285.312375,566.84813 C285.112625,567.03613 285,567.29013 285,567.55613 L285,577.21213 C285,578.31713 285.950938,579.00013 287.125,579.00013 L290.3125,579.00013 C291.486562,579.00013 292.4375,578.31713 292.4375,577.21213 L292.4375,576.21213 C292.4375,575.66013 292.9135,575.21213 293.5,575.21213 C294.0865,575.21213 294.5625,575.66013 294.5625,576.21213 L294.5625,577.21213 C294.5625,578.31713 295.513438,579.00013 296.6875,579.00013 L299.875,579.00013 C301.049062,579.00013 302,578.31713 302,577.21213 L302,567.62513 Z"
                      id="home-[#1393]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            Home Loan/Bond calculator
          </div>
          <Calculator
            term={term}
            interestPerc={interestPerc}
            loanAmount={loanAmount}
            monthlyPayment={monthlyPayment}
            setTerm={setTerm}
            setInterestPerc={setInterestPerc}
            setLoanAmount={setLoanAmount}
            setMonthlyPayment={setMonthlyPayment}
            currency={currency}
            calculate={calculate}
            updateInputs={updateInputs}
            selectedInputs={selectedInputs}
          />
        </div>
        <div className="bg-base-content w-full h-auto md:h-full">
          <Results
            netLoan={loanAmount}
            totalInterest={totalInterest}
            totalLoan={totalLoanCost}
            currency={currency}
            term={term}
            monthlyPayment={monthlyPayment}
            interestPerc={interestPerc}
            resultsRef={resultsRef}
          />
        </div>
      </div>
    </main>
  );
}
