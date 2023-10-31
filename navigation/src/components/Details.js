import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = ({ route }) => {
  const params = route.params;

  return (
    <View>
      <Text>{params.itemId}</Text>
      <Text>Details Page</Text>
    </View>
  )
}

export default Details

const styles = StyleSheet.create({})