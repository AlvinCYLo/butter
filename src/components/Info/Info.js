import React from 'react';

class Info extends React.Component {
  render() {
    const {info} = this.props;
    const displayName = `${info.city}, ${info.state}`;

    return (
      <div>
        <div>
          {displayName}
        </div>
      </div>
    );
  }
}

export default Info;