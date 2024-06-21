import { Component } from "react";
import { getImageUrl } from "./js/utility.js";
import Smail from "./components/Smail.jsx";
import Button from "./components/Button.jsx";
import Voting from "./components/Voting.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { mostVoted: null };

    this.showResult = this.showResult.bind(this);
  }

  showResult() {
    const collectionEmoticons = ['angry-wer.png', 'angry.png', 'smile.png', 'thinking.png', 'tongue.png'];
    const votes = collectionEmoticons.map(smailURL => {
      const src = getImageUrl(smailURL);
      return { smailURL, src, votes: JSON.parse(localStorage.getItem(`votes_${src}`)) || 0 };
    });

    const mostVoted = votes.reduce((max, current) => (current.votes > max.votes ? current : max), votes[0]);

    mostVoted.votes !== 0 ?
      this.setState({ mostVoted })
      : alert("Спочатку ви маєте проголосувати");
  }

  render() {
    const collectionEmoticons = ['angry-wer.png', 'angry.png', 'smile.png', 'thinking.png', 'tongue.png'];
    const imageUrls = collectionEmoticons.map(getImageUrl);
    const { mostVoted } = this.state;

    return (
      <>
        <h1>Голосуй за кращий смайлик</h1>
        <div className="list-smail">
          {imageUrls.map((url, index) => (
            <Smail key={index} src={url} />
          ))}
        </div>
        <Button onClick={this.showResult}>Show Results</Button>
        {mostVoted && <Voting mostVoted={mostVoted} />}
      </>
    );
  }
}

export default App;
