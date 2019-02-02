import React, { Component } from "react";
import Downshift from "downshift";

class Autocomplete extends Component {
  render() {
    const items = this.props.stations;

    return (
      <Downshift
        onChange={selection => alert(`You selected ${selection.value}`)}
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
            <label {...getLabelProps()}>{this.props.inputLabel}</label>
            <input {...getInputProps()} />
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
