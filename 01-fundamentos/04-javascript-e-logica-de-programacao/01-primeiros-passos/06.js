const piece = 'ROOK';

switch(piece.toLowerCase()){
  case 'bishop':
    return console.log('any number of vacant squares diagonally in a straight line');
  case 'rook':
    return console.log('any number of vacant squares forwards, backwards, left, or right in a straight line');
  case 'queen':
    return console.log('moves any number of vacant squares in any direction: forwards, backwards, left, right, or diagonally, in a straight line.');
  case 'king':
    return console.log('moves exactly one vacant square in any direction: forwards, backwards, left, right, or diagonally');
  case 'knight':
    return console.log('moves on an extended diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner');
  case 'pawn':
    return console.log("moves forward exactly one square, or optionally, two squares when on its starting square, toward the opponent's side of the board")
  default:
    return console.log('invalid piece!')
}