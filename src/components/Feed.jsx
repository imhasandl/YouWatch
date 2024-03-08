import React, { useState, useEffect } from "react"
import { Typography, Box, Stack } from "@mui/material"
import { Sidebar, Videos } from './indexComponents'
import { fetchFromAPI } from "../utils/fetchFromAPI"


export default function Feed() {
  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
  }, [selectedCategory])

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: "1px solid #3d3d3d", px: { sx: 0, md: 2 }}}>
  
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography variant="body2" className="copyright" sx={{ marginTop: 2, color: "#fff", display: 'flex', alignContent: "center", justifyContent: 'center' }}>
          Copyright 2024 
        </Typography>
      </Box>

      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2}}>
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: "white", justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' } }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}
