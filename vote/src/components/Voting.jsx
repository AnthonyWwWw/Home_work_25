import { Component } from "react";

class Voting extends Component {
  render() {
    const { mostVoted } = this.props;

    return (
      <div className="voting-results">
        <h2>Результати голосування</h2>
        <div className="voting-results_content">
          <p>Переможець</p>
          <span>Кількість голосів: {mostVoted.votes}</span>
          <img src={mostVoted.src} alt={mostVoted.smailURL} />
        </div>
      </div>
    );
  }
}

export default Voting;
