import { useState } from 'react'
import Paper from '@mui/material/Paper'
import students from '../assets/students.json'
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid'
import {frFR} from '@mui/x-data-grid/locales'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Stock = (props) => {
	const columns = [
		{field: 'id', headerName: '#', width: 40,disableColumnMenu: true},
		{field: 'prod_name', headerName: 'Article', width: 150, editable: true, sortable: false, disableColumnMenu: true},
		{field: 'quantity', headerName: 'QT', width: 60, editable: true,sortable: false, disableColumnMenu: true},
		{field: 'bt_caisse', headerName: 'BT', width: 40, editable: true,sortable: false, disableColumnMenu: true},
		{field: 'pau', headerName: 'P.A.U', width: 100, editable: true,sortable: false, disableColumnMenu: true},
		{field: 'price', headerName: 'P.V.U', width: 100, editable: true,sortable: false, disableColumnMenu: true},
	]
// Customizing the Quick Filtersearch input
const quickSearchFilter = () =>(
  <div className="p-2">
    <GridToolbarQuickFilter className="border border-gray-300 p-2 rounded-sm shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-60"/>
  </div>)

	return(
	<>
		<Paper  sx={{ mt: 2, p: 2, border: 0, borderRadius: 3 }}>
			<Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
				<Typography variant='h4' component='h2'>Produits et stock</Typography>
			</Box>
			<DataGrid
				columns={columns}
				rows={props.products}
				sx={{ border: 0, borderRadius: 3, mt: 2, p: 2 }}
				pageSize={5}
				checkboxSelection 
        disableRowSelectionOnClick={true}
        pageSizeOptions={[5, 10, 25,50,100]}
				localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
				slots={{  toolbar: quickSearchFilter }}
			/>
		</Paper>
	</>
	)
}

export default Stock
