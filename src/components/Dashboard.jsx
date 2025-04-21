import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid2'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import LeftNav from './LeftNav'


const Dashboard = ({ user, isMobile }) => {
  const [expanded, setExpanded] = useState(false)
  const draweWidth = {
    expanded: 200,
    reduced: 72,
    exp: 100,
    reduce: 36,
  }
  const changeState = (state) => {
    setExpanded(state)
  }

  return (
    <Grid container spacing={2} sx={{ height: '100vh', flexWrap: 'nowrap' }}>
      {/* Sidebar */}
      <Grid item sx={{
          height: '100vh',
        }}>
        <LeftNav user={user} isMobile={isMobile} draweWidth={draweWidth} changeState={changeState}/>
      </Grid>

      {/* Main Content */}
      <Grid item sx={{ 
          height: '100vh',
          overflow: 'auto',
          width: '100%',
          pb: 2,
          pr: isMobile ? 0 : expanded ? draweWidth.exp + 'px' : draweWidth.reduce + 'px',
          ml: isMobile ? 0 :  expanded ? draweWidth.expanded + 'px' : draweWidth.reduced + 'px', 
        }}> 
        <Outlet/>
      </Grid>
    </Grid>
  )
}

export default Dashboard
