import Paper from '@mui/material/Paper'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Journal = () => {
	const [stats, setStats] = useState([])
	const [sapor, setSapor] = useState('')

	useEffect(() =>{
		axios
		  .get('http://localhost/fetch/daily_stat.php')
		  .then((resp) => setStats(resp.data))
		  .catch((err) => setSapor(err.message))

		//get grouped stats
		stats.map((item) => {
			// if(item.stat_data)
		})
	},[])

  const generateJournal = () =>{
  	axios
  	  .get('http://localhost/daily_stat.php')
  	  .then((resp) => {if(resp.data.error && resp.data.code === '23000') setSapor('Vous avez deja genere le journal.')})
  	  .catch((err) => setSapor(err))
  }
  console.log(sapor)

	return( 
    <>

    <div className="container mx-auto p-6">
      <Paper sx={{ mt: 2, p: 4, borderRadius: 3 }} className="shadow-lg">
      <p className="font-bold">Journal</p>
      <div className="flex justify-end">
      	<button onClick={generateJournal} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full text-xs">G&eacute;nerer le journal</button>
      </div>
      </Paper>
    </div>
    </>
  )
}

export default Journal