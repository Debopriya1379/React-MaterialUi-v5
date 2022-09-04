import { Notifications,Mail } from "@mui/icons-material"
import FacebookIcon from '@mui/icons-material/Facebook';
import { AppBar,Box,styled,Toolbar, Typography,Avatar,Badge,InputBase,Menu,MenuItem} from "@mui/material"
import { useState } from "react"


const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
})

const Search = styled('div')(({theme})=>({
    backgroundColor:'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}))

const Icons = styled(Box)(({theme})=>({
    display: 'none',
    alignItems: 'center',
    gap:'20px',
    [theme.breakpoints.up('sm')]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap:'20px',
    [theme.breakpoints.up('sm')]: {
        display: 'none'
    }
}))

export default function Navbar() {
    const [open,setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6" sx={{display:{xs:'none', sm:'block'}}}>
                    ACEBOOK
                </Typography>
                <FacebookIcon sx={{display:{xs:'block', sm:'none' }}}/>
                <Search><InputBase placeholder="search" sx={{color:'black'}}/></Search>
                <Icons>
                    <Badge badgeContent={4} color='error' >
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={4} color='error' >
                        <Notifications/>
                    </Badge>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={(e) => setOpen(true)}
                    />
                </Icons>
                <UserBox>
                    <Avatar
                        sx={{ width: 30, height: 30 }}
                        src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        onClick={(e) => setOpen(true)}
                    />
                    <Typography variant="span">D.code</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e) => setOpen(false)}
                anchorOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
                transformOrigin={{
                vertical: "top",
                horizontal: "right",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
  