import { useState } from 'react'
import Paper from '@mui/material/Paper'
import students from '../assets/students.json'
import { DataGrid } from '@mui/x-data-grid'
import {frFR} from '@mui/x-data-grid/locales'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Stock = () => {
	const [filtered, setFilter] = useState([])
	const [query, setQuery] = useState('')
	const columns = [
		{field: 'id', headerName: 'ID', width: 50},
		{field: 'name', headerName: 'Nom et prénom', width: 200},
		{field: 'dob', headerName: 'Né le', width: 100},
		{field: 'class', headerName: 'Classe', width: 70},
		{field: 'section', headerName: 'Section', width: 70},
		{field: 'address', headerName: 'Addresse', width: 200},
		{field: 'phone', headerName: 'Téléphone', width: 200},
	]

	const getQuery = (e) => {
		setQuery(e.target.value)
	}
  const stds = students.filter((student) => student.name.toLowerCase().includes(query) 
  	|| student.id.toString().includes(query)) || students

	return(
	<>
		<Paper  sx={{ mt: 2, p: 2, border: 0, borderRadius: 3 }}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Typography variant='h4' component='h2'>Produits et stock</Typography>
				<TextField 
					type='search' 
					name='query' 
					onChange={getQuery} 
					placeholder='Rechercher par nom ou ID'
				/>
			</Box>
			<DataGrid
				columns={columns}
				rows={stds}
				sx={{ border: 0, borderRadius: 3, mt: 2, p: 2 }}
				pageSize={5}
        pageSizeOptions={[5, 10, 25,50,100]}
				localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
			/>
		</Paper>
	</>
	)
}

export default Stock