import React, { Component } from "react";
import "./addnotes.css";
import DisplayNotes from "../DisplayNotes/DisplayNotes";

class AddNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: [],
      search: "",
      title: "",
      edit: "",
      data: "",
      time: "",
      id: 0,
      FullData: [],
    };
  }
  handleSearchChange = (event) => {
    if (event.target.value !== "") {
      var searchedArray = this.state.temp.filter((value) =>
        value.title.includes(event.target.value)
      );

      this.setState({
        search: event.target.value,
        FullData: searchedArray,
      });
    } else {
      let temp = this.state.temp;
      this.setState({
        search: "",
        FullData: temp,
      });
    }
  };

  handleDataChange = (event) => {
    this.setState({ data: event.target.value });
  };

  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };

  save = () => {
    if (this.state.edit && this.state.data !== "" && this.state.title !== "") {
      let data = this.state.temp;

      var index = data.findIndex(
        (value) => value.id === parseInt(this.state.id)
      );

      data[index].title = this.state.title;
      data[index].data = this.state.data;
      data[index].time = this.state.time;
      data[index].edit = false;

      this.setState({
        temp: data,
        FullData: data,
      });
      this.clearNotesArea();
    } else if (this.state.data !== "" && this.state.title !== "") {
      var idCount = this.state.id;
      idCount += 1;
      var obj = {
        title: this.state.title,
        data: this.state.data,
        time: new Date().toLocaleString().replace(",", "").replace(/:.. /, " "),
        id: idCount,
      };
      var data = [];
      data = this.state.temp;
      data.unshift(obj);

      this.setState({
        FullData: data,
        temp: data,
        id: idCount,
      });
      this.clearNotesArea();
    }
  };
  clearNotesArea = () => {
    this.setState({
      // search: "",
      title: "",
      data: "",
      time: "",
      edit: false,
    });
  };

  editFunc = (event) => {
    var index = this.state.temp.findIndex(
      (value) => value.id === parseInt(event.target.id)
    );
    var data = this.state.temp[index];
    this.setState({
      search: "",
      title: data.title,
      data: data.data,
      time: data.time,
      id: data.id,
      edit: true,
    });
  };

  deleteFunc = (event) => {
    if (!this.state.edit) {
      var index = this.state.temp.findIndex(
        (value) => value.id === parseInt(event.target.id)
      );
      var data = this.state.temp;
      data.splice(index, 1);
      this.setState({
        search: "",
        temp: data,
        FullData: data,
      });
    }
  };

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
          <button className="btn btn-four blue" onClick={this.save}>
            Save Note
          </button>
        </div>
        <DisplayNotes
          search={this.state.search}
          FullData={this.state.FullData}
          deleteFunc={this.deleteFunc}
          editFunc={this.editFunc}
        />
      </React.Fragment>
    );
  }
}

export default AddNotes;
