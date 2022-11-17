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
  // opacity: 0;
  // animation: blinker 1s linear;
  // border-right: 0.06rem solid rgba(185, 185, 185) !important;
  // color: $background-color_5;
  // height: 100%;
  // animation-iteration-count: 8;  <====== NEED To Adjuste to text size 
// I was trying to do : 
// <TypeWriter style={{ animationIterationCount: typeWriterTxt.length }} data={typeWriterTxt} />
// But can't fin JSX equivalent for inline style animation-iteration-count

// IN A COMPONENT :
// const typeWriterTxt = ["Hi ! I'm Nicolas, developer."];

// return (
//     <TypeWriter style={{ animationIterationCount: typeWriterTxt.length }} data={typeWriterTxt} />
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
    return <span>{this.state.text}<span className="typewriter"></span></span>;
  }
}

export default TypeWriter;
