import { Box } from "@mui/material"
import Post from "./Post"

export default function Feed() {
  return (
    <Box flex={4} p={1} alignItems='center'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </Box>
  )
}
