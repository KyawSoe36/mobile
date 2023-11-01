import { StyleSheet, Text, View, Button, FlatList, Pressable } from 'react-native'
import React from 'react'
import ProductItem from './ProductItem'
import { PRODUCTS_LIST } from '../data/constants'
import Separator from './Separator'


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
      data={PRODUCTS_LIST}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={Separator}
      renderItem={({item}) => (
        <Pressable
        onPress={() => {
          navigation.navigate('Details', {
            product: item
          })
        }}
        >
          <ProductItem product={item}/>
        </Pressable>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
})

export default Home

