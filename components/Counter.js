import React, { Component } from 'react'
import { AppRegistry,  StyleSheet,  TouchableHighlight,  Text,  View,} from 'react-native';

export default class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  increment = () => {
    this.setState({
      count: this.state.count+1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count-1
    })
  }

  zero = () => {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight 
          underlayColor={'grey'}
          style={styles.button}
          onPress={this.state.count === 0 ? this.zero : this.decrement}
        >
          <Text style={[styles.buttonText]}> - </Text>
        </TouchableHighlight>

        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>
            {this.state.count}
          </Text>
        </View>


        <TouchableHighlight
          underlayColor={'grey'}
          style={styles.button}         
          onPress={this.increment}
        >
          <Text style={[styles.buttonText]}> + </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    paddingTop: 50,
    paddingBottom: 50,
    flex: 0.33,
  },
  countContainer: {
    alignItems: 'center',
    padding: 0,
    flex: 0.33,
  },
  buttonText: {
    fontSize: 50,
  },
  countText: {
    color: 'red',
    fontSize: 50,
  },
})
