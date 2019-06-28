import React from 'react';
import PayTable from './components/pay-table/PayTable';
import Reel from './components/reel/Reel';
import DebugPanel from './components/debug-panel/DebugPanel';
import {
  getAngleForPosition,
  getRandomAngle,
  calcWinLine,
  calcWinnings
} from './helpers';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      debugMode: false,
      debugOptions: {
        reel1: {
          symbol: '3bar',
          position: 'center'
        },
        reel2: {
          symbol: '3bar',
          position: 'center'
        },
        reel3: {
          symbol: '3bar',
          position: 'center'
        }
      },
      started: false,
      balance: 100,
      angle1: 0,
      angle2: 0,
      angle3: 0
    };
  }

  spin = () => {
    const getAngles = state =>
      state.debugMode
        ? {
            angle1: getAngleForPosition(state.debugOptions.reel1),
            angle2: getAngleForPosition(state.debugOptions.reel2),
            angle3: getAngleForPosition(state.debugOptions.reel3)
          }
        : {
            angle1: state.angle1 + getRandomAngle(),
            angle2: state.angle2 + getRandomAngle(),
            angle3: state.angle3 + getRandomAngle()
          };

    this.setState(
      state => ({
        started: false,
        balance: state.balance - 1,
        ...getAngles(state)
      }),
      () => {
        setTimeout(() => {
          const angles = getAngles(this.state);
          const winnings = calcWinnings(angles);
          this.setState(state => ({
            started: true,
            balance: state.balance + winnings
          }));
        }, 3000);
      }
    );
  };

  changeBalance = e => {
    const { value } = e.target;
    this.setState({
      balance: value > 5000 ? 5000 : value < 0 ? 0 : value
    });
  };

  toggleDebugMode = e => {
    this.setState({
      debugMode: e.target.checked
    });
  };

  updateDebugOptions = debugOptions => {
    this.setState({ debugOptions });
  };

  render() {
    const winLinePosition = calcWinLine(this.state);

    return (
      <div className="app">
        <div className="slot-machine">
          <PayTable />
          <div className="reels">
            <div className="reel-item">
              <Reel angle={this.state.angle1} rotationTime={2} />
            </div>
            <div className="reel-item">
              <Reel angle={this.state.angle2} rotationTime={2.5} />
            </div>
            <div className="reel-item">
              <Reel angle={this.state.angle3} rotationTime={3.0} />
            </div>
            {this.state.started && winLinePosition && (
              <div className={`win-line win-line_${winLinePosition}`} />
            )}
          </div>
          <div className="footer">
            <input
              type="text"
              className="balance"
              value={this.state.balance}
              onChange={this.changeBalance}
            />
            <button
              className="spin-button"
              onClick={this.spin}
              disabled={this.state.balance <= 0}
            >
              SPIN
            </button>
          </div>

          <DebugPanel
            isDebugModeEnabled={this.state.debugMode}
            debugOptions={this.state.debugOptions}
            onToggleDebugMode={this.toggleDebugMode}
            onChange={this.updateDebugOptions}
          />
        </div>
      </div>
    );
  }
}

export default App;
