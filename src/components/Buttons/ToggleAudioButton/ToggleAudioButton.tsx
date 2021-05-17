import React from 'react';

import Button from '@material-ui/core/Button';
import MicIcon from '../../../icons/MicIcon';
import MicOffIcon from '../../../icons/MicOffIcon';

import useLocalAudioToggle from '../../../hooks/useLocalAudioToggle/useLocalAudioToggle';
import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';
import micIcon from '../../../assets/icon_mic.png'
export default function ToggleAudioButton(props: { disabled?: boolean; className?: string }) {
  const [isAudioEnabled, toggleAudioEnabled] = useLocalAudioToggle();
  const { localTracks } = useVideoContext();
  const hasAudioTrack = localTracks.some(track => track.kind === 'audio');

  return (
    <Button
      className={props.className}
      onClick={toggleAudioEnabled}
      disabled={!hasAudioTrack || props.disabled}
      startIcon={isAudioEnabled ?<img src={micIcon} style={{ width:20,
        height:20}} alt='user'/>: <MicOffIcon />}
      data-cy-audio-toggle
    >
      {/* {!hasAudioTrack ? 'No Audio' : isAudioEnabled ? 'Mute' : 'Unmute'} */}
      {!hasAudioTrack ? 'No Audio' : null}

    </Button>
  );
}
