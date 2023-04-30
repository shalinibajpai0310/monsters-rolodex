import React, { Component } from 'react'
import './searchBox.style.css';

export default class SearchBoxComponent extends Component {

    render() {
        const { className, handleChange, placeholder} = this.props;
        return (
            <input
                type="search"
                className={className}
                placeholder={placeholder}
                onChange={handleChange}
          />
        )
    }
}
