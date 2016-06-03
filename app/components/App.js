import React from 'react';
//import Globe from './Globe';
//import Maps from './Maps';

//Because route component set to app, can use this.props.children to route based on the url
// var map = {
//   height: '500px',
//   width: '500px'
// }

// <div style={map}>
//   <Maps>as</Maps>
// </div>



class App extends React.Component {
  render() {
    return (
      <div>
      
      
        {this.props.children}
        
      </div>
    );
  }
}

export default App;