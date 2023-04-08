import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const CustumVerifyInput = ({value,setValue}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChange={setValue}
        style={styles.input}
        maxLength={1}
        keyboardType='decimal-pad'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    width: 30,
    height: 50,
    fontSize: 40,
    borderBottomWidth: 2,
    color: "#1DA1F2",
    borderColor: "#AAB8C2",
    marginHorizontal: 5,
  },
});

export default CustumVerifyInput