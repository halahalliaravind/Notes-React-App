import React, { Component } from "react";
import Highlighter from "react-highlight-words";

export default class DisplayNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="current-notes-body">
        {this.props.FullData.map((value) => {
          const { title, data, time, id } = value;
          return (
            <div className="archive-note-with-buttons">
              <div>
                <div className="title-wrapper">
                  <Highlighter
                    highlightClassName="YourHighlightClass title-data"
                    searchWords={[this.props.search]}
                    autoEscape={true}
                    textToHighlight={title}
                  />
                </div>
                <div className="archive-data">{data}</div>
                <div className="archive-time">{time}</div>
              </div>
              <div className="edit-delete-wrapper">
                <span className="edit-button">
                  <img
                    src="https://img.icons8.com/cotton/64/000000/edit--v1.png"
                    className="edit-button-img"
                    onClick={(e) => this.props.editFunc(e)}
                    id={id}
                    alt="text"
                  />
                </span>
                <span className="delete-button">
                  <img
                    src="https://img.icons8.com/fluent/48/000000/delete-sign.png"
                    className="delete-button-img"
                    onClick={(e) => this.props.deleteFunc(e)}
                    id={id}
                    alt="text"
                  />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
