import React from 'react';
import './DebugPanel.css';

export default class DebugPanel extends React.Component {
  static defaultProps = {
    onToggleDebugMode: () => {},
    isDebugModeEnabled: false,
    debugOptions: { reel1: {}, reel2: {}, reel3: {} }
  };

  makeOptionChangeHandler = (reel, field) => {
    return e => {
      this.props.onChange({
        ...this.props.debugOptions,
        [reel]: {
          ...this.props.debugOptions[reel],
          [field]: e.target.value
        }
      });
    };
  };

  render() {
    const {
      onToggleDebugMode,
      isDebugModeEnabled,
      debugOptions: { reel1, reel2, reel3 }
    } = this.props;

    return (
      <div className="debug-panel">
        <label>
          <input
            type="checkbox"
            onChange={onToggleDebugMode}
            checked={isDebugModeEnabled}
          />{' '}
          Toggle debug mode
        </label>

        {isDebugModeEnabled && (
          <div className="debug-options">
            <div className="debug-options__reel">
              <h4>Reel 1</h4>
              <SymbolSelector
                value={reel1.symbol}
                onChange={this.makeOptionChangeHandler('reel1', 'symbol')}
              />
              <PositionSelector
                value={reel1.position}
                onChange={this.makeOptionChangeHandler('reel1', 'position')}
              />
            </div>
            <div className="debug-options__reel">
              <h4>Reel 2</h4>
              <SymbolSelector
                value={reel2.symbol}
                onChange={this.makeOptionChangeHandler('reel2', 'symbol')}
              />
              <PositionSelector
                value={reel2.position}
                onChange={this.makeOptionChangeHandler('reel2', 'position')}
              />
            </div>
            <div className="debug-options__reel">
              <h4>Reel 3</h4>
              <SymbolSelector
                value={reel3.symbol}
                onChange={this.makeOptionChangeHandler('reel3', 'symbol')}
              />
              <PositionSelector
                value={reel3.position}
                onChange={this.makeOptionChangeHandler('reel3', 'position')}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const PositionSelector = ({ ...selectProps }) => (
  <select {...selectProps}>
    <option value="top">TOP</option>
    <option value="center">CENTER</option>
    <option value="bottom">BOTTOM</option>
  </select>
);

const SymbolSelector = ({ ...selectProps }) => (
  <select {...selectProps}>
    <option value="3bar">3xBAR</option>
    <option value="2bar">2xBAR</option>
    <option value="bar">BAR</option>
    <option value="seven">7</option>
    <option value="cherry">CHERRY</option>
  </select>
);
