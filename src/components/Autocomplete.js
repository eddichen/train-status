import React, { Component } from "react";
import Downshift from "downshift";
import styled from "styled-components";

const AutocompleteField = styled.div`
  position: relative;
`;

const AutocompleteLabel = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
  font-size: 12px;
`;

const AutocompleteInput = styled.input`
  background-color: #f1f2f6;
  padding: 10px 10px 10px 47px;
`;

const AutocompleteResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1;
  width: 100%;
  background-color: #fff;
  padding-top: 15px;
  border: 1px solid #132968;
  border-top: none;
  border-radius: 0 0 4px 4px;

  div {
    padding: 10px;

    &:hover {
      background-color: #f1f2f6;
    }
  }
`;

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
          <div>
            <AutocompleteField className="form__field">
              <AutocompleteLabel {...getLabelProps()}>
                {this.props.inputLabel}
              </AutocompleteLabel>
              <AutocompleteInput {...getInputProps()} />
              {isOpen ? (
                <AutocompleteResults>
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
                </AutocompleteResults>
              ) : null}
            </AutocompleteField>
          </div>
        )}
      </Downshift>
    );
  }
}

export default Autocomplete;
