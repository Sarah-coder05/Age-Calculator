import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function AgeCalculator() {
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [age, setAge] = useState('');

    const calculateAge = () => {
        const birthDate = new Date(`${year}-${month}-${date}`);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }

        if (days < 0) {
            const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
            days += lastMonth.getDate();
            months--;
        }
        setAge(`${years} Years ${months} Months ${days} Days`)
    };
    return (
        <div className="container col-md-4 mt-5">
            <div className="card">
                <div className="card-header bg-primary text-white">
                    <h2 className="text-center">Age Calculator</h2>
                </div>
                <div className="card-body text-center">
                    <div className="row mb-3">
                        <div className="col">
                            <label htmlFor="date">Date</label>
                            <input type="text" className="form-control text-center" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        </div>
                        <div className="col">
                            <label htmlFor="date">Month</label>
                            <input type="text" className="form-control text-center" id="month" value={month} onChange={(e) => setMonth(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="date">Year</label>
                            <input type="text" className="form-control text-center" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
                        </div>
                    </div>
                    <button className="btn btn-primay border border-primary" style={{background: '#0d6efd'}} onClick={calculateAge}>Summit</button>
                    {age && <p className="mt-3 text-primary fw-bold text-center">Your Age is {age}</p>}
                </div>
            </div>
        </div>
    )
}
export default AgeCalculator;