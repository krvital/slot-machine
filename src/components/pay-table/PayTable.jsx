import React from 'react';
import './PayTable.css';

const combinations = [
  {
    desc: '3 cherry on top line',
    winnings: 2000
  },
  {
    desc: '3 cherry on center line',
    winnings: 1000
  },
  {
    desc: '3 cherry on bottom line',
    winnings: 4000
  },
  {
    desc: '3 7 symbols on any line',
    winnings: 150
  },
  {
    desc: 'Any combination of cherry and 7 on any line',
    winnings: 75
  },
  {
    desc: '3 3xBAR symbols on any line',
    winnings: 50
  },
  {
    desc: '3 2xBAR symbols on any line',
    winnings: 20
  },
  {
    desc: '3 BAR symbols on any line',
    winnings: 10
  },
  {
    desc: 'Combination of any bar symbols on any line',
    winnings: 5
  }
];

export default function PayTable(props) {
  return (
    <table className="pay-table">
      <tbody>
        {combinations.map((x, index) => (
          <tr key={index}>
            <td>{x.desc}</td>
            <td>{x.winnings}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
