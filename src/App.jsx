import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import ResultTable from "./components/ResultTable.jsx";
import {useState} from "react";

function App() {

    const [userInput, setUserInput] = useState ({
        initialInvestment: 15000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    })
    const inputIsValid = userInput.duration >= 1

    function handleChange(inputElement, newValue) {
        setUserInput((prevState) => {
            return {
                ...prevState,
                [inputElement]: +newValue
            }
        })
    }

    return (
      <main>
        <Header/>
        <UserInput
            userInput={userInput}
            onInputChange={handleChange}
        />
        {!inputIsValid && (<p className="center"> Please enter a duration greater than 0</p>)}
        {inputIsValid && <ResultTable userInput={userInput}/>}
      </main>
  )
}

export default App
