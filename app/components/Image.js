import React from 'react';

class Splash extends React.Component {
  getInitialState: function() {
    return {
      loaded: false,
    };
  },

  onImageLoad: function() {
    if (this.isMounted()) {
      this.setState({ loaded: true });
    }
  },

  componentDidMount: function() {
    var imgTag = ReactDOM.findDOMNode(this.refs.img);
    var imgSrc = imgTag.getAttribute('src');
    var img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  },

  render: function() {
    var { className, ...props } = this.props;
    var rootClassName = className ? className + ' image' : 'image';
    if (this.state.loaded) {
      rootClassName += ' image-loaded';
    }
    return <img ref="img" {...props} className={rootClassName} />;
  }
});

module.exports = Globe;