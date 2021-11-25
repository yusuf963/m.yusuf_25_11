import React from 'react';
import Loader from 'react-loader-spinner';
import './loader.scss';
// create 
export default class LoaderIcon extends React.Component {
  render() {
    return (
      <div className='loader-contaier'>
        <Loader
          type='ThreeDots'
          color='lightsteelblue'
          height={200}
          width={200}
          timeout={15000}
        />
        <p style={{ padding: '60px', fontSize: '20px' }}>Loading...</p>
      </div>
    );
  }
}
