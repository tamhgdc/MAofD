import React, { useEffect, useState } from "react"
import {
  SafeAreaView, View,
  Text, TouchableOpacity, Image
} from "react-native"
import Slider from "@react-native-community/slider"
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./MusicPlayerStyles"
import axios from "axios"
import IconRepeatOnce from "../../components/IconRepeatOnce"

import TrackPlayer, {
  Capability, State,
  usePlaybackState, useProgress,
  Event, RepeatMode, useTrackPlayerEvents
} from "react-native-track-player"

import { togglePlayback, setup, trackPlayerInit, slidingCompleted } from "./MusicPlayerController"
import { Top100HanQuoc, Top100NhacTre, Top100PopAuMy, PopBallad, Bolero } from "../../assets/song"

export default function MusicPlayer({ route }) {

  const playbackState = usePlaybackState()
  const progress = useProgress()
  // const listIdSong = route.params.keyList
  const [currentIdSong, setCurrentIdSong] = useState(route.params.key)
  const [currentTrackArtist, setCurrentTrackArtist] = useState()
  const [currentTrackArtwork, setCurrentTrackArtwork] = useState()
  const [currentTrackTitle, setCurrentTrackTitle] = useState()
  const [repeatMode, setRepeatMode] = useState("off")
  const [like, setLike] = useState(false)

  // const [trackArtist, setTrackArtist] = useState()
  // const [trackArtwork, setTrackArtwork] = useState()
  // const [trackTitle, setTrackTitle] = useState()
  // const [trackDuration, setTrackDuration] = useState()
  // const [trackUrl, setTrackUrl] = useState()
  // const [track, setTrack] = useState()



  const start = () => {
    if (route.params.idList == Top100NhacTre.encodeId) {
      let indexCurrentSong = Top100NhacTre.songs.findIndex(item => item.encodeId === currentIdSong)
      setup(Top100NhacTre.songs, indexCurrentSong)

    }
    if (route.params.idList == Top100PopAuMy.encodeId) {
      let indexCurrentSong = Top100PopAuMy.songs.findIndex(item => item.encodeId === currentIdSong)
      setup(Top100PopAuMy.songs, indexCurrentSong)

    }
    if (route.params.idList == Top100HanQuoc.encodeId) {
      let indexCurrentSong = Top100HanQuoc.songs.findIndex(item => item.encodeId === currentIdSong)
      setup(Top100HanQuoc.songs, indexCurrentSong)

    }
    if (route.params.idList == Bolero.encodeId) {
      let indexCurrentSong = Bolero.songs.findIndex(item => item.encodeId === currentIdSong)
      setup(Bolero.songs, indexCurrentSong)

    }
    if (route.params.idList == PopBallad.encodeId) {
      let indexCurrentSong = PopBallad.songs.findIndex(item => item.encodeId === currentIdSong)
      setup(PopBallad.songs, indexCurrentSong)

    }
  }




  const getSong = async () => {
    const idSong = currentIdSong
    let endpoints = [
      `https://ma-of-d-sever.vercel.app/api/info?id=${idSong}`,
      `https://ma-of-d-sever.vercel.app/api/song?id=${idSong}`
    ]
    await axios.all(endpoints.map(endpoint => axios.get(endpoint))).then(res => {
      trackPlayerInit()
      setup({
        title: res[0].data.data.title,
        artist: res[0].data.data.artistsNames,
        artwork: res[0].data.data.thumbnailM,
        duration: res[0].data.data.duration,
        url: res[1].data.data["128"]
      })
    })
  }


  const skipNextSong = () => {
    if (currentIndex == listIdSongLength - 1) {
      currentIndex = 0
      setCurrentIdSong(listIdSong[currentIndex])
    }
    else {
      currentIndex++
      setCurrentIdSong(listIdSong[currentIndex])
    }
  }
  const skipPrevSong = () => {
    if (currentIndex == 0) {
      currentIndex = listIdSongLength - 1
      setCurrentIdSong(listIdSong[currentIndex])
    }
    else {
      currentIndex--
      setCurrentIdSong(listIdSong[currentIndex])
    }
  }

  const changeRepeatMode = () => {
    if (repeatMode == "off") {
      TrackPlayer.setRepeatMode(RepeatMode.Track)
      setRepeatMode("track")
    }
    if (repeatMode == "track") {
      TrackPlayer.setRepeatMode(RepeatMode.Queue)
      setRepeatMode("repeat")
    }
    if (repeatMode == "repeat") {
      TrackPlayer.setRepeatMode(RepeatMode.Off)
      setRepeatMode("off")
    }
  }

  const changeStatusHeart = () => {
    setLike(!like)
  }

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (
      event.type === Event.PlaybackTrackChanged &&
      event.nextTrack !== undefined
    ) {
      const track = await TrackPlayer.getTrack(event.nextTrack)
      const { title, artist, artwork } = track
      setCurrentTrackTitle(title)
      setCurrentTrackArtist(artist)
      setCurrentTrackArtwork(artwork)
    }
  })

  // useEffect(() => {
  //   // getSong()
  //   trackPlayerInit()
  //   setup(Top100NhacTre.songs)

  //   TrackPlayer.updateOptions({
  //     stopWithApp: true,
  //     capabilities: [
  //       Capability.Play,
  //       Capability.Pause,
  //       Capability.SkipToNext,
  //       Capability.SkipToPrevious,
  //       Capability.Stop,
  //     ],
  //     compactCapabilities: [Capability.Play, Capability.Pause],
  //   })

  // }, [currentIdSong])

  useEffect(() => {
    trackPlayerInit()
    start()
  }, [])



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.mainWork}>
          <Image
            source={{ uri: currentTrackArtwork }}
            style={styles.imgWork}
            resizeMode="contain"
          />
        </View>
        <View
          style={styles.title}>
          <Text style={styles.songTitle}>{currentTrackTitle}</Text>
          <Text style={styles.singerName}>{currentTrackArtist}</Text>
        </View>
        <View>
          <Slider
            style={styles.processContainer}
            value={progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            thumbTintColor="#ccc"
            minimumTrackTintColor="#ccc"
            maximumTrackTintColor="orange"
            onSlidingComplete={slidingCompleted}
          />
          <View style={styles.processLabel}>
            <Text style={styles.processLabelTxt}>
              {new Date(progress.position * 1000).toISOString().substring(14, 19)}
            </Text>
            <Text style={styles.processLabelTxt}>
              {new Date((progress.duration - progress.position) * 1000).toISOString().substring(14, 19)}
            </Text>
          </View>
        </View>
        <View style={styles.musicControls}>
          <TouchableOpacity
            style={{}}
            onPress={() => TrackPlayer.skipToPrevious()}>
            <Ionicons
              name="play-skip-back-circle-outline"
              size={55} color="#fff"
              style={{ marginTop: 15 }} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => togglePlayback(playbackState)}>
            {playbackState === State.Playing ?
              <Ionicons
                name="pause-circle-outline"
                size={75}
                color="#E8E8E8" />
              :
              <Ionicons
                name="play-circle-outline"
                size={75}
                color="#E8E8E8" />}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => TrackPlayer.skipToNext()}>
            <Ionicons
              name="play-skip-forward-circle-outline"
              size={55}
              color="#E8E8E8"
              style={{ marginTop: 15 }} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomControl}>
          <TouchableOpacity onPress={() => changeStatusHeart()}>
            {like ? <Ionicons
              name="heart-outline"
              size={24}
              color="#800080" /> : <Ionicons
              name="heart-outline"
              size={24}
              color="#E8E8E8" />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeRepeatMode()}>
            {repeatMode == "off" &&
              <Ionicons
                name="repeat-outline"
                size={24}
                color="#E8E8E8" />}
            {repeatMode == "track" && <IconRepeatOnce />}

            {repeatMode == "repeat" &&
              <Ionicons
                name="repeat-outline"
                size={24}
                color="#800080" />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              name="share-outline"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons
              name="ellipsis-horizontal"
              size={24}
              color="#E8E8E8" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
