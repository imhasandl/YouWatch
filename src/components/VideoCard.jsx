import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle, Checklist } from "@mui/icons-material"
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"

export default function VideoCard({ video: { id: { videoId }, snippet } }) {


  return (
    <Card sx={{ width: { xs: "100%", sm: '358px', md: "320px" }, boxShadow: 'none', borderRadius: '5px', backgroundColor: "#1e1e1e" }}>
      <Link to={videoId ? `/video/:${videoId}` : demoVideoUrl} >
        <CardMedia 
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.title}
          sx={{ width: {
            xs: '100%', sm: '358px'
          }, height: 180, borderRadius: "12px" }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", height: '106px' }}>
          <Link to={videoId ? `/video/:${videoId}` : demoVideoUrl}>
            <Typography variant="subtitle1" fontWeight='bold' color='#fff'>
              {snippet?.title.slice(0, 25) || 
              demoVideoTitle.slice(0, 25)}...
            </Typography>
          </Link>

          <Link to={snippet?.channelId ? `/channel/:${snippet?.channelId}` : demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight='bold' color='#fff' sx={{ opacity: '0.5' }}>
              {snippet?.channelTitle || demoChannelTitle}
              <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }}/>
            </Typography>
          </Link>
      </CardContent>
    </Card>
  )
}
