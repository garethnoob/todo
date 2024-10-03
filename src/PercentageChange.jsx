import { useState } from "react";


function PercentageChange() {
    const [forecast, setForecast] = useState(null);
    const [order, setOrder] = useState(null);



    const result = (order - forecast) / forecast * 100;

    return (
        <div>
            <h1>Percentage Change</h1>
            <label htmlFor="forecast">Forecast</label>
            <input type="number" value={forecast} onChange={(e) => setForecast(e.target.value)} id="forecast"/>
            <label htmlFor="order">Order</label>
            <input type="number" value={order} onChange={(e) => setOrder(e.target.value)} id="order"/>
            <p>{result? result.toFixed(2):""}%</p>
        </div>
    )

}

export default PercentageChange;