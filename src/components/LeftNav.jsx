import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/krl.png'
import Paper from "@mui/material/Paper"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Drawer from "@mui/material/Drawer"
import Typography from '@mui/material/Typography'

import { Menu as MenuIcon, Close as CloseIcon, ChevronLeft, ChevronRight, Home as HomeIcon, AccountBalance,
  AssignmentInd,ShoppingCart, Inventory, PointOfSale,  AccountCircle as ProfileIcon, ExitToApp, School as TeacherIcon, Diversity3 as AttendeeIcon, Group as StudentIcon
} from "@mui/icons-material"

const LeftNav = ({ user, isMobile, draweWidth, changeState }) => {
  if (!user) window.location.href = "/auth"

  const [expanded, setExpanded] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
    changeState(!expanded)
  }
  const logout = () => {
    localStorage.removeItem("currUser")
  }

  //menu list items
  const menuList = [
    { id: 1, text: 'Menu' },
    { id: 2, link: '/home', text: 'Acceuil', icon: <HomeIcon/> },
    { id: 4, link: '/ventes-commandes', text: 'Ventes et commandes', icon: <ShoppingCart/> },
    { id: 5, link: '/stock-articles', text: 'Produits et Stock', icon: <Inventory/> },
    { id: 6, link: '/caisse-transactions', text: 'Caisse et Transactions', icon: <PointOfSale/> },
    { id: 7, link: '/journal', text: 'Journal', icon: <PointOfSale/> },
    { id: 8, text: 'Autres' },
    { id: 9, link: '/profile', text: 'Profil', icon: <ProfileIcon/>},
    { id: 10, link: '/auth', text: 'D\u00e9connexion', icon: <ExitToApp/> , event: logout },
  ]

  return (
    <>
      {isMobile &&  (
        <IconButton
          sx={{ position: "absolute", top: 5, left: 5, zIndex: 1201 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open navigation menu">
          { mobileOpen ? <CloseIcon /> : <MenuIcon /> }
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : expanded}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: expanded ? draweWidth.expanded : draweWidth.reduced,
            transition: "width 0.3s",
          },
        }}>
        <Box sx={{ textAlign: "right", cursor: "pointer", p: 2, pb: 0, ml: mobileOpen ? 3 : 0,  }}>
          { expanded ? (
            <ChevronLeft onClick={toggleExpand} />
          ) : (
            <ChevronRight onClick={toggleExpand} />
          )}
        </Box>

        <List>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={logo} width="50px" alt='LSE'/>
            { expanded && <Typography variant='h4'>Kizingwe R.L Bar</Typography> }
          </Box>
          { menuList.map((item) => 
            <ListItem disablePadding key={item.id}>
              <ListItemButton {...(item.event && {onClick: logout})} {...(item.link && { component:Link, to: item.link })}>
                { item.icon && <ListItemIcon>
                  {item.icon}
                </ListItemIcon> }
                {expanded && <ListItemText primary={item.text} />}
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>
    </>
  )
}

export default LeftNav