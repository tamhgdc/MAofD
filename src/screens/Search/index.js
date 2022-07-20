import { View, Text, Image, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import styles from './SearchStyles'
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import axios from 'axios'
import { removeVietnameseTones } from '../../constant/constant'





const Search = () => {

  const topSearch = ["erik", "có không giữ", "thương em", "trọn vẹn nghĩa tình"]

  const typingSearch = useRef(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [result, setResult] = useState()
  const [showCloseButton, setShowCloseButton] = useState(false)

  console.log(result);

  const handleShowSearch = () => {
    setShowCloseButton(true)
  }

  const handleHideSearch = () => {
    setSearchTerm("")
    Keyboard.dismiss()
    setShowCloseButton(false)
  }

  const handleSearch = (value) => {
    let str = removeVietnameseTones(value)
    let keyword = str.split(" ").join("-")
    if (keyword === "") return
    axios.get(`https://ma-of-d-sever.vercel.app/api/search?keyword=${keyword}`)
      .then(res => {
        if (res.status == 200) {
          setResult(res.data.data.top)
        }
        else {
          setResult({})
        }
      })
  }

  const handleChangeValueSearch = (valueSearch) => {
    setSearchTerm(valueSearch)
    if (typingSearch.current) {
      clearTimeout(typingSearch.current)
    }
    typingSearch.current = setTimeout(() => {
      handleSearch(valueSearch)
    }, 500)
  }

  const handleTopSearch = (value) => {
    handleShowSearch()
    setSearchTerm(value)
    handleSearch(value)
  }

  const renderResult = () => {
    return (
      <View style={{ height: "100%", width: "100%", flex: 1 }}>
        {
          result ?
            (
              <View style={styles.resultContainer}>
                <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={{ uri: result.thumbnail }} style={styles.resultImage} resizeMode="cover" />
                    <Text numberOfLines={1}
                      style={{ color: "#000", marginLeft: 15, fontSize: 16, paddingRight: 55, maxWidth: "80%" }}
                      ellipsizeMode="tail"
                    >{result.name || result.title}</Text>
                  </View>
                  <Feather name='arrow-up-right' size={24} color="black" />
                </View>
              </View>
            )
            :
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", height: "100%", width: "100%" }}>
              <ActivityIndicator size="large" />
              <Text>Đang tải...</Text>
            </View>
        }
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.inputSearch}
          value={searchTerm}
          placeholder="Nhập tên ca sĩ, tên bài hát"
          onChangeText={e => handleChangeValueSearch(e)}
          onFocus={() => handleShowSearch()}
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
      </View>
      <View style={styles.mainContainer}>
        {searchTerm == "" && (
          <View style={styles.topSearchContainer}>
            <Text style={{
              color: "#000",
              fontSize: 16
            }}>Các kết quả tìm kiếm nhiều nhất</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 5 }}>
              {topSearch.map((item, index) => {
                return (
                  <TouchableOpacity style={styles.searchItemContainer}
                    key={index}
                    onPress={() => handleTopSearch(item)}>
                    <Text style={styles.itemSearch}>{item}</Text>
                    <Feather name='arrow-up-right' size={14} color="black" />
                  </TouchableOpacity>
                )
              })}
            </View>
          </View>
        )}
        {searchTerm != "" && renderResult()}
      </View>
    </View>
  )
}

export default Search