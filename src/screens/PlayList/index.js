import React, { useState, useEffect, useRef } from 'react'
import { Text, TouchableOpacity, View, FlatList, ActivityIndicator, Image, Animated } from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from './PlayListStyles'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = 80;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const PlayList = ({ route }) => {

  const navigation = useNavigation()
  const idPlayList = route.params.key
  const [song, setSong] = useState([])
  const [thumbnail, setThumbnail] = useState()
  const arrEncodeId = []

  const getSongById = async () => {
    await axios.get(`https://ma-of-d-sever.vercel.app/api/playlist?id=${idPlayList}`)
      .then(res => {
        setThumbnail(res.data.data.thumbnail)
        setSong(res.data.data.song.items)
      })
  }

  const handleChangeView = (item) => {
    navigation.navigate("Player", { key: item.encodeId, keyList: arrEncodeId, idList: idPlayList })
  }

  const renderItemInList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.btnItemListSong}
        onPress={() => handleChangeView(item)}>
        <Image style={styles.songArtwork}
          source={{ uri: item.thumbnail }}
          resizeMode="cover" />
        <View>
          <Text numberOfLines={1} style={styles.songTitle}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.songArtist}>{item.artistsNames}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  useEffect(() => {
    getSongById()
  }, [])

  {
    song.map((item) => {
      return arrEncodeId.push(item.encodeId)
    })
  }

  const scrollY = useRef(new Animated.Value(0)).current;

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });
  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const titleScale = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });
  const titleTranslateY = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0.9],
    extrapolate: 'clamp',
  });


  return (
    <View style={styles.container}>

      {/* renderlist */}
      <Animated.ScrollView
        contentContainerStyle={{ paddingTop: HEADER_MAX_HEIGHT, paddingBottom: 10 }}
        scrollEventThrottle={16}
        onScroll={
          Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true },
          )
        }>
        {song.length > 0 ?
          <View style={styles.containerList}>
            <FlatList
              data={song}
              keyExtractor={i => i.encodeId}
              renderItem={renderItemInList}
              showsVerticalScrollIndicator={false} />
          </View>
          :
          <View style={{ paddingTop: 55, ...styles.containerList }}>
            <Text>Đang tải bài hát</Text>
            <ActivityIndicator size="large" />
          </View>}
      </Animated.ScrollView>


      {/* image header */}
      <Animated.View
        style={[styles.header, { transform: [{ translateY: headerTranslateY }] }]}>
        <Animated.Image
          style={[
            styles.headerBackground,
            {
              opacity: imageOpacity,
              transform: [{ translateY: imageTranslateY }],
            },
          ]}
          source={{ uri: thumbnail }}
        />
      </Animated.View>

      {/*after scroll  */}
      <Animated.View
        style={[
          styles.topBar,
          {
            transform: [{ scale: titleScale }, { translateY: titleTranslateY }],
          },
        ]}>
        <TouchableOpacity style={{
          height: 50,
          width: 50,
          position: "absolute",
          left: 8,
          top: 0,
          borderRadius: 999,
          justifyContent: "center",
          alignItems: "center"
        }}
          onPress={() => navigation.goBack()}>
          <Ionicons name="ios-chevron-back" size={35} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>{route.params.content}</Text>
      </Animated.View>
    </View>
  )
}

export default PlayList