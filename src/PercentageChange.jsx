import { useState } from "react";
import './card.css';


function PercentageChange() {
    const [forecast, setForecast] = useState(null);
    const [order, setOrder] = useState(null);



    const result = (order - forecast) / forecast * 100;

    return (
        <div className="card">
            <h1>Percentage Change</h1>
            <label htmlFor="forecast">Forecast</label>
            <input className="input" type="number" min={0} value={forecast} onChange={(e) => setForecast(e.target.value)} id="forecast"/>
            <label htmlFor="order">Order</label>
            <input className="input" type="number" min={0} value={order} onChange={(e) => setOrder(e.target.value)} id="order"/>
            <p>{result? result.toFixed(2):""}%</p>
        </div>
    )

}

export default PercentageChange;