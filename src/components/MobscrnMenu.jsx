import { AccountBox,Article,Group,Home,ModeNight,Person,Settings,Storefront } from "@mui/icons-material"
import { AppBar,styled,Toolbar} from "@mui/material"

const StyledToolBar = styled(Toolbar)(({theme})=>({
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: "background.default",
    color : "text.primary",
    height: '30px',
    [theme.breakpoints.up('sm')]: {
        justifyContent: 'space-evenly'
    }
}))

export default function MobscrnMenu({mode,setMode}) {
    return (
        <AppBar position="sticky">
            <StyledToolBar sx={{display:{sm:'flex',md:'none'}}}>
                <Home  />
                <Person />
                <Group />
                <AccountBox />
                <Article />
                <Storefront />
                <Settings />
                <ModeNight onClick={e=>setMode(mode === "light" ? "dark" : "light")}/>
            </StyledToolBar>
        </AppBar>
    )
}
