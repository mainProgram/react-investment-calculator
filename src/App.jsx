import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";
import {useState} from "react";

function App() {

    const [initialInvestment, setInitialInvestment] = useState(0);
    const [annualInvestment, setAnnualInvestment] = useState(0);
    const [expectedReturn, setExpectedReturn] = useState(0);
    const [duration, setDuration] = useState(0);

    return (
      <main>
        <Header/>
        <UserInput
            initialInvestment={initialInvestment}
            annualInvestment={annualInvestment}
            expectedReturn={expectedReturn}
            duration={duration}
            setInitialInvestment={setInitialInvestment}
            setAnnualInvestment={setAnnualInvestment}
            setExpectedReturn={setExpectedReturn}
            setDuration={setDuration}
        />
        <ResultTable
            initialInvestment={initialInvestment}
            annualInvestment={annualInvestment}
            expectedReturn={expectedReturn}
            duration={duration}
        />
      </main>
  )
}

export default App
