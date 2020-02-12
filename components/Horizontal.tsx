import React, { Component } from 'react'
import { StyleSheet, ScrollView, Dimensions, Text, View } from 'react-native'

export class Horizontal extends Component {
  render() {
    return (
      <ScrollView 
        horizontal={true}
        pagingEnabled={true}
        style={styles.container}>
        <View style={[styles.outer, styles.one]}>
          <Text style={styles.innerText}>Welcome to XYZ App</Text>
        </View>
        <View style={[styles.outer, styles.two]}>
          <Text style={styles.innerText}>Available on Android</Text>
        </View>
        <View style={[styles.outer, styles.three]}>
          <Text style={styles.innerText}>Available on iOS</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  outer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,  
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  innerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  one: {
    backgroundColor: '#ffc014'
  },
  two: {
    backgroundColor: '#f66'
  },
  three: {
    backgroundColor: '#66f'
  }
})

export default Horizontal
