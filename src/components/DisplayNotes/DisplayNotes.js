import React, { Component } from "react";
import "./displaynotes.css";
import Highlighter from "react-highlight-words";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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
                  <FaEdit onClick={(e) => this.props.editFunc(e)} id={id} color='yellow' />
                </span>
                <span className="delete-button">
                  <MdDelete onClick={(e) => this.props.deleteFunc(e)} id={id} color='red' />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
