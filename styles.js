import { StyleSheet, Dimensions, Platform } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "flex-end",
   },
   closeButtonContainer: {
      height: 40,
      width: 40,
      justifyContent: "center",
      alignSelf: "center",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 1,
      backgroundColor: "white",
      alignItems: "center",
      borderRadius: 20,
      top: -20,
   },
   button: {
      backgroundColor: "rgba(123,104,238,0.8)",
      height: 55,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 35,
      borderColor: "white",
      borderWidth: 1,
   },
   buttonText: {
      fontSize: 20,
      fontWeight: "600",
      color: "white",
      letterSpacing: 0.5,
   },
   bottomContainer: {
      justifyContent: "center",
      height: height / 3,
   },
   textInput: {
      height: 50,
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 25,
      paddingLeft: 10,
   },
   formButton: {
      backgroundColor: "rgba(123,104,238,0.8)",
      height: 55,
      alignItems: "center",
      justifyContent: "center",
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 35,
      borderColor: "white",
      borderWidth: 1,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 4,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
   },
   formInputContainer: {
      marginBottom: 70,
      ...StyleSheet.absoluteFill,
      zIndex: -1,
      justifyContent: "center",
   },
});

export default styles;
