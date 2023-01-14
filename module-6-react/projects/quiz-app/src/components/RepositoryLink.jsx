import React from "react";

export class RepositoryLink extends React.Component {
  constructor(props) {
    super();
    this.props = props;
    console.log(this.props);
  }

  render() {
    let translation = this.props.children;

    if (this.props.translate) {
      translation = this.props.translate(this.props.children);
    }

    return (
      <a
        className="App-link"
        href="https://github.com/dstrekelj/algebra-example-react-app"
      >
        {translation}
      </a>
    );
  }
}
