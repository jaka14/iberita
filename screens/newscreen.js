import React  from "react";
import { WebView } from 'react-native-webview';
import {
    View,
    StyleSheet
} from 'react-native';

export default class App extends React.Component {
    render() {
      return (
        <View style={styles.container}>
             <WebView source={{ uri: 'https://dev.iberita.net/category/beritaterkini' }} style={{ marginTop: 20 }} />
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      margin: 0
    },
  })