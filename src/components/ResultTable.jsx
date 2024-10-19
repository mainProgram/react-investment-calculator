import {calculateInvestmentResults} from "../util/investment.js";
import {useState} from "react";

export default function ResultTable({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
}){
    const resultObject = {
        initialInvestment: initialInvestment,
        annualInvestment: annualInvestment,
        expectedReturn: expectedReturn,
        duration: duration,
    }

    const r = calculateInvestmentResults(resultObject)
    const [results, setResults] = useState([...r]);
    console.log(results)

    return (
        <table id="result" className="center">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((result, pos) =>
                    <tr key={pos}>
                        <td>{result.year}</td>
                        <td>{result.interest}</td>
                        <td>{result.valueEndOfYear}</td>
                        <td>{result.annualInvestment}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}