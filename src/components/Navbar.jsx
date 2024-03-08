import { Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { logo } from '../utils/constants'
import SearchBar from './SearchBar'

export default function Navbar() {
  return (
    <Stack 
      direction="row" 
      alignItems="center"
      p={2} 
      zIndex='10'
      sx={{ position: "sticky", background: "#000", top: "0", justifyContent: "space-between" }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
        <Typography variant="h4" sx={{ color: 'white', ml: '10px', lineHeight: '0', display: { lg: "block", md: 'none', xs: 'none' }}}><span style={{ color: 'red' }}><span style={{ color: 'white' }}
        >You</span>Watch</span></Typography>

      </Link>

      <SearchBar />
    </Stack>
  )
}
