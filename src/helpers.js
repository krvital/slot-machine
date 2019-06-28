const variants = [
  { angle: 180, symbol: '3bar', position: 'center' },
  { angle: 168, symbol: 'cherry', position: 'bottom' },
  { angle: 156, symbol: '3bar', position: 'top' },
  { angle: 144, symbol: 'cherry', position: 'center' },
  { angle: 132, symbol: 'seven', position: 'bottom' },
  { angle: 120, symbol: 'cherry', position: 'top' },
  { angle: 108, symbol: 'seven', position: 'center' },
  { angle: 96, symbol: '2bar', position: 'bottom' },
  { angle: 84, symbol: 'seven', position: 'top' },
  { angle: 72, symbol: '2bar', position: 'center' },
  { angle: 60, symbol: 'bar', position: 'bottom' },
  { angle: 48, symbol: '2bar', position: 'top' },
  { angle: 36, symbol: 'bar', position: 'center' },
  { angle: 24, symbol: '3bar', position: 'bottom' },
  { angle: 12, symbol: 'bar', position: 'top' }
];

export function getSymbolByAngle(ang) {
  const c = ~~(ang / 180);
  ang = ang - c * 180;

  for (let { angle, symbol, position } of variants) {
    if (ang % angle === 0) {
      return { desc: symbol + position, symbol, position };
    }
  }
}

export function getRandomAngle() {
  const min = Math.ceil(100);
  const max = Math.floor(600);
  const val = Math.floor(Math.random() * (max - min)) + min;
  return val * 12;
}

export function getAngleForPosition(position) {
  const findAngle = variants.find(
    v => v.symbol === position.symbol && v.position === position.position
  );

  const min = Math.ceil(1);
  const max = Math.floor(10);
  const val = Math.floor(Math.random() * (max - min)) + min;

  return 180 * val + findAngle.angle;
}

export function calcWinnings({ angle1, angle2, angle3 }) {
  const symbols = [
    getSymbolByAngle(angle1),
    getSymbolByAngle(angle2),
    getSymbolByAngle(angle3)
  ];

  const first = symbols[0];

  if (symbols.every(sym => first.position === sym.position)) {
    if (
      symbols.every(sym => sym.symbol === 'cherry') &&
      first.position === 'top'
    ) {
      return 2000;
    }

    if (
      symbols.every(sym => sym.symbol === 'cherry') &&
      first.position === 'center'
    ) {
      return 1000;
    }

    if (
      symbols.every(sym => sym.symbol === 'cherry') &&
      first.position === 'bottom'
    ) {
      return 4000;
    }

    if (symbols.every(sym => sym.symbol === 'seven')) {
      return 150;
    }

    if (
      symbols.every(sym => sym.symbol === 'cherry' || sym.symbol === 'seven')
    ) {
      return 75;
    }

    if (symbols.every(sym => sym.symbol === '3bar')) {
      return 50;
    }

    if (symbols.every(sym => sym.symbol === '2bar')) {
      return 20;
    }

    if (symbols.every(sym => sym.symbol === 'bar')) {
      return 10;
    }

    if (
      symbols.every(
        sym =>
          sym.symbol === '3bar' || sym.symbol === '2bar' || sym.symbol === 'bar'
      )
    ) {
      return 5;
    }
  }
  return 0;
}

export function calcWinLine({ angle1, angle2, angle3 }) {
  const symbols = [
    getSymbolByAngle(angle1),
    getSymbolByAngle(angle2),
    getSymbolByAngle(angle3)
  ];

  const firstPos = symbols[0].position;

  if (symbols.every(sym => firstPos === sym.position)) {
    return firstPos;
  }

  return null;
}
