import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './Top100Styles'
import axios from 'axios'

import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'

const Top100 = () => {

  const [totalData, setTotalData] = useState([])
  const navigation = useNavigation()

  const fetchTop = async () => {
    await axios.get("https://ma-of-d-sever.vercel.app/api/top100")
      .then(res => {
        setTotalData(res.data.data)
      })
  }

  useEffect(() => {
    fetchTop()
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


  const renderTop = (item) => {
    const { title, items } = item

    return (
      <View style={styles.recomendedContainer}>
        <Text style={styles.textHeader2}>{title}</Text>
        <FlatList
          data={items}
          keyExtractor={(item) => item.encodeId}
          renderItem={({ item }) => renderPlayList({ item })}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.btnBack}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="ios-chevron-back" size={35} color="#000" />
        </TouchableOpacity>
        <Text style={styles.topHeader}>Top 100</Text>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView>
          {
            totalData.map((item) => {
              return (
                <View>{renderTop(item)}</View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default Top100