import Paper from '@mui/material/Paper';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const Journal = ({setMsg, msg}) => {
    const [stats, setStats] = useState([]);
    const [sapor, setSapor] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [totals, setTotals] = useState({
        total_init: 0,total_entree: 0,total_sort: 0,
        total_rest: 0,total_ben: 0,total_tot: 0
    });

    const chartRef = useRef(null);
    let chartInstance = useRef(null);

    const generateJournal = () => {

        axios.get('http://localhost/daily_stat.php')
            .then((resp) => {
                if (resp.data.error && resp.data.code === '23000') {
                    setMsg('Vous avez déjà généré le journal.')
                }else{
                    setMsg('Une erreur est survenue')
                }
            })
            .catch((err) => setMsg(err.message));
    };

    const fetchDataByDate = (date) => {
        axios.get(`http://localhost/fetch/daily_stat.php?date=${date}`)
            .then((resp) => setStats(resp.data))
            .catch((err) => setMsgude(err.message));
    };
		useEffect(() => {
		    if (stats.length === 0) {
		        setTotals({
		            total_init: 0, total_entree: 0, total_sort: 0,
		            total_rest: 0, total_ben: 0, total_tot: 0
		        });

		        // Destroy previous chart if exists
		        if (chartInstance.current) {
		            chartInstance.current.destroy();
		        }

		        return;
		    }

		    const newTotals = stats.reduce((acc, item) => {
		        const initValue = item.initial * item.pau;
		        const entreeValue = item.plus * item.pau;
		        const sortieValue = item.minus * item.price;
		        const restantValue = (item.initial + item.plus - item.minus) * item.pau;
		        const beneficeValue = (item.minus * item.price) - (item.minus * item.pau);

		        return {
		            total_init: acc.total_init + initValue,
		            total_entree: acc.total_entree + entreeValue,
		            total_sort: acc.total_sort + sortieValue,
		            total_rest: acc.total_rest + restantValue,
		            total_ben: acc.total_ben + beneficeValue,
		        };
		    }, { total_init: 0, total_entree: 0, total_sort: 0, total_rest: 0, total_ben: 0 });

		    newTotals.total_tot = newTotals.total_init + newTotals.total_entree;
		    setTotals(newTotals);

		    // Destroy previous chart if exists
		    if (chartInstance.current) {
		        chartInstance.current.destroy();
		    }

		    // Create new chart
		    const ctx = chartRef.current.getContext('2d');
		    chartInstance.current = new Chart(ctx, {
		        type: 'bar',
		        data: {
		            labels: ["Stock initial", "Entrées", "Sorties", "Stock Restant", "Bénéfice brut"],
		            datasets: [{
		                label: 'Valeurs Totales',
		                data: [newTotals.total_init, newTotals.total_entree, newTotals.total_sort, newTotals.total_rest, newTotals.total_ben],
		                backgroundColor: [
		                    'rgba(54, 162, 235, 0.6)', 'rgba(75, 192, 192, 0.6)',
		                    'rgba(255, 99, 132, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(153, 102, 255, 0.6)'
		                ],
		                borderColor: [
		                    'rgba(54, 162, 235, 1)', 'rgba(75, 192, 192, 1)',
		                    'rgba(255, 99, 132, 1)', 'rgba(255, 206, 86, 1)', 'rgba(153, 102, 255, 1)'
		                ],
		                borderWidth: 1
		            }]
		        },
		        options: {
		            responsive: true,
		            maintainAspectRatio: false,
		            scales: { y: { beginAtZero: true } }
		        }
		    });
		}, [stats]);

        const headers = [
            {title: '#'},{title: 'Article'},{title: 'P.A.U'},{title: 'Initial'},
            {title: 'Entrées'},{title: 'P.V.U'},{title: 'Total'},{title: 'Restant'},{title: 'Benefice'}
        ]

    return (
        <div className="container mx-auto p-6">
            <Paper sx={{ mt: 2, p: 4, borderRadius: 3 }} className="shadow-lg">
                <p className="font-bold text-lg">Journal</p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(e) => {
                            setSelectedDate(e.target.value);
                            fetchDataByDate(e.target.value);
                        }}
                        className="border border-gray-300 px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
                    />
                    <button
                        onClick={generateJournal}
                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full transition"
                    >
                        Générer le journal
                    </button>
                </div>
                <div className="mt-6">
                    <div className="border p-4 rounded-lg shadow-md bg-white overflow-x-auto">
                        <h2 className="text-lg font-semibold">Journal du {selectedDate}</h2>
                        <table className="w-full border-collapse border border-gray-300 mt-2">
                            <thead className="bg-gray-200">
                                <tr>
                                    { headers.map((header, index) => <th key={index} className="border px-4 py-2">{header.title}</th>)}
                                </tr>
                            </thead>
                            <tbody>
                                {stats.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-100">
                                        <td className="border px-4 py-2">{index + 1}</td>
                                        <td className="border px-4 py-2">{item.prod_name}</td>
                                        <td className="border px-4 py-2">{item.pau}</td>
                                        <td className="border px-4 py-2">{item.initial}</td>
                                        <td className="border px-4 py-2">{item.plus}</td>
                                        <td className="border px-4 py-2">{item.initial + item.plus}</td>
                                        <td className="border px-4 py-2">{item.price}</td>
                                        <td className="border px-4 py-2">{item.minus}</td>
                                        <td className="border px-4 py-2">{item.initial + item.plus - item.minus}</td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td className="border px-4 py-2" colSpan="3">Total</td>
                                    <td className="border px-4 py-2">{totals.total_init}</td>
                                    <td className="border px-4 py-2">{totals.total_entree}</td>
                                    <td className="border px-4 py-2">{totals.total_tot}</td>
                                    <td className="border px-4 py-2"></td>
                                    <td className="border px-4 py-2">{totals.total_sort}</td>
                                    <td className="border px-4 py-2">{totals.total_rest}</td>
                                </tr>
                            </tfoot>
                        </table>
                        <div className="mt-4">
                          <canvas ref={chartRef} className="w-full h-64"></canvas>
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Journal;
