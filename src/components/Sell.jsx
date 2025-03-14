import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'

const SellAndOrder = (props) => {
	const products = props.products
	const waiters = props.waiters
  const [item, setItem] = useState({id: '', name: '', quantity: '', price: ''})
  const [orderList, setOrderList] = useState([])
  const [waiter, setWaiter] = useState('')

  const getItem = (event) => {
    const currItem = products.filter((p) => p.id === parseInt(event.target.value))
    setItem((prev) => ({...prev, 'name':currItem[0].prod_name, 'price': currItem[0].price}))
  }

  //add selected item to order list
  const pushItem = () => {
    setOrderList((prev) => [...prev, item])
  }
  //place command 
  const placeCommand = () => {
  	console.log(orderList, waiter)
  }
  return(
    <>
    <Paper  sx={{ mt: 2, p: 2, border: 0, borderRadius: 3 }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
	  <Typography variant='h4' component='h2'>Ventes et commandes</Typography>
	</Box>
	<div className="grid gap-4 grid-cols-1 md:grid-cols-2">
	  <div>
	    <div className="flex justify-between">
	      <select name="item" onChange={getItem} className="outline-none border p-3">
	        <option>--Article--</option>
          {products.map((prod) => <option key={prod.id} value={prod.id}>{prod.prod_name}</option>)}
	      </select>
	      <input type="number" name="number" 
	        onChange={(event) => setItem((prev) => ({...prev, 'quantity':event.target.value}))} 
	        placeholder="Quantite" 
	        className="outline-none border px-3 py-1 fs-sm w-20"
	      />
	      <button type="button" onClick={pushItem} className="border">Ajouter</button>
	    </div>
	    <div className="my-4">
	    	<select name="waiter" onChange={(event) => setWaiter(event.target.value)} className="outline-none border p-3">
	    		<option>--Serveur--</option>
	    		{waiters.map((waiter) => <option value={waiter.id}>{waiter.name}</option>)}
	    	</select>
	    </div>
	  </div>
	  <div className="">
          <table className="w-full border-collapse border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-4 py-2">#</th>
                <th className="border px-4 py-2">Article</th>
                <th className="border px-4 py-2">QT</th>
                <th className="border px-4 py-2">P.U</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderList.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{item.id}</td>
                  <td className="border px-4 py-2">{item.name}</td>
                  <td className="border px-4 py-2">{item.quantity}</td>
                  <td className="border px-4 py-2">{item.price}</td>
                  <td className="border px-4 py-2 text-red-500 cursor-pointer">X</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={placeCommand} className="border">Passer</button>
	  </div>
        </div>
      </Paper>
    </>
    )
}

export default SellAndOrder
