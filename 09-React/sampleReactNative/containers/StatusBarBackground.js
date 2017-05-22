'use strict'

import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

export default class StatusBarBackground extends Component{
  render(){
    return(
      <View style={styles.container}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'lime',
    height: 20
  }
})
