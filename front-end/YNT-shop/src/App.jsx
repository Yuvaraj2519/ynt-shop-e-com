import { useState } from 'react'
import './App.css'
import { Paper } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0} />
        paper
      <Paper />
      <Paper elevation={3} />
    </Box>
    </>
  )
}

export default App
