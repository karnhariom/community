import { Dimensions, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const abc = Dimensions.get("window").height
const def = Dimensions.get("window").width
export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        gap: 10,
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "column",
      }}
    >
      <Image
        source={require("@/assets/images/community.jpg")}
        style={{
          width: "100%",
          resizeMode: "contain",
          height: abc * 3 / 5,
        }}
      />
      <Text style={{
        fontWeight: "bold",
        fontSize: 100,
        color: "#E27648"

      }}>
        नमस्ते
      </Text>
      <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: def,
        padding: 20,
        gap: 20
      }}>
        <TouchableOpacity style={{
          backgroundColor: "#E27648",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
        }} activeOpacity={.8}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold"
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: "#E27648",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 10,
        }}>
          <Text style={{
            color: "white",
            fontWeight: "bold",
            textAlign: "center"
          }}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 35,
    fontFamily: 'Gill Sans',
    fontWeight: 'bold',
  },
});
