import axios from "axios"
import React, { useState, useEffect } from "react"
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native'
import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./LoginStyles"
import AsyncStorage from "@react-native-async-storage/async-storage"

const Login = () => {

  const navigation = useNavigation()

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const [account, setAccount] = useState()

  const showAlert = () => {
    Alert.alert(
      "Đăng nhập thất bại!",
      `Thông tin tài khoản hoặc mật khẩu không chính xác.
Vui lòng nhập lại.`,
      [
        {
          text: "Ok",
          style: "Ok",
        },
      ]
    )
  }
  // const login = () => {
  //   if (username === "admin" && password === "admin") {
  //     // navigation.replace("HomeMusic")
  //   }
  //   else {
  //     showAlert()
  //   }
  // }


  const getUser = async () => {
    axios.get("https://623c81458e9af58789521e31.mockapi.io/duongd/api/v1/user")
      .then(res =>
        // console.log(res.data)
        setAccount(res.data)
      )
  }

  useEffect(() => {
    getUser()
  }, [])

  const storeUser = async (value) => {
    try {
      const userJson = JSON.stringify(value)
      await AsyncStorage.setItem("@user", userJson)
    } catch (e) {
      console.log(e);
    }


  }


  const logIn = () => {
    let isSuccess = false;
    account.forEach(async (item) => {
      if (item.username === username && item.password === password) {
        isSuccess = true;
        await storeUser(item)
        navigation.replace("HomeMusic")

      }
    });
    if (!isSuccess) {
      showAlert()
    } else {
      console.log("Thanh cong");
    }
  };


  const handleChangeUsername = (value) => {
    setUsername(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }


  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../assets/iconMain.jpg")} style={styles.image} />
        <Text style={styles.appName}>MAofD</Text>
      </View>
      <View>
      </View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.inputAccount}
          placeholder="Tên đăng nhập"
          value={username}
          onChangeText={(value) => handleChangeUsername(value)}
        />
        <TextInput
          style={styles.inputAccount}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={(value) => handleChangePassword(value)}
        />
        <TouchableOpacity style={styles.btnSubmit}
          onPress={() => logIn()}>
          <Text style={styles.txtSubmit}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text style={{ color: "#000" }}>Chưa có tài khoản?
          <Text
            style={{ fontWeight: "800", color: "#000" }}
            onPress={() => navigation.navigate("Register")}>  Tạo tài khoản</Text>
        </Text>
      </View>
      <View style={{ height: 50, flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 120, height: 2, backgroundColor: "#fff" }}></View>
        <Text style={{ marginHorizontal: 30, fontSize: 16, fontWeight: "400", color: "#fff" }}>Hoặc</Text>
        <View style={{ width: 120, height: 2, backgroundColor: "#fff" }}></View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.btnLoginGoogle}
          onPress={() => logIn()}
          activeOpacity={0.6}
        >
          <Ionicons name="logo-google" size={24} color="#fff" />
          <Text style={styles.txtLogin}>Đăng nhập bằng Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login