import React, { Component } from 'react';

export default class UserData extends Component {
  render() {
    const userData = this.props.userData
    const languages = []
    for(var language in userData.languages){
      languages.push(
        <li key={language}>{language}: {userData.languages[language] ? 'Yes' : 'No' }</li>
      )
    }
    return (
      <div>
        <ul>
          <li>Name: {userData.name}</li>
          <li>Description: {userData.description}</li>
          <li>Pet: {userData.pet}</li>
          <li>Education: {userData.education}</li>
          <li>Languages:
            <ul>
              {languages}
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
