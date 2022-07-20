import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View, Image, Modal, Pressable, TextInput, Switch } from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import styles from './FavoriteStyles'
import { useNavigation } from '@react-navigation/native'
import Feather from "react-native-vector-icons/Feather"




const playlist = [{ id: 1, image: "", namePlaylist: "List 1" },
{ id: 2, image: "", namePlaylist: "List 2" },
{ id: 3, image: "", namePlaylist: "List 3" },
]

const Favorites = () => {

  const navigation = useNavigation()

  const [visibleModalCreatePlaylist, setVisibleModalCreatePlaylist] = useState(false)
  const [newNamePlaylist, setNewNamePlaylist] = useState("")
  const [privatePlaylist, setPrivatePlaylist] = useState(0)
  const [playAZ, setPlayAZ] = useState(0)

  const handleShowModalCreatePlaylist = () => {
    setVisibleModalCreatePlaylist(true)
    setNewNamePlaylist("")
  }

  const handleChangePrivate = () => {
    setPrivatePlaylist(!privatePlaylist)
  }

  const handleChangePlayAZ = () => {
    setPlayAZ(!playAZ)
  }

  const handleChangeNewNamePlaylist = (e) => {
    console.log(e);
    setNewNamePlaylist(e)
  }

  const handleCreatePlaylist = () => {
    const i = playlist.length
    if (newNamePlaylist === "") return
    let newPlaylist = {
      id: i + 1,
      namePlaylist: newNamePlaylist,
      image: ""
    }

    playlist.push(newPlaylist)
    setVisibleModalCreatePlaylist(!visibleModalCreatePlaylist)
  }

  const renderList = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={{
          flexDirection: "row",
          height: 45,
          margin: 5,
          alignItems: "center",
          padding: 10
        }}>
        <View style={{
          height: 35, width: 35,
          borderRadius: 5,
          backgroundColor: "#f0f0f0", marginRight: 15, justifyContent: "center", alignItems: "center"
        }} >
          <Ionicons name="ios-musical-notes-outline" size={20} color="#262626" />
        </View>
        <Text style={{
          color: "#000"
        }}>{item.namePlaylist}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Thư viện</Text>
      </View>

      <ScrollView

        style={styles.favoriteListContainer}>

        <View style={{ marginTop: 20, marginBottom: 10 }}>
          <Text style={styles.titleContent}>Lựa chọn của bạn</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.musicLibries}>

            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                style={styles.btnLibraly}
                onPress={() => navigation.navigate("SongFavorites", { content: "Bài hát" })}
              >
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-musical-notes-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Bài hát</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Trên thiết bị" })}
                style={styles.btnLibraly}
              >
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-cloud-download-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Trên thiết bị</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Upload" })}
                style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-cloud-upload-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Upload</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Karaoke" })}
                style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <MaterialCommunityIcons name="microphone-variant" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Karaoke</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "column" }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("SongFavorites", { content: "Podcast" })}
                style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <FontAwesome name="podcast" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Podcast</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnLibraly}>
                <View style={styles.iconLibralyContainer}>
                  <View style={styles.iconLibraly}>
                    <Ionicons name="ios-musical-notes-outline" size={25} color="#000" />
                  </View>
                  <Text style={styles.titleLibralyContent}>Bài hát</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={{
          paddingLeft: 15
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: "600",
            color: "#000"
          }}>Playlist</Text>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                height: 45,
                width: 45,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => handleShowModalCreatePlaylist()}
            >
              <Feather name='plus-circle' size={20} color="#fff" />

            </TouchableOpacity>
            <Text style={{
              marginLeft: 10,
              fontSize: 13,
              fontWeight: "400",
              color: "#000"
            }}>Tạo Playlist mới</Text>
          </View>
          <View style={{
            marginTop: 10, width: "95%"
          }}>
            {playlist.map((item) => renderList(item))}
          </View>

        </View>
        {visibleModalCreatePlaylist ?
          <Modal
            animationType="fade"
            transparent={true}
            visible={visibleModalCreatePlaylist}
            onRequestClose={() => {
              setVisibleModalCreatePlaylist(!visibleModalCreatePlaylist)
            }}
          >
            <View style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}>
              <View style={styles.modalContainer}>
                <View style={{
                  height: 50,
                  width: "100%",
                  justifyContent: "flex-start",
                  alignItems: "flex-end"
                }}>

                  <Ionicons name='ios-close-outline' size={24} color="#000" onPress={() => setVisibleModalCreatePlaylist(false)} />
                </View>
                <View style={{
                  width: "100%"
                }}>
                  <View style={{
                    flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between", marginBottom: 15
                  }}>

                    <Text style={{
                      textAlign: "left", color: "#000"
                    }}>Tên</Text>

                    <TextInput autoFocus
                      onChangeText={(e) => handleChangeNewNamePlaylist(e)}
                      style={{
                        height: 34,
                        borderBottomWidth: 0.6,
                        width: "80%"
                      }} />
                  </View>
                  <View style={{
                    flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between", marginBottom: 15
                  }}>

                    <Text style={{
                      textAlign: "left", color: "#000"
                    }}>Riêng tư</Text>

                    <Switch
                      // trackColor={{ false: "#ccc", true: "orange" }}
                      value={privatePlaylist}
                      onValueChange={() => handleChangePrivate()} />
                  </View>
                  <View style={{
                    flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-between", marginBottom: 15
                  }}>

                    <Text style={{
                      textAlign: "left", color: "#000"
                    }}>Phát tuần tự</Text>

                    <Switch
                      // trackColor={{ false: "#ccc", true: "orange" }}
                      value={playAZ}
                      onValueChange={() => handleChangePlayAZ()} />
                  </View>
                </View>

                <Pressable
                  style={{
                    borderRadius: 20,
                    padding: 10,
                    elevation: 2,
                    backgroundColor: "red",
                    width: 150
                  }}
                  onPress={() => handleCreatePlaylist()}
                >
                  <Text style={{
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}>Tạo Playlist</Text>
                </Pressable>



              </View>
            </View>
          </Modal>
          : null
        }

        <View style={styles.suggestPlaylistContainer}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
              color: "#000"
            }}
          >Playlist gợi ý</Text>
          <Text
            style={{
              fontSize: 12,
              color: "#262626",
              fontWeight: "400"
            }}
          >Đang được nghe nhiều</Text>
          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text style={{
                fontSize: 14,
                color: "#000"
              }}>Đỉnh cao trending</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>

          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text style={{
                fontSize: 14,
                color: "#000"
              }}>Ballad Việt Nam</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>

          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text style={{
                fontSize: 14,
                color: "#000"
              }}>K-Pop Solo</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>

          <TouchableOpacity style={styles.suggestPlaylistItem}>

            <Image style={{
              height: 35,
              width: 35,
              backgroundColor: "green",
              borderRadius: 5,
              marginRight: 15
            }} />
            <View>
              <Text style={{
                fontSize: 14,
                color: "#000"
              }}>Love Pop</Text>
              <Text style={{ fontSize: 10 }}>Zing MP3</Text>
            </View>


          </TouchableOpacity>
        </View>

      </ScrollView>

    </View>
  )
}

export default Favorites