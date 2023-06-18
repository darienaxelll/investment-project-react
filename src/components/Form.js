import { useState } from "react";

import CalculateButton from "../UI/buttons/CalculateButton";
import ResetButton from "../UI/buttons/ResetButton";
import CurrentSavingsInput from "./CurrentSavingsInput";
import YearlyContributionInput from "./YearlyContributionInput";
import ExpectedIntrestInput from "./ExpectedIntrestInput";
import InvestmentDurationInput from "./InvestmentDurationInput";

import "./Form.css";

const Form = () => {
  return (
    <form className="form">
      <div className="input-group">
        <CurrentSavingsInput />
        <YearlyContributionInput />
      </div>
      <div className="input-group">
        <ExpectedIntrestInput />
        <InvestmentDurationInput />
      </div>
      <p className="actions">
        <ResetButton>Reset</ResetButton>
        <CalculateButton>Calculate</CalculateButton>
      </p>
    </form>
  );
};

export default Form;
