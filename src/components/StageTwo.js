import { StyleSheet, View } from 'react-native'
import React, { Component, useContext } from 'react'
import { Input, Button, ListItem, Text } from 'react-native-elements';
import { MyContext } from '../context/context';

export default function StageTwo() {

  const context = useContext(MyContext);

  return (
    <View>
      <Text>The looser is</Text>
      <Text style={{ marginTop: 30, fontSize: 30 }}>{context.state.result}</Text>

      <Button
        buttonStyle={styles.button}
        title="Try Again"
        onPress={() => context.getNewLooser()}
      />

      <Button
        buttonStyle={styles.button}
        title="Game Over"
        onPress={() => context.resetGame()}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
      backgroundColor:'#41B6E6',
      marginTop:20
  }
})