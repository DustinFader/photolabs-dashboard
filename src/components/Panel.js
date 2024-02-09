import React, { Component } from "react"; 

export default class Panel extends Component {
  render() {
    const { label, value, onSelect } = this.props;
    
    return (
      <section className="dashboard__panel" onClick={onSelect}>
        <h1 className="dashboard__panel-header">{label}</h1>
        <p className="dashboard__panel-header">{value}</p>
      </section>
    )
  }
}