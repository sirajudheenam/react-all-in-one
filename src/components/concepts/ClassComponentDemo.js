import React from 'react';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

class Vehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      style: '',
    };
    this.changeColor = this.changeColor.bind(this);
    this.changeStyle = this.changeStyle.bind(this);
  }
  componentDidMount() {
    console.log('The component is mounted', this.state.style);
  }

  componentDidUpdate() {
    console.log('The component is updated');
    this.state.color && console.log('The color is changed', this.state.color);
    this.state.style && console.log('The style is changed', this.state.style);
  }

  changeColor(myColor) {
    this.setState({
      color: myColor,
    });
  }

  changeStyle(myStyle) {
    this.setState({
      style: myStyle,
    });
  }

  render() {
    const myStyle = {
      color: this.state.style,
      margin: '1rem',
      padding: '1rem',
    };
    const myColor = {
      color: this.state.color,
    };
    return (
      <div className="component">
        <header className="demo-header">
          <div className="demo-header__badge">Class Component</div>
          <h1 className="demo-header__title">Class Component Demo</h1>
          <p className="demo-header__desc">Shows the lifecycle and state patterns of a class-based React component for comparison with hooks.</p>
        </header>
        <h1 style={myStyle}>Class Component Demo</h1>
        <label htmlFor="color">Color:</label>
        <input id="color" type="text" value="enjoy" style={myColor} />
        <button onClick={() => this.changeColor('Orange')}>Change Color</button>
        <br />
        <label htmlFor="style">Style:</label>
        <input id="style" type="text" value="StyledText" style={myStyle} />
        <button onClick={() => this.changeStyle('Heroic')}>Change Style</button>
      </div>
    );
  }
}

export default Vehicle;
