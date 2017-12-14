import * as React from 'react';

import './style.css';

import pptIcon from '../../assets/iconppt.png';

import { Header, Timeline } from '../../components';

export class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <Header />
        <Timeline />
      </div>
    );
  }
}