import Typography from "@mui/material/Typography"
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <Typography variant="h2">404 - Page non trouv&eacute;e
        <Link to='/'>Accueil</Link>
      </Typography>
    </>
  )
}

export default NotFound