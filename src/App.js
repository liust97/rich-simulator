import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import RichSimulator from './container/RichSimulator'
import './App.css'

const theme = createMuiTheme({
  shadows: [
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
    '0px 0px 0px 0px red,0px 0px 0px 0px red,0px 0px 0px 0px red',
  ],
  palette: {
    primary: amber,
    secondary: {
      main: '#78a929',
      contrastText: '#fff'
    },
  },
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 14,
  },
});


class App extends Component {
  constructor() {
    super();
    this.state = {}

  }

  render() {
    return (
      <div >
        <ThemeProvider theme={theme}>
          <RichSimulator></RichSimulator>
        </ThemeProvider>
      </div >
    );
  }
}
export default App;