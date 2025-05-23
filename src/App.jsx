import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import {ThemeProvider}  from '@mui/material/styles'
import Header from './components/Header'
import './App.css'
import Login from './components/Login'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './components/Dashboard'
import NotFound from './404'
import theme from './theme'
import SellAndOrder from './components/Sell'
import Stock from './components/Stock'
import Transactions from './components/Transactions'
import Journal from './components/Journal'
import Message from './components/Message'
import Waiters from './components/Waiters'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  //check login
  const user  =  JSON.parse(localStorage.getItem('currUser')) || false
  const [products, setProducts] = useState([])
  const [waiters, setWaiters] = useState([])
  const [msg, setMsg] = useState('')

  useEffect(() => {
  //product list
    axios
      .get('http://localhost/fetch/products.php')
      .then((resp) => {
        setProducts(resp.data)
       })
      .catch((err) => console.error(err))

    //waiter list
    axios
      .get('http://localhost/fetch/waiters.php')
      .then((resp) =>{
        setWaiters(resp.data)
      })
      .catch((err) => console.error(err))
  },[])
  //addnew product
  const saveArticle = (newProd) => {
    axios
      .post('http://localhost/add_product.php',{item: newProd})
      .then((resp) => {
        const lastIProd = resp.data
        setProducts((prev)=> [...prev, lastIProd])
      })
      .catch((err) => console.error(err))
  }

  const themeMob = useTheme()
  const isMobile = useMediaQuery(themeMob.breakpoints.down("sm"))
  return (
    <>
    <ThemeProvider theme={theme}>
      { !!msg && <Message msg={msg} setMsg={setMsg}/>}
      <Router>
        <Routes>
          <Route path='/auth' element={<Login isMobile={isMobile} setMsg={setMsg}/>}/>
          <Route path='/' element={<ProtectedRoute><Dashboard user={user} isMobile={isMobile}/></ProtectedRoute>}>
            <Route path='/ventes-commandes' element={<SellAndOrder waiters={waiters} products={products} setMsg={setMsg}/>} />
            <Route path='/caisse-transactions' element={<Transactions/>}/>
            <Route 
              path='/stock-articles' element={<Stock 
                user={user} 
                products={products} 
                saveArticle={saveArticle}
                setProducts={setProducts}
              />}
            />
            <Route path='/journal' element={<Journal setMsg={setMsg}/>}/>
            <Route path='/serveurs' element={<Waiters waiters={waiters} setMsg={setMsg} setWaiters={setWaiters}/>}/>
          </Route>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
