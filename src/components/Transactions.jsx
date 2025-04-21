import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'

const Stock = (props) => {
  const [invoices, setInvoices] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/fetch/invoices.php')
      .then(resp => setInvoices(resp.data))
      .catch(err => console.error(err));
      
    axios.get('http://localhost/fetch/orders.php')
      .then(resp => setOrders(resp.data))
      .catch(err => console.error(err));
  }, []);
	return(
	<>
    <div className="container mx-auto p-6">
      <Paper sx={{ mt: 2, p: 4, borderRadius: 3 }} className="shadow-lg">
        <Box className="mb-4">
          <Typography variant='h4' className="text-gray-700 font-bold">Caisse et transactions</Typography>
        </Box>
        <div className="mt-6 grid lg:grid-cols-2 gap-4">
          {invoices.map(invoice => (
            <div key={invoice.id} className="border p-4 rounded-lg shadow-md mb-4 bg-white">
              <h2 className="text-lg font-medium text-green-700">Facture n°{invoice.id}</h2>
              <table className="w-full border-collapse border border-gray-300 mt-2 rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border px-4 py-2">#</th>
                    <th className="border px-4 py-2">Article</th>
                    <th className="border px-4 py-2">QT</th>
                    <th className="border px-4 py-2">P.U</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.filter(order => order.invoice_id === invoice.id).map((order, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2">{index + 1}</td>
                      <td className="border px-4 py-2">{order.prod_name}</td>
                      <td className="border px-4 py-2">{order.quantity}</td>
                      <td className="border px-4 py-2">{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-right font-bold mt-2">Total: {invoice.total} Fbu</p>
              <p className="text-right text-sm">Serveur: {invoice.waiter_name}</p>
            </div>
          ))}
        </div>
      </Paper>
    </div>
	</>
	)
}

export default Stock
