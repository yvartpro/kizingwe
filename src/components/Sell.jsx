import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { Delete as DeleteIcon } from '@mui/icons-material'


const SellAndOrder = ({ products, waiters , setMsg}) => {
  const [item, setItem] = useState({ id: '', name: '', quantity: '', price: '' })
  const [orderList, setOrderList] = useState([])
  const [waiter, setWaiter] = useState('')
  const [orderTotal, setOrderTotal] = useState(0)

  const getItem = (event) => {
    const selectedItem = products.find(p => p.id === parseInt(event.target.value))
    if (selectedItem) {
      setItem(prev => ({ ...prev, id: selectedItem.id, name: selectedItem.prod_name, price: selectedItem.price }))
    }
  }

  const pushItem = () => {
    if (item.id && item.quantity > 0) {
      const newItem = { ...item, quantity: parseFloat(item.quantity) }
      setOrderList(prev => [...prev, newItem])
      setOrderTotal(prev => prev + newItem.quantity * newItem.price)
      setItem({ id: '', name: '', quantity: '', price: '' })
    }
  }
  const placeCommand = async () => {
    axios.post('http://localhost/sell.php', { items: orderList, waiter })
      .then(resp => {
        setWaiter('')
        setOrderList([])
        setMsg('Commande ajoutee.')
      })
      .catch(err => console.error(err))
  }
  useEffect(() =>{
    console.log(orderList)
  },[orderList])
  return (
    <div className="container mx-auto p-4">
      <Paper sx={{ mt: 2, p: 4, borderRadius: 3 }} className="shadow-lg">
        <p>Ventes et commandes</p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {/* Sélection des articles et serveurs */}
          <div className="bg-gray-100 p-4 rounded-md">
            <div className="flex flex-wrap gap-4">
              <select onChange={getItem} value={item.id} className="border p-1 rounded text-sm  outline-none focus:border-blue-500">
                <option>--Article--</option>
                {products.map(prod => <option key={prod.id} value={prod.id}>{prod.prod_name}</option>)}
              </select>
              <input type="number" min="1" placeholder="Quantité"
                className="border p-1 text-sm w-24 rounded outline-none focus:border-blue-500"
                value={item.quantity}
                onChange={(e) => setItem(prev => ({ ...prev, quantity: e.target.value }))} />
              <button onClick={pushItem} className="bg-blue-500 text-white px-4 py-1 text
               rounded hover:bg-blue-700">
                Ajouter
              </button>
            </div>
            <div className="my-4">
              <select onChange={(e) => setWaiter(e.target.value)} value={waiter} className="border p-2 w-full rounded outline-none text-sm focus:border-blue-500">
                <option>--Serveur--</option>
                {waiters.map(w => <option key={w.id} value={w.id}>{w.name}</option>)}
              </select>
            </div>
          </div>

          {/* Affichage de la commande */}
          {orderList.length > 0 && (
            <div className="border p-4 rounded-lg shadow-md bg-white">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border px-4 py-2 fs-xs">#</th>
                    <th className="border px-4 py-2 fs-xs">Article</th>
                    <th className="border px-4 py-2 fs-xs">QT</th>
                    <th className="border px-4 py-2 fs-xs">P.U</th>
                  </tr>
                </thead>
                <tbody>
                  {orderList.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="border px-4 py-2 fs-xs">{index + 1}</td>
                      <td className="border px-4 py-2 fs-xs">{item.name}</td>
                      <td className="border px-4 py-2 fs-xs">{item.quantity}</td>
                      <td className="border px-4 py-2 fs-xs">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-right font-bold mt-2">Total: {orderTotal} Fbu</p>
              <button onClick={placeCommand} className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
                Passer
              </button>
            </div>
          )}
        </div>
      </Paper>
    </div>
  )
}

export default SellAndOrder
