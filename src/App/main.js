import React, {Component} from 'react';
import Body from './Body/main';
import Footer from './Footer/main';
import Header from './Header/main';
//styles
import './main.scss';
import styles from './main.css';

class App extends Component {
  render() {
    require('../global.css');
    return (
      <div className={styles.App}>
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;
