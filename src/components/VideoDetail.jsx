import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./indexComponents";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)
  const { id } = useParams();

  const slicesId = id.substring(1)

  useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${slicesId}`)
          .then((data) => setVideoDetail(data.items[0]))
    
        fetchFromAPI(`search?part=snippet&relatedToVideoId=${slicesId}&type=video`)
          .then((data) => setVideos(data.items))
      }, [id]);

  if(!videoDetail?.snippet) return "Loading..."

  const { 
    snippet: { title, channelId, channelTitle }, 
    statistics: { viewCount, likeCount, }
  } = videoDetail;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${slicesId}`} className="react-player" controls />
            <Typography variant="h6" color='#fff' fontWeight='bold' p={0.5} ml={1}>
              {title}
            </Typography>

            <Stack direction='row' justifyContent='space-between' color="#fff" p={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: '', md: 'h6' }} color="#fff">
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}/>
                </Typography>
              </Link>

              <Stack direction='row' gap='10px' alignItems='center'>
                <Typography variant="body1" sx={{ opacity: 0.7, color: '#fff'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

                <Typography variant="body1" sx={{ opacity: 0.7, color: '#fff'}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center" >
          {videos && <Videos videos={videos} direction="column" />}
        </Box>
      </Stack>


    </Box>
  );
};

export default VideoDetail;