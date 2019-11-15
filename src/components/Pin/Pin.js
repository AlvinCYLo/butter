import React from 'react';

class Pin extends React.Component {
  render() {
    const { onClick, activity } = this.props;

    return (
      <span onClick={onClick}>
        {activity.name}
      </span>
    );
  }
}


export default Pin;