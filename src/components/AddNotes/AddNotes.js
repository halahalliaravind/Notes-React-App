import React, { Component } from "react";
import './addnotes.css';

class AddNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <div className="search-wrapper">
          <input
            placeholder="Search Notes by Title......"
            className="search-bar"
            value={this.state.search}
            onChange={this.handleSearchChange}
          />
        </div>
        <div>
          <form className="form-section">
            <input
              className="title-input"
              type="type"
              placeholder="Title..."
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <br />
            <textarea
              className="details-input"
              cols="20"
              rows="3"
              placeholder="Enter your note here..."
              value={this.state.data}
              onChange={this.handleDataChange}
            />
            <br />
            <button className="input-button" onClick={this.save}>
              Add Note
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddNotes;
