import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Calculation } from './components/Calculation';

export default function App() {

  return (
    <><View style={styles.container}>
       
        <Calculation></Calculation>
        <StatusBar style="auto" />
      </View></>
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

