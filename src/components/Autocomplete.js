import React, { Component } from "react";
import Downshift from "downshift";
import styled from "styled-components";

const AutocompleteLabel = styled.label``;

const AutocompleteInput = styled.input``;

class Autocomplete extends Component {
  render() {
    const items = this.props.stations;

    return (
      <Downshift
        onChange={selection => {
          this.props.setStation({
            stationName: selection.stationName,
            stationCode: selection.crsCode
          });
        }}
        itemToString={item => (item ? item.stationName : "")}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          isOpen,
          inputValue
        }) => (
          <div className="form__field">
            <AutocompleteLabel {...getLabelProps()} className="visuallyhidden">
              {this.props.inputLabel}
            </AutocompleteLabel>
            <AutocompleteInput
              {...getInputProps()}
              placeholder={this.props.inputLabel}
            />
            {isOpen ? (
              <div>
                {items
                  .filter(
                    item =>
                      !inputValue ||
                      item.stationName
                        .toUpperCase()
                        .includes(inputValue.toUpperCase())
                  )
                  .map((item, index) => (
                    <div
                      {...getItemProps({
                        key: item.crsCode,
                        index,
                        item
                      })}
                    >
                      {item.stationName}
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        )}
      </Downshift>
    );
  }
}

export default Autocomplete;
