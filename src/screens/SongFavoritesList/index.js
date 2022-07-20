import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './SongFavoritesStyles'
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
const errorImage = require("../../assets/error.png")


const SongFavoriteList = ({ route }) => {

  const navigation = useNavigation()
  const [hasUser, setHasUser] = useState(false)
  const [hasSong, setHasSong] = useState(false)

  const songFavorite = [
    {
      encodeId: "ZZBUE7ZA",
      title: "Thương Em",
      artist: "Châu Khải Phong, ACV",
      artwork: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/0/0/3/b003deb65962e3b9b5f61f21f2f375ba.jpg",
      duration: 300,
      url: "https://mp3-s1-zmp3.zmdcdn.me/3bd3a4570816e148b807/2353244868757319482?authen=exp=1654100246~acl=/3bd3a4570816e148b807/*~hmac=a2d82417c9632145ea97ee8d76fda630&fs=MTY1MzkyNzQ0NjI1M3x3ZWJWNnwxMDExMzU2MTA3fDQyLjExNC4xNDEdUngMTEw",
    },
    {
      encodeId: "ZUB790F8",
      title: "Ai Chung Tình Được Mãi",
      artist: "Đinh Tùng Huy, ACV",
      artwork: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/1/b/e/51be5970b57048f63d0159fc018b1dc3.jpg",
      duration: 335,
      url: "https://mp3-s1-zmp3.zmdcdn.me/686129692728ce769739/8451559035206528892?authen=exp=1654100332~acl=/686129692728ce769739/*~hmac=70199d9847056f3953494859a6c0d1b3&fs=MTY1MzkyNzUzMjmUsICzOXx3ZWJWNnwxMDUyNDEwNzQzfDExOC43MC4yMjkdUngMTQ2",
    },
    {
      encodeId: "ZZ8FBUW9",
      title: "Đám Cưới Nha?",
      artist: "Hồng Thanh, DJ Mie",
      artwork: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/b/8/b/5b8b7cd3d1434afa3b2b9854efdc8756.jpg",
      duration: 175,
      url: "https://mp3-s1-zmp3.zmdcdn.me/d2173ae863a98af7d3b8/7483268733970923050?authen=exp=1654100227~acl=/d2173ae863a98af7d3b8/*~hmac=2e4c2bad97a0bfd991b29e0133ed9b4a&fs=MTY1MzkyNzQyNzmUsICwN3x3ZWJWNnwwfDExNS43OS4zMC4xNw",
    },
    {
      encodeId: "ZZ0W0D9W",
      title: "Không Trọn Vẹn Nữa",
      artist: "Châu Khải Phong, ACV",
      artwork: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/d/7/c/7d7ccc9ef92fe30ab57543b978ab3548.jpg",
      duration: 308,
      url: "https://mp3-s1-zmp3.zmdcdn.me/8e022aad55ecbcb2e5fd/8922617403102115744?authen=exp=1654100424~acl=/8e022aad55ecbcb2e5fd/*~hmac=46766b984ea3e8b99a2227a47b41cde9&fs=MTY1MzkyNzYyNDE5NHx3ZWJWNnwxMDUyMDU2MDAyfDE3MS4yMzkdUngNjIdUngMTEw",
    },
    {
      encodeId: "ZZ9OIWA0",
      title: "Muốn Em Là",
      artist: "Keyo",
      artwork: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/4/0/9/7409e051f6f27cb8e6d241654ebb20d3.jpg",
      duration: 221,
      url: "https://mp3-s1-zmp3.zmdcdn.me/fa5b972fcc6e25307c7f/6725142919303076136?authen=exp=1654100845~acl=/fa5b972fcc6e25307c7f/*~hmac=56ce1c1d6a243ea30166c11a88f34ec7&fs=MTY1MzkyODA0NTYwMnx3ZWJWNnwwfDU0LjE2Mi44Ny4yMjI",
    },
    {
      encodeId: "ZZAU7CAO",
      title: "Trọn Vẹn Nghĩa Tình",
      artist: "Ưng Hoàng Phúc, Wowy",
      artwork: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/f/c/8/7/fc8731ef0a79cdf73c3f30a0f01e4485.jpg",
      duration: 240,
      url: "https://mp3-s1-zmp3.zmdcdn.me/1280d55c941d7d43240c/1793970326057758901?authen=exp=1654100364~acl=/1280d55c941d7d43240c/*~hmac=604f6a51062d30a9230ff49e598a04fb&fs=MTY1MzkyNzU2NDQxMXx3ZWJWNnwwfDEdUngNTIdUngMTYyLjI",
    },
  ]

  const getCurrentUser = async () => {
    try {
      const currentUser = await AsyncStorage.getItem("@user")
      if (currentUser == null) {
        console.log("Khong co user");
        setHasUser(false)
      }
      else {
        setHasUser(true)
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  const getCurrentSong = () => {
    if (songFavorite != []) {
      setHasSong(true)
    }
    else {
      setHasSong(false)
    }
  }

  const renderSong = ({ item }) => {
    return (
      <TouchableOpacity style={styles.songItem}>
        <Image source={{ uri: item.artwork }} style={styles.songImage} resizeMode="cover" />
        <Text style={styles.songName}>{item.title}</Text>
      </TouchableOpacity>
    )
  }

  const FavoriteWithNoUser = () => {
    return (
      <View style={styles.mainContainer}>
        <Image source={errorImage}
          resizeMode="cover"
          style={{
            height: 250,
            width: 250
          }}
        />
        <Text>Vui lòng đăng nhập để sử dụng chức năng</Text>
        <TouchableOpacity
          onPress={() => navigation.replace("Login")}
          style={styles.btnLogin}>
          <Text style={{ color: "#fff" }}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const FavoriteWithUser = () => {
    return (
      <View style={styles.mainContainer}>
        {!hasSong ?
          <Image source={errorImage}
            resizeMode="cover"
            style={{
              height: 250,
              width: 250
            }}
          />
          :
          <View style={styles.listContainer}>
            <FlatList
              data={songFavorite}
              keyExtractor={item => item.encodeId}
              renderItem={renderSong}
            />
          </View>
        }
      </View>
    )
  }

  useEffect(() => {
    getCurrentUser()
    getCurrentSong()
  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerContent}>{route.params.content}</Text>
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={35} color="#fff" />
        </TouchableOpacity>
      </View>

      {hasUser ? <FavoriteWithUser /> : <FavoriteWithNoUser />}

      {/* <View style={styles.mainContainer}>
        <Text>âkaka{hasUser.toString()}</Text>
      </View> */}
    </View>
  )
}

export default SongFavoriteList



