//////////////////////////////////////////
/////////// USAGE EXAMPPLE : ////////////
////////////////////////////////////////
// import TypeWriter from "./Typewriter";

// @keyframes blinker {
//   50% {
//     opacity: 1;
//     }
// }

// .typewriter {
//     opacity: 0;
//     border-right: 0.06em solid rgba(185, 185, 185) !important;
//     animation: blinker 1s linear infinite;
//     padding-right: 6px;
//     font-size: 0.65em;
//     //animation-iteration-count: 8;
//     padding-top: 5px;
//   }

// return (
//   <span className="txt-rotate">
//     <TypeWriter data={typeWriter} />
//     <span className="typewriter"></span>
//   </span>
// };
//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////

import React from "react";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    setTimeout(() => {
      this.tick();
    }, 1600);
  }

  tick() {
    if (this.unmounted) {
      return;
    }

    const fullTxt = this.props.data[0];
    let newText = "";
    let delta = Math.random() * 550;

    newText = fullTxt.substring(0, this.state.text.length + 1);

    if (newText.length === this.state.text.length) 
        this.unmounted = true;
    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    return <span>{this.state.text}</span>;
  }
}

export default TypeWriter;
