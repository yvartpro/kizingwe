import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import { DataGrid, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { frFR } from '@mui/x-data-grid/locales'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Delete as DeleteIcon } from '@mui/icons-material'
import axios from 'axios'

const Stock = ({user, products, saveArticle, setProducts}) => {
  const [newProduct, setNewProduct] = useState({prod_name: '', bt_caisse: ''})


  const columns = [
    { field: 'id', headerName: '#', width: 40, disableColumnMenu: true },
    { field: 'prod_name', headerName: 'Article', width: 150, editable: true, sortable: false, disableColumnMenu: true },
    { field: 'quantity', headerName: 'QT', width: 60, editable: true, sortable: false, disableColumnMenu: true },
    { field: 'bt_caisse', headerName: 'BT', width: 40, editable: true, sortable: false, disableColumnMenu: true },
    { field: 'pau', headerName: 'P.A.U', width: 100, editable: true, sortable: false, disableColumnMenu: true },
    { field: 'price', headerName: 'P.V.U', width: 100, editable: true, sortable: false, disableColumnMenu: true },
    { field: 'actions', headerName: 'Actions',width: 150,renderCell: (params) => {
        const id = params.row.id
        const handleDelete = () => {
          axios
            .post('http://localhost/delete_product.php',{ id: id})
            .then((resp) =>{
              const newRows = products.filter((row) => row.id !== id);
              setProducts(newRows);
            })
            .catch((err) => console.log(err))
        };
        return <DeleteIcon sx={{ color: 'red' }} onClick={handleDelete}/>
      }
    },
  ]

  // Quick Filter input
  const quickSearchFilter = () => (
    <div className="p-2">
      <GridToolbarQuickFilter className="border border-gray-300 p-2 rounded-sm shadow-sm focus:ring-2 focus:ring-blue-400 outline-none w-60" />
    </div>
  )
  const getValue = (e) => {
  	const {name, value} = e.target
  	setNewProduct((prev) => ({...prev, [name]: value}))
  }
	const addProduct = async (newProduct) => {
    console.log(newProduct)
	  await saveArticle(newProduct)
	  setNewProduct({ prod_name: '', bt_caisse: '' })
	}

  const updateRow = (newRow, oldRow) => {
    console.log(Number(newRow.quantity), oldRow.quantity)
    const modifiedField = Object.keys(newRow).find(key => newRow[key] !== oldRow[key])
    return axios
      .post('http://localhost/update_cell.php', { new_row: newRow, modified: modifiedField })
      .then((resp) => {
          // if(product.id === newRow.id ? newRow : product)
        console.log(resp.data)
        // modifiedField === 'quantity' ? setProducts()
        setProducts((prev) => prev.map((product) => {
          if(product.id === newRow.id){
            if(modifiedField === 'quantity'){
              newRow.quantity =  Number(newRow.quantity) + oldRow.quantity
              return newRow
            }else{
              return newRow
            }
          }else{
            return product
          }
        }))
        return newRow
      })
      .catch((err) => {
        console.error(err.message)
        return oldRow // Revert changes if request fails
      })
  }

  return (
    <Paper sx={{ mt: 2, p: 2, border: 0, borderRadius: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" component="h2">Produits et stock</Typography>
      </Box>
      <div className="mt-5 bg-slate-100 px-4 py-6 mx-4 rounded-sm">
        <p component="h3" className="mb-3 font-medium">Ajouter un article</p>
      	<input type="text" name="prod_name" value={newProduct.prod_name} onChange={getValue} placeholder="Nom del'article" className="border outline-none mr-2 py-2 px-4 focus:border-blue-500"/>
      	<input type="number" name="bt_caisse" value={newProduct.bt_caisse} onChange={getValue} placeholder="Bouteilles par casier" className="border outline-none mx-2 py-2 px-4 focus:border-blue-500"/>
      	<button type="button" onClick={() => addProduct(newProduct)} className="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600">Ajouter</button>
      </div>
      <DataGrid
        columns={columns}
        rows={products}
        sx={{ border: 0, borderRadius: 3, mt: 2, p: 2 }}
        pageSize={5}
        pageSizeOptions={[5, 10, 25, 100, 150]}
        disableRowSelectionOnClick
        processRowUpdate={updateRow}
        onProcessRowUpdateError={(err) => console.log(err)}
        localeText={frFR.components.MuiDataGrid.defaultProps.localeText}
        slots={{ toolbar: quickSearchFilter }}
      />
    </Paper>
  )
}

export default Stock
