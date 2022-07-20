import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import {
  FlatList, Image,
  ScrollView, Text, TextInput,
  TouchableOpacity, View, ActivityIndicator, Keyboard
} from 'react-native'
import Ionicons from "react-native-vector-icons/Ionicons"
import Swiper from 'react-native-swiper'
import styles from './MainStyles'
import { clear } from 'react-native/Libraries/LogBox/Data/LogBoxData'



const options = [
  { id: "1", icon: "musical-notes-outline", name: "Nhạc mới", backgroundColor: "#00B2EE" },
  { id: "2", icon: "bookmarks-outline", name: "Thể loại", backgroundColor: "#FF7F24", colorIcon: "" },
  { id: "3", icon: "ios-star-outline", name: "Top 100", backgroundColor: "#B23AEE" },
  { id: "5", icon: "ios-mic-outline", name: "Karaoke", backgroundColor: "#FF3030", },
  { id: "7", icon: "ios-logo-youtube", name: "Top MV", backgroundColor: "#912CEE" },
  { id: "8", icon: "ios-calendar-outline", name: "Sự kiện", backgroundColor: "#1C86EE" }
]

const Main = () => {
  const navigation = useNavigation()


  const [banner, setBanner] = useState([])
  const [top, setTop] = useState([])
  const [suggestSong, setSuggestSong] = useState([])
  const [choiceTodaySong, setChoiceTodaySong] = useState([])
  const [radio, setRadio] = useState([])
  const typingSearch = useRef(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [showSearch, setShowSearch] = useState(false)

  const [result, setResult] = useState()

  const fetchTop100 = async () => {
    await axios.get("https://ma-of-d-sever.vercel.app/api/top100")
      .then(res => {
        setTop(res.data.data[0].items)
      })
  }

  const fetchHome = async () => {
    await axios.get("https://ma-of-d-sever.vercel.app/api/home?page=1")
      .then(res => {
        setBanner(res.data.data.items[0].items)
        setSuggestSong(res.data.data.items[3].items)
        setChoiceTodaySong(res.data.data.items[4].items)
        setRadio(res.data.data.items[5].items)
      })
  }

  // const SearchContainer = () => {
  //   return (
  //     <View style={{
  //       height: 150,
  //       width: "100%",
  //       backgroundColor: "green",
  //       zIndex: 99999
  //     }}>
  //       {result ?
  //         <View>
  //           <Text key={result.encodeId}>{result.title || result.name}</Text>
  //         </View>
  //         :
  //         <Text>Kết quả tìm thấy</Text>
  //       }
  //     </View>
  //   )
  // }

  // const handleShowSearch = () => {
  //   setShowSearch(true)
  //   setShowCloseButton(true)
  // }

  // const handleHideSearch = () => {
  //   setSearchTerm("")
  //   Keyboard.dismiss()
  //   setShowSearch(false)
  //   setShowCloseButton(false)
  // }

  // const handleSearch = (value) => {
  //   let keyword = value.split(" ").join("-")

  //   if (keyword === "") return

  //   axios.get(`https://music-player-pink.vercel.app/api/search?keyword=${keyword}`)
  //     .then(res => {
  //       if (res.status == 200) {
  //         console.log("ressss", res.data.data);
  //         setResult(res.data.data)
  //       }
  //       else {
  //         setResult("")
  //       }
  //     })
  // }

  // const handleChangeValueSearch = (valueSearch) => {

  //   setSearchTerm(valueSearch)

  //   if (typingSearch.current) {
  //     clearTimeout(typingSearch.current)
  //   }

  //   typingSearch.current = setTimeout(() => {
  //     handleSearch(valueSearch)
  //   }, 500)

  // }

  useEffect(() => {
    fetchHome()
    fetchTop100()
  }, [])


  const renderPlayList = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.listContainer}
        onPress={() => navigation.navigate("PlayList", { key: item.encodeId, content: item.title })}
      >
        <Image
          style={styles.imgThumbnail}
          source={{ uri: item.thumbnail }}
          resizeMode="cover" />
      </TouchableOpacity>
    )
  }

  const renderTopOptions = ({ item }) => {

    return (
      <View style={styles.topOptionItem}>
        <TouchableOpacity style={styles.btnTopOption}>
          <View style={{ backgroundColor: item.backgroundColor, ...styles.topOptionIcon }}>
            <Ionicons name={item.icon} size={24} color="#fff" />
          </View>
          <Text style={styles.topOptionTitle}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <ScrollView contentContainerStyle={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>

        {/* <View style={styles.searchContainer}> */}
          {/* <TextInput
            style={styles.inputSearch}
            value={searchTerm}
            placeholder="Nhập tên ca sĩ, tên bài hát"
            onChangeText={e => handleChangeValueSearch(e)}
            onFocus={() => handleShowSearch()}
            onSubmitEditing={() => {
              Keyboard.dismiss()
              setShowSearch(false)
            }}
          />
          {showCloseButton ?
            <TouchableOpacity style={{
              position: "absolute",
              right: 10,
              top: 10
            }}
              onPress={() => handleHideSearch()}
            >
              <Ionicons name='close-circle-outline' size={18} color="#000" />
            </TouchableOpacity>
            :
            null
          }

          {showSearch ? <SearchContainer /> : null} */}
        {/* </View> */}

        <View style={styles.bannerContainer}>
          {banner.length > 0 ?
            <Swiper style={styles.wrapper}
              loop={true}
              autoplay={true}
              autoplayTimeout={5}
              dotStyle={{
                backgroundColor: "#fff",
                borderRadius: 999,
                opacity: 0.3,
                bottom: -25
              }}
              activeDotStyle={{
                bottom: -25,
                backgroundColor: "#fff",
                opacity: 0.8,
                borderRadius: 999
              }}
            >
              {banner.map((item) => {
                return (
                  <View style={styles.banner} key={item.encodeId}>
                    <Image source={{ uri: item.banner }}
                      resizeMode="cover"
                      style={styles.bannerImg} />
                  </View>
                )
              })}
            </Swiper>
            :
            <View style={[styles.banner, { justifyContent: "center", alignItems: "center" }]}>
              <ActivityIndicator size="large" color="#000"></ActivityIndicator>
            </View>
          }
        </View>

        <View style={styles.topOptionContainer}>
          <FlatList
            data={options}
            keyExtractor={item => item.id}
            renderItem={renderTopOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}
            onPress={() => navigation.navigate("Top100")}
          >Top 100
          </Text>

          <FlatList
            data={top}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>


        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Có thể bạn muốn nghe</Text>
          <FlatList
            data={suggestSong}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>


        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Lựa chọn hôm nay</Text>
          <FlatList
            data={choiceTodaySong}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>

        <View style={styles.recomendedContainer}>
          <Text style={styles.textHeader2}>Radio</Text>
          <FlatList
            data={radio}
            keyExtractor={(item) => item.encodeId}
            renderItem={({ item }) => renderPlayList({ item })}
            showsHorizontalScrollIndicator={false}
            horizontal
          />
        </View>
        <View style={{ height: 20 }} />
      </ScrollView>
    </View>
  )
}

export default Main
