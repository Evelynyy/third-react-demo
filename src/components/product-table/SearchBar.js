import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
        this.handleInStockTextInputChange = this.handleInStockTextInputChange.bind(this);
    }

    handleFilterTextInputChange(e) {
        this.props.onFilterTextInput(e.target.value);
    }

    handleInStockTextInputChange(e) {
        this.props.onInStockInput(e.target.checked);
    }
    
    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextInputChange} />
                <p>
                    <input type="checkbox"
                        checked={this.props.inStockOnly}
                        onChange={this.handleInStockTextInputChange} />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

export default SearchBar;