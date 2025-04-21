import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import axios from 'axios'
import { Delete as DeleteIcon } from '@mui/icons-material'


const Waiters = ({ waiters, setMsg, setWaiters }) => {
  const [waiter, setWaiter] = useState({name: "", address: "", phone: "", cni: ""})
  //add waiter
  const getValue = (event) =>{
    const {name, value} = event.target
    setWaiter((prev)=>({...prev,[name]:value}))
  }
  const addWaiter = ()=>{
    axios.post('http://localhost/add_waiter.php', { waiter: waiter })
      .then(resp => {
        if(resp.data.success) {
          setMsg(resp.data.message)
          setWaiter({name: "", address: "", phone: "", cni: ""})
          setWaiters(resp.data.waiters)
        }else{
          throw new Error(resp.data.message)
        }
      })
      .catch(err => setMsg(err.message))
  }
  return (
    <div className="container mx-auto p-4">
      <Paper sx={{ mt: 2, p: 4, borderRadius: 3 }} className="shadow-lg">
        <p>G&eacute;r&eacute;r les serveurs</p>
          <div className="border p-4 rounded-lg shadow-md bg-white mt-5">
            <div className=" bg-gray-100 p-4 flex flex-wrap gap-4">
              <input type="text" name="name" placeholder="Nom et pr&eacute;nom"
                className="border p-1 text-sm  outline-none focus:border-blue-500"
                onChange={getValue} />
              <input type="text" name="address" placeholder="Adresse"
                className="border p-1 text-sm  outline-none focus:border-blue-500"
                onChange={getValue} />
              <input type="text" name="phone" placeholder="T&eacute;l&eacute;phone"
                className="border p-1 text-sm  outline-none focus:border-blue-500"
                onChange={getValue} />
              <input type="text" name="cni" placeholder="C.N.I"
                className="border p-1 text-sm outline-none focus:border-blue-500"
                onChange={getValue} />
              <button onClick={addWaiter} className="bg-blue-500 text-white px-4 py-1 text
               rounded hover:bg-blue-700">
                Ajouter
              </button>
            </div>
          </div>
            {/*waiters list here*/}
            <div className="border p-4 rounded-lg shadow-md bg-white mt-5">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border px-4 py-2 fs-xs">#</th>
                    <th className="border px-4 py-2 fs-xs">Nom et pr&eacute;nom</th>
                    <th className="border px-4 py-2 fs-xs">T&eacute;l&eacute;phone</th>
                    <th className="border px-4 py-2 fs-xs">Adresse</th>
                    <th className="border px-4 py-2 fs-xs">C.N.I</th>
                  </tr>
                </thead>
                <tbody>
                { waiters.map((waiter, id) =>
                    <tr key={id} className="hover:bg-gray-100">
                      <th className="border px-4 py-2 fs-xs">{id+1}</th>
                      <td className="border px-4 py-2 fs-xs">{waiter.name}</td>
                      <td className="border px-4 py-2 fs-xs">{waiter.phone}</td>
                      <td className="border px-4 py-2 fs-xs">{waiter.address}</td>
                      <td className="border px-4 py-2 fs-xs">{waiter.cni}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
      </Paper>
    </div>
  )
}

export default Waiters
