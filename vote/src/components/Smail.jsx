import { Component } from "react";

class Smail extends Component {
  constructor(props) {
    super(props);
    this.state = { votes: 0 };

    this.addVoice = this.addVoice.bind(this);
  }

  componentDidMount() {
    const savedVotes = JSON.parse(localStorage.getItem(`votes_${this.props.src}`)) || 0;
    this.setState({ votes: savedVotes });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.votes !== this.state.votes) {
      localStorage.setItem(`votes_${this.props.src}`, JSON.stringify(this.state.votes));
    }
  }

  addVoice() {
    this.setState(prevState => ({
      votes: prevState.votes + 1
    }));
  }

  render() {
    const { src } = this.props;
    const { votes } = this.state;

    return (
      <div className="smail_content">
        <img src={src} onClick={this.addVoice} style={{ cursor: "pointer" }} />
        <span>{votes}</span>
      </div>
    );
  }
}

export default Smail;
