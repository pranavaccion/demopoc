import React, { useCallback, useRef } from 'react';

import Button from '@material-ui/core/Button';
import VideoOffIcon from '../../../icons/VideoOffIcon';
import VideoOnIcon from '../../../icons/VideoOnIcon';

import useDevices from '../../../hooks/useDevices/useDevices';
import useLocalVideoToggle from '../../../hooks/useLocalVideoToggle/useLocalVideoToggle';
import videoIcon  from '../../../assets/icon_video-camera.png'
export default function ToggleVideoButton(props: { disabled?: boolean; className?: string }) {
  const [isVideoEnabled, toggleVideoEnabled] = useLocalVideoToggle();
  const lastClickTimeRef = useRef(0);
  const { hasVideoInputDevices } = useDevices();

  const toggleVideo = useCallback(() => {
    if (Date.now() - lastClickTimeRef.current > 500) {
      lastClickTimeRef.current = Date.now();
      toggleVideoEnabled();
    }
  }, [toggleVideoEnabled]);

  return (
    <Button
      className={props.className}
      onClick={toggleVideo}
      disabled={!hasVideoInputDevices || props.disabled}
      startIcon={isVideoEnabled ? <img src={videoIcon} style={{ width:20,
        height:20}} alt='user'/> : <VideoOffIcon />}
    >
      {/* {!hasVideoInputDevices ? 'No Video' : isVideoEnabled ? 'Stop Video' : 'Start Video'} */}
      {!hasVideoInputDevices ? 'No Video' : null}

    </Button>
  );
}
