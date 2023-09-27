import { useSelector } from "react-redux";
import { LabelsDoughnutChart } from "../comp/LabelsDoughnutChart";
import { IncomeExpensesChart } from "../comp/IncomeExpensesChart";


export function Dashboard() {
    const toys = useSelector(storeState => storeState.toyModule.toys)
    const labelCounts = {}
    toys.forEach(toy => {
        toy.labels.forEach(label => {
            labelCounts[label] = (labelCounts[label] || 0) + 1
        })
    })

    const expensses = [1000, 50000, 15000, 15000, 150000, 200000, 300000, 35000, 40000, 80000, 250000, 300000]
    const expenssesAvg = expensses.reduce((a, b) => a + b, 0) / expensses.length;
    const income = [2000, 380000, 100000, 250000, 250000, 40000, 10000, 60000, 100000, 60000, 600000, 800000]
    const incomesAvg = income.reduce((a, b) => a + b, 0) / income.length;

    return (
        <section className="chart">
            <div className="chart-container">
                <IncomeExpensesChart expensses={expensses} expenssesAvg={expenssesAvg} income={income} incomesAvg={incomesAvg} />
            </div>
            <div className="chart-container">
                <h1>Labels chart:</h1>
                <LabelsDoughnutChart labelCounts={labelCounts} />
            </div>
        </section>
    )
}