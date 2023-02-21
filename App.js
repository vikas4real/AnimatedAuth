import { useState } from "react";
import {
   Dimensions,
   Text,
   View,
   StyleSheet,
   TextInput,
   Pressable,
} from "react-native";
import Animated, {
   useSharedValue,
   useAnimatedStyle,
   interpolate,
   withTiming,
   withDelay,
   runOnJS,
   withSequence,
   withSpring,
} from "react-native-reanimated";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import styles from "./styles";

export default function App() {
   const { height, width } = Dimensions.get("window");

   const [isRegister, setIsRegister] = useState(false);

   const imagePosition = useSharedValue(1);
   const formButtonSize = useSharedValue(1);

   const imageAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(
         imagePosition.value,
         [0, 1],
         [-height / 1.8, 0]
      );
      return {
         transform: [
            { translateY: withTiming(interpolation, { duration: 1000 }) },
         ],
      };
   });
   const loginHandler = () => {
      imagePosition.value = 0;
      if (isRegister) {
         runOnJS(setIsRegister)(false);
      }
   };
   const registerHandler = () => {
      imagePosition.value = 0;
      if (!isRegister) {
         runOnJS(setIsRegister)(true);
      }
   };

   const buttonAnimatedStyle = useAnimatedStyle(() => {
      const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
      return {
         opacity: withTiming(imagePosition.value, { duration: 500 }),
         transform: [
            { translateY: withTiming(interpolation, { duration: 1000 }) },
         ],
      };
   });

   const closeButtonContainerStyle = useAnimatedStyle(() => {
      return {
         opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {
            duration: 500,
         }),
      };
   });

   const formAnimatedstyle = useAnimatedStyle(() => {
      return {
         opacity:
            imagePosition.value === 0
               ? withDelay(400, withTiming(1, { duration: 800 }))
               : withTiming(0, { duration: 300 }),
      };
   });
   const formButtonAnimatedStyle = useAnimatedStyle(() => {
      return {
         transform: [{ scale: formButtonSize.value }],
      };
   });

   return (
      <Animated.View style={styles.container}>
         <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
            <Svg height={height + 100} width={width}>
               <ClipPath id="clipPathId">
                  <Ellipse cx={width / 2} rx={height} ry={height + 100} />
               </ClipPath>
               <Image
                  href={require("./assets/login-background.jpg")}
                  height={height + 100}
                  width={width + 100}
                  preserveAspectRatio="xMidyMid slice"
                  clipPath="url(#clipPathId)"
               />
            </Svg>
            <Animated.View
               style={[styles.closeButtonContainer, closeButtonContainerStyle]}
            >
               <Text onPress={() => (imagePosition.value = 1)}>X</Text>
            </Animated.View>
         </Animated.View>
         <View style={styles.bottomContainer}>
            <Animated.View style={buttonAnimatedStyle}>
               <Pressable style={styles.button} onPress={loginHandler}>
                  <Text style={styles.buttonText}>LOG IN</Text>
               </Pressable>
            </Animated.View>
            <Animated.View style={buttonAnimatedStyle}>
               <Pressable style={styles.button} onPress={registerHandler}>
                  <Text style={styles.buttonText}>REGISTER</Text>
               </Pressable>
            </Animated.View>

            {/*<----------------- Register Form Starts Here--------------->*/}
            <Animated.View
               style={[styles.formInputContainer, formAnimatedstyle]}
            >
               {isRegister && (
                  <TextInput
                     placeholder="Your Name"
                     placeholderTextColor={"black"}
                     style={styles.textInput}
                  />
               )}
               <TextInput
                  placeholder="E-mail"
                  placeholderTextColor={"black"}
                  style={styles.textInput}
               />

               <TextInput
                  placeholder="Password"
                  placeholderTextColor={"black"}
                  style={styles.textInput}
               />
               <Animated.View
                  style={[styles.formButton, formButtonAnimatedStyle]}
               >
                  <Pressable
                     onPress={() =>
                        (formButtonSize.value = withSequence(
                           withSpring(1.2),
                           withSpring(1)
                        ))
                     }
                  >
                     <Text style={styles.buttonText}>
                        {isRegister ? "REGISTER" : "LOG IN"}
                     </Text>
                  </Pressable>
               </Animated.View>
            </Animated.View>
            {/*<----------------- Register Form Ends Here--------------->*/}
         </View>
      </Animated.View>
   );
}
