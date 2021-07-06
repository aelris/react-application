import React from "react";
import './genres.css'

type Props = {
  name: string;
}

class Genres extends React.Component<Props, {}> {
  public render() {
    const { name } = this.props;

    return (
      <a href="#" className="genre">{name}</a>
    )
  }
}

export default Genres;
