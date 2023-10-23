import { StatusBar } from 'expo-status-bar';
import {React, useContext} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MyContext } from './src/context/context';
import StageOne from './src/components/StageTwo';
import StageTwo from './src/components/StageOne';



export default function App() {
  const context = useContext(MyContext);

  return (
    <ScrollView>
    
    {
            context.stateContext.stage === 1 ?
              <StageOne/>
            :
             <StageTwo/>

          }  

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
