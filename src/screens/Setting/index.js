import React, { useEffect, useState } from "react"
import { Text, View, TouchableOpacity, Image, ScrollView, Switch } from "react-native"
import styles from "./SettingStyles"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from "@react-native-async-storage/async-storage"

const Setting = () => {
  const navigation = useNavigation()

  const [user, setUser] = useState({})

  const getCurrentUser = async () => {
    try {
      const currentUser = await AsyncStorage.getItem("@user")
      if (JSON.parse(currentUser) == {}) {
        console.log("Loi");
      }
      else {
        setUser(JSON.parse(currentUser))
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("@user")
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    removeUser()
    navigation.replace("Login")
  }


  useEffect(() => {
    getCurrentUser()

  }, [])


  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Thiết lập cài đặt</Text>
      </View>

      <View style={styles.avatarContainer}>
        <View style={styles.userContainer}>
          <Text style={styles.userName}>
            {user ? user.name : `Chua dang nhap`}
          </Text>
          <Text style={styles.userAddress}>{
            user ?
              user.address
              :
              null
          }</Text>
        </View>
        <Image source={
          user ?
            { uri: user.avatar }
            :
            require("../../assets/user.png")
        }
          style={styles.avatarImage}
          resizeMode="cover" />
      </View>

      <View style={styles.mainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.accountSettingContainer}>
            <Text style={{
              fontSize: 18,
              color: "#000",
              marginBottom: 10,
              marginTop: 15
            }}>Tài khoản</Text>
            <View>
              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Chỉnh sửa thông tin cá nhân</Text>
                  <Text style={styles.itemDescription}>Thay đổi ảnh đại diện, tên và các thông tin về bạn</Text>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="navigate-next" size={24} color="#000" />
                </TouchableOpacity>
              </View>

              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Đăng ký</Text>
                  <Text style={styles.itemDescription}>Thay đổi hình thức đăng ký</Text>
                </View>

                <TouchableOpacity>
                  <MaterialIcons name="navigate-next" size={24} color="#000" />
                </TouchableOpacity>
              </View>


              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Phương thức thanh toán</Text>
                  <Text style={styles.itemDescription}>Thay đổi phương thức thanh toán của bạn</Text>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="navigate-next" size={24} color="#000" />
                </TouchableOpacity>
              </View>


              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Tài khoản liên kết</Text>
                  <Text style={styles.itemDescription}>Chỉnh sửa tài khoản mạng xã hội được liên kết</Text>
                </View>
                <TouchableOpacity>
                  <MaterialIcons name="navigate-next" size={24} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.playbackSettingContainer}>
            <Text style={{
              fontSize: 18,
              color: "#000",
              marginBottom: 10,
              marginTop: 15
            }}>Trình phát nhạc</Text>

            <View>
              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Bộ chỉnh âm</Text>
                  <Text style={styles.itemDescription}>Tuỳ chỉnh bộ chỉnh âm tốt nhất</Text>
                </View>
                <MaterialIcons name="navigate-next" size={24} color="#000" />
              </View>

              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Chế độ ngoại tuyến</Text>
                  <Text style={styles.itemDescription}>Bạn chỉ có thể nghe những bài hát đã được tải về</Text>
                </View>
                <Switch />
              </View>

              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Không gián đoạn</Text>
                  <Text style={styles.itemDescription}>Cho phép phát lại không bị gián đoạn</Text>
                </View>
                <Switch />
              </View>

              <View style={styles.itemSettingContainer}>
                <View>
                  <Text style={styles.itemSettingText}>Âm lượng trung bình</Text>
                  <Text style={styles.itemDescription}>Đặt mức âm lượng cho toàn bô bài hát</Text>
                </View>
                <Switch />
              </View>

            </View>
          </View>

          <TouchableOpacity onPress={() => logout()}
            style={styles.btnLogout}>
            <Ionicons name="ios-power-outline" size={25} color="#fff" />
            <Text style={[styles.itemSettingText, { color: "#fff" }]}>Đăng xuất</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}
export default Setting
