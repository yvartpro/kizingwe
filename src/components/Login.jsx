import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'
import { RadioGroup, Radio } from '@mui/material'
import { login } from '../Auth'
import { useNavigate } from 'react-router-dom'

const LoginRegister = ({isMobile, setMsg}) => {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState({name: '', username: '', phone: '', password: ''})
  const [sapor, setSapor] = useState('')
  //toggle login and register
  const toggleForm = () => {
    setIsLogin(!isLogin)
  }

  //get  input values
  const getValue = (e) => {
    const {name, value} = e.target
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  //login user
  const loginUser = async () => {
    try{
      const resp = await fetch('http://localhost/login.php',{
        method: 'POST',
        body: JSON.stringify(user)
      })
      if(!resp.ok) throw new Error(resp.statusText)
      const res = await resp.json()

      if(res.sapor) throw new Error(res.sapor)
      localStorage.setItem('currUser',JSON.stringify(res.user))
      login()
      navigate('/ventes-commandes')
    }catch(err){
      setSapor(err.message)
      setMsg(err.message)
      setTimeout(()=>{setSapor('')},3000)
    }
  }

  //register user
  const saveUser = async () => {
    try{
      const resp = await fetch('http://localhost/register.php',{
        method: 'POST',
        body: JSON.stringify(user)
      })
      if(!resp.ok) throw new Error(resp.statusText)
      const res = await resp.json()
      if(res.sapor) throw new Error(res.sapor)
      setIsLogin(true)
    }catch(err){
      setSapor(err.message)
      setMsg(err.message)
      setTimeout(()=>{setSapor('')},3000)
    }
  }
  return (
    <>
    <Box sx={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Stack sx={{
              width: isMobile ? '100%' : '400px',
              height: isMobile ? '100%' : 'fit-content',
              justifyContent: 'center',
              padding: isMobile ? '0 1rem' : '3rem' ,
            }}>
        <Typography component="h1" variant="h1" sx={{color: '#f1a03b', fontWeight: 700, fontSize: '2rem', textAlign: 'center', mb: 3
        }}>{ isLogin ? 'Connexion' : 'Creer un compte'}</Typography>
        {sapor && <Typography sx={{ color: 'orange',textAlign: 'center', fontSize: '12px'}}>{sapor}</Typography>}

        { !isLogin && <TextField name="name" onChange={getValue} type='text' placeholder="Nom et pr&eacute;nom"/> }
        { !isLogin && <TextField name="phone" onChange={getValue} type='tel' placeholder="T&eacute;l&eacute;phone"/> }
        <TextField name="username" onChange={getValue} type='text' placeholder="Nom d'utilisateur"/>
        <TextField type='password' name="password" onChange={getValue} placeholder='Mot de passe'/>
        <Button type='submit' onClick={ isLogin? loginUser : saveUser }>{ isLogin ? 'Connexion' : 'S\'enregister'}</Button>
        <Typography variant='h6'>{ isLogin ? 'Vous etes nouveau ?' : 'Avez-vous deja un compte ?'}
        <Typography variant='h6' onClick={toggleForm} component='span' sx={{cursor: 'pointer', textDecoration: 'underline'}}>
        { isLogin ? 'Creez un compte.':'Connectez-vous.'}</Typography></Typography>
      </Stack>
    </Box>
    </>
  )
}

export default LoginRegister
