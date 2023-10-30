import { StatusBar } from 'expo-status-bar';
import { React, useContext } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MyContext } from './src/context/context';
import StageOne from './src/components/StageOne';
import StageTwo from './src/components/StageTwo';
import { useFonts } from '@expo-google-fonts/pacifico';



export default function App() {
  let [fontsLoaded] = useFonts({
    'Pacifico-Regular': require('./src/assets/fonts/Pacifico-Regular.ttf'), // Adjust the path to your font file
  });

  const context = useContext(MyContext);

  return (
    <ScrollView>
      <View style={styles.container}>

        {console.log("Logging ", context.state)}
        {

          context.state.stage === 1 ?
            <StageOne />
            :
            <StageTwo />

        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80

  },
});
