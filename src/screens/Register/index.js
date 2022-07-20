import React, { useState } from "react"
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native'
// import Ionicons from "react-native-vector-icons/Ionicons"
import styles from "./RegisterStyles"
import axios from "axios"

const Register = () => {

  const navigation = useNavigation()

  const registerSuccess = () => {
    Alert.alert(
      "Đăng kí thành công.",
      "Bạn đã đăng ký tài khoản thành công.",
      [
        {
          text: "OK",
          onPress: () => navigation.replace("Login"),
          style: "Ok",
        },
      ]
    )
  }

  const registerError = () => {
    Alert.alert(
      "Đăng ký không thành công.",
      "Vui lòng nhập lại chính xác mật khẩu.",
      [
        {
          text: "Ok",
          style: "Ok",
        },
      ]
    )
  }
  const register = async () => {
    if (password === confirmPassword) {
      try {
        await axios.post("https://623c81458e9af58789521e31.mockapi.io/duongd/api/v1/user", { username, password })
      } catch (error) {
        console.log(error)
      }
      registerSuccess()
    }
    else {
      registerError()
    }
  }

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangeUsername = (value) => {
    setUsername(value)
  }

  const handleChangePassword = (value) => {
    setPassword(value)
  }

  const handleConfirmPassword = (value) => {
    setConfirmPassword(value)
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

        <TextInput
          style={styles.inputAccount}
          placeholder="Nhập lại mật khẩu"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(value) => handleConfirmPassword(value)}
        />


        <TouchableOpacity style={styles.btnSubmit}
          onPress={() => register()}>
          <Text style={styles.txtSubmit}>Đăng kí</Text>
        </TouchableOpacity>
        <Text style={{ color: "#000" }}>Đã có tài khoản?
          <Text
            style={{ fontWeight: "800", color: "#000" }}
            onPress={() => navigation.navigate("Login")}>  Đăng nhập</Text>
        </Text>
      </View>
    </View>
  )
}

export default Register