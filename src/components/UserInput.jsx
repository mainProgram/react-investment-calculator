import {useState} from "react";

export default function UserInput({
      initialInvestment,
      setInitialInvestment,
      annualInvestment,
      setAnnualInvestment,
      expectedReturn,
      setExpectedReturn,
      duration,
      setDuration,
  }){

    function handleIIChange(event) {
        setInitialInvestment(event.target.value)
    }
    function handleAIChange(event) {
        setAnnualInvestment(event.target.value)
    }

    function handleERChange(event) {
        setExpectedReturn(event.target.value)
    }
    function handleDChange(event) {
        setDuration(event.target.value)
    }

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input
                    type="number"
                    required
                    value={initialInvestment}
                    onChange={handleIIChange}
                />
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input
                    type="number"
                    required
                    value={annualInvestment}
                    onChange={handleAIChange}
                />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected return</label>
                <input type="number"
                       required
                       value={expectedReturn}
                       onChange={handleERChange}
                />
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input
                    type="number"
                    required
                    value={duration}
                    onChange={handleDChange}
                />
            </p>
        </div>
    </section>
}