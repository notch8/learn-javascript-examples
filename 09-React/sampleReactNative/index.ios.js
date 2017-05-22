'use-strict'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import ViewContainer from './containers/ViewContainer'
import StatusBarBackground from './containers/StatusBarBackground'
import classmateStore from './stores/ClassmateStore'


export default class sampleReactNative extends Component {
  constructor(props){
    super(props)
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1,r2)=>{ r1 != r2 }
    })
    this.state={
      classmateDataSource: dataSource.cloneWithRows(classmateStore)
    }
  }

  renderClassmateRow(person){
    return(
      <TouchableOpacity 
        style={styles.classmateTableRow}
      >
        <Text style={styles.tableName}>
          {person.firstName}, {person.lastName}
        </Text>
        <View style={{flex: 1}} />
        <Icon 
          name="rocket" 
          style={styles.tableIcon}
          size={20} 
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground />
        <ListView
          dataSource={this.state.classmateDataSource}
          renderRow={(classmate)=>{
            return this.renderClassmateRow(classmate)
          }}
        />
      </ViewContainer>
    );
  }
}

const styles = StyleSheet.create({
  classmateTableRow:{
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tableName:{
    marginLeft: 20
  },
  tableIcon:{
    width: 20,
    marginRight: 30,
    color: 'lime'
  }
});

AppRegistry.registerComponent('sampleReactNative', () => sampleReactNative);
