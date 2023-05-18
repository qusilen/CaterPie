import { Grid } from '@mui/material'
import React from 'react'
import { Feed } from '../components/Feed'
import { Sidebar } from '../components/Sidebar'
export default function 
() {
  return (
    <div>
     <Sidebar/>
      <Grid container>
        <Feed />
      </Grid>
    </div>
  )
}
