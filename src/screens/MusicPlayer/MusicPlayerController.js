import TrackPlayer, {
  Capability, State,
  usePlaybackState, useProgress,
  Event, RepeatMode, useTrackPlayerEvents
} from "react-native-track-player"


const trackPlayerInit = async () => {
  await TrackPlayer.setupPlayer({})
  return true
}

const togglePlayback = async (playbackState) => {
  const currentTrack = await TrackPlayer.getCurrentTrack()
  if (currentTrack == null) {

  } else {
    if (playbackState !== State.Playing) {
      await TrackPlayer.play()
    } else {
      await TrackPlayer.pause()
    }
  }
}

const slidingCompleted = async (value) => {
  await TrackPlayer.seekTo(value)
}


const setup = async (track, index) => {
  const currentTrack = await TrackPlayer.getCurrentTrack()
  if (currentTrack !== null) {
    return
  }
  else {
    await TrackPlayer.setupPlayer({})
      .then(async () => {
        await TrackPlayer.reset()
        // await TrackPlayer.add([track])
        await TrackPlayer.add(track)
        await TrackPlayer.skip(index)
        await TrackPlayer.play()
        TrackPlayer.setRepeatMode(RepeatMode.Off)
      })
  }
}

export { setup, slidingCompleted, trackPlayerInit, togglePlayback }



