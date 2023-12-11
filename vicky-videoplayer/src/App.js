import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion'
import axios from 'axios';

import Navbar from './Navbar';
import YouTube from 'react-youtube';

const App = () => {
  const [videoId, setVideoId] = useState('CkhKyYmlBbI');
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const getVideo = async () => {

      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=AIzaSyB61ZUYajRKP3SQUubCso6u9r_y86hCMHE&part=snippet,contentDetails`
        );

        setVideoData(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video data:', error);
      }
    };

    getVideo();
  }, [videoId]);

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
   

    <div  >
      <div class="row"><Navbar/></div>
      
  <div class="row" >
    <div  class="col" style={{margin:"1rem"}}>
    {videoData ? (
        <>
          
          <YouTube  videoId={'CkhKyYmlBbI'} opts={opts} />
        </>
      ) : (

        <p>Page is Loading wait...</p>
      )}
    </div>
    <div class="col" style={{margin:"1rem"}}>
    {videoData ? (
        <>
         
          <YouTube videoId={'ubdFUjdHH_E'} opts={opts} />
        </>
      ) : (
        <p>Page is Loading wait...</p>
      )}
    </div>
    <div class="col" style={{margin:"1rem"}}>
    {videoData ? (
        <>
        
          <YouTube videoId={'8nsslXwcgFw'} opts={opts} />
        </>
      ) : (
        <p>Page is Loading wait...</p>
      )}
    </div>
    <div class="col" style={{margin:"1rem"}}>
    {videoData ? (
        <>
          {/* <h1>{videoData.snippet.title}</h1> */}
          <YouTube videoId={'7xtRNoLM-08'} opts={opts} />
        </>
      ) : (
        <p>Page is Loading wait...</p>
      )}
    </div>
  </div>
</div>
  );
};

export default App;
