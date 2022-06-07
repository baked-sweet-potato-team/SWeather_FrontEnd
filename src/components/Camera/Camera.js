import React, {useState, useEffect, useRef} from 'react';
import { Button } from 'reactstrap';

const Camera = () => {
    const [playing, setPlaying] = useState(undefined);
    const videoRef = useRef(null);

    // 최초 렌더링 시 실행
    useEffect(() => {
        getWebcam((stream => {
          setPlaying(true);
          videoRef.current.srcObject = stream;
        }));
      }, []);
    
      const startOrStop = () => {
        if (playing) {
          const s = videoRef.current.srcObject;
          s.getTracks().forEach((track) => {
            track.stop();
          });
        } else {
          getWebcam((stream => {
            setPlaying(true);
            videoRef.current.srcObject = stream;
          }));
        }
        setPlaying(!playing);
      }

    const getWebcam = (callback) => {
        try {
          const constraints = {
            'video': true,
            'audio': false
          }
          navigator.mediaDevices.getUserMedia(constraints)
            .then(callback);
        } catch (err) {
            console.log(err);
            return undefined;
        }
      }
      
      const Styles = {
        Video: { width: "100%", height: "auto", background: '#222F7D', display: "block" },
        None: { display: 'none' },
        Button: { background: '#636363', float: "right", color: "white", bolder: "0px", margin: "18px 18px 0 0", display: "block"}
      }

    return (
        <div>
            <video ref={videoRef} autoPlay style={Styles.Video} />
            <Button style={Styles.Button} color="warning" onClick={() => startOrStop()}>{playing ? '카메라 끄기' : '카메라 시작하기'} </Button>
        </div>
    );
};

export default Camera;