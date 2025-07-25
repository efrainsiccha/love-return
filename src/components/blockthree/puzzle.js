const size = 4;
const board = document.getElementById('puzzle-board');
const message = document.getElementById('puzzle-message');
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reiniciar';
resetBtn.className = 'puzzle-reset-btn';
message.parentNode.insertBefore(resetBtn, message.nextSibling);

let pieces = [];

function initPieces() {
  pieces = [];
  for (let i = 0; i < size * size; i++) {
    pieces.push(i);
  }
}

function shuffle(array) {
  // Fisher-Yates, asegurando que sea resoluble
  let n = array.length;
  do {
    for (let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  } while (!isSolvable(array));
}

function isSolvable(arr) {
  let invCount = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] && arr[j] && arr[i] > arr[j]) invCount++;
    }
  }
  // blank row from bottom
  const blankRow = size - Math.floor(arr.indexOf(0) / size);
  if (size % 2 === 1) {
    return invCount % 2 === 0;
  } else {
    return (invCount + blankRow) % 2 === 0;
  }
}

function render() {
  board.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const val = pieces[i];
    if (val === 0) {
      // Hueco vacío
      const emptyDiv = document.createElement('div');
      emptyDiv.style.width = '64px';
      emptyDiv.style.height = '64px';
      emptyDiv.style.background = '#eee';
      emptyDiv.className = 'puzzle-piece empty';
      board.appendChild(emptyDiv);
      continue;
    }
    const row = Math.floor((val - 1) / size);
    const col = (val - 1) % size;
    const div = document.createElement('div');
    div.className = 'puzzle-piece';
    div.style.backgroundPosition = `-${col * 64}px -${row * 64}px`;
    div.draggable = true;
    div.dataset.idx = i;
    div.addEventListener('click', handleMove);
    board.appendChild(div);
  }
}

function handleMove(e) {
  const idx = Number(this.dataset.idx);
  const emptyIdx = pieces.indexOf(0);
  if (isAdjacent(idx, emptyIdx)) {
    [pieces[idx], pieces[emptyIdx]] = [pieces[emptyIdx], pieces[idx]];
    render();
    checkWin();
  }
}

function isAdjacent(idx1, idx2) {
  const r1 = Math.floor(idx1 / size), c1 = idx1 % size;
  const r2 = Math.floor(idx2 / size), c2 = idx2 % size;
  return (Math.abs(r1 - r2) + Math.abs(c1 - c2)) === 1;
}

function checkWin() {
  const won = pieces.every((val, i) => val === (i === 0 ? 0 : i));
  if (won) {
    message.textContent = '¡Felicidades! Has completado el rompecabezas 🎉';
  } else {
    message.textContent = '';
  }
}

function resetPuzzle() {
  initPieces();
  shuffle(pieces);
  render();
  message.textContent = '';
}

resetBtn.addEventListener('click', resetPuzzle);

// Inicializar
initPieces();
shuffle(pieces);
render();
