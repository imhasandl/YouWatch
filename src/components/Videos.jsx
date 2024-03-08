import { Box, Stack } from "@mui/material"
import { VideoCard, ChannelCard } from './indexComponents'

export default function Videos({ videos, direction }) {
  if(!videos?.length) return "Loading"

  return (
    <Stack direction={ direction || 'row' } flexWrap='wrap' justifyContent='start' gap={2} sx={{ justifyContent: { xs: 'center', md: 'center' } }}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}
