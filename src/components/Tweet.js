import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { Video, ResizeMode } from "expo-av";

const Tweet = ({ name, username, text, image, video, profileImage }) => {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [commented, setCommented] = useState(false);
  const [status, setStatus] = React.useState({});

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
  };

  const handleComment = () => {
    setCommented(!commented);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: profileImage }} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.username}>{username}</Text>
        </View>
        {text && <Text style={styles.text}>{text}</Text>}
        {image && <Image source={{ uri: image }} style={styles.media} />}
        {video && (
          <Video
            // ref={video}
            style={styles.media}
            source={{
              uri: video,
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        )}
        <View style={styles.actions}>
          <TouchableOpacity onPress={handleLike} style={styles.action}>
            <AntDesign
              name={liked ? "heart" : "hearto"}
              size={20}
              color={liked ? "#e0245e" : "#AAB8C2"}
            />
            <Text style={liked ? styles.actionTextLiked : styles.actionText}>
              {liked ? "Liked" : "Like"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRetweet} style={styles.action}>
            <Feather
              name="repeat"
              size={20}
              color={retweeted ? "#17bf63" : "#AAB8C2"}
            />
            <Text
              style={retweeted ? styles.actionTextRetweeted : styles.actionText}
            >
              {retweeted ? "Retweeted" : "Retweet"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleComment} style={styles.action}>
            <Ionicons
              name="chatbubble-outline"
              size={20}
              color={commented ? "#1da1f2" : "#AAB8C2"}
            />
            <Text
              style={commented ? styles.actionTextCommented : styles.actionText}
            >
              {commented ? "Commented" : "Comment"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderBottomColor: "#E1E8ED",
    borderBottomWidth: 1,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    marginRight: 5,
  },
  username: {
    color: "#AAB8C2",
  },
  text: {
    marginTop: 5,
  },
  media: {
    marginTop: 5,
    width: "100%",
    height: 200,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
  },
  actionText: {
    marginLeft: 5,
    color: "#AAB8C2",
    fontSize: 12,
  },
  actionTextLiked: {
    marginLeft: 5,
    color: "#e0245e",
    fontSize: 12,
  },
  actionTextRetweeted: {
    marginLeft: 5,
    color: "#17bf63",
    fontSize: 12,
  },
  actionTextCommented: {
    marginLeft: 5,
    color: "#1da1f2",
    fontSize: 12,
  },
});

export default Tweet;
