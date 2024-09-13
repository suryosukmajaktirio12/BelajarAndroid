import { Text, View, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";
import { CustomeCard } from "@/components";
export default function Index() {
  return (
    <View>
      <View style={style.container}>
        <Image
          style={style.tinyLogo}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={style.textName}>Suryo Sukma Jakti</Text>
        <Text style={[style.subText, style.textWhite]}>
          jaktisuryo@gmail.com
        </Text>
        <Link href="/experience" style={[style.subText, style.textWhiteLink]}>
          Experience
        </Link>
      </View>
      <View style={style.border}>
        <CustomeCard />
        <CustomeCard />
        <CustomeCard />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#0E627C",
    height: 250,
    borderBottomEndRadius: 32,
    borderEndStartRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  textName: {
    color: "white",
    fontSize: 24,
  },
  subText: {
    fontSize: 14,
  },
  textWhite: {
    color: "white",
  },
  textWhiteLink: {
    color: "white",
    textDecorationLine: "underline",
  },
  tinyLogo: {
    height: 100,
    width: 100,
  },
  border: {
    top: -25,
    paddingLeft: 20,
    paddingRight: 25,
  },
});
