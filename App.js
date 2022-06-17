import {Text, TouchableOpacity,StyleSheet, View, Image} from 'react-native';
import React from 'react';
import img from "./img/login.png"

const App = () => {
const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "red",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop : 20
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
})

  return (
    <View style={{backgroundColor: '#181D3D', flex: 1}}>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          borderBottomRightRadius: 87,
          marginBottom: 0,
          height: 100,
        }}>
          <Image source={img} style={{width : 300, height :300}} />
      </View>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            backgroundColor: '#181D3D',
            flex: 1,
            alignItems: 'center',
            borderTopLeftRadius: 87,
          }}>
          <View style={{marginTop: "30%", alignItems: 'center'}}>
            <Text style={{color: 'white', fontSize: 25}}>Lest Connect</Text>
            <Text style={{color: 'white', fontSize: 25}}>With Eeach Order</Text>
            <Text style={{color: '#e3e3e3', fontSize: 15, marginTop: 20}}>
              ssad s ss sda da dad ada d ad
            </Text>
            <TouchableOpacity
              style={styles.appButtonContainer}>
              <Text style={styles.appButtonText}> Lets'Go </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;


