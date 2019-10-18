import React from 'react';
// import PropTypes from 'prop-types';

class UpNext extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { clicked } = this.state;
    this.setState({ clicked: !clicked });
  }

  render() {
    const { clicked } = this.state;
    return (
      <div
        className={clicked ? 'upNext-alt metaButton' : 'upNext metaButton'}
        onClick={this.handleClick}
        onKeyDown={this.handleClick}
        role="button"
        tabIndex="-1"
        aria-label="up next"
      />
    );
  }
}

// UpNext.propTypes = {
//   songId: PropTypes.number.isRequired,
//   isLiked: PropTypes.number.isRequired,
//   like: PropTypes.func.isRequired,
// };

export default UpNext;