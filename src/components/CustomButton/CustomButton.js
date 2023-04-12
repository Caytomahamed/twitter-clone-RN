import { Pressable, Text, StyleSheet } from "react-native";

// navigation handler
export const onPress = (navivagtion, screen) => {
  return navivagtion.navigate(`${screen}`);
};
const CustomButton = ({
  title,
  onPress,
  style,
  color = "#2196F3",
  fontSize,
  width,
  textColor = "#fff",
  borderRadius,
  padding = 10,
}) => {
  return (
    <Pressable
      style={[
        styles.button,
        style,
        {
          backgroundColor: color,
          width: width,
          borderRadius: borderRadius,
          padding: padding,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={[styles.buttonText, { fontSize: fontSize, color: textColor }]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
