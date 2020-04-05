const state = {
  word: "",
  possibleMistakes: 10,
  madeMistakes: 0,
  pressedKey: "",
  usedKeys: [],
  correctGuesses: [],
  isGameWon: false,
  updateWord(word) {
    this.word = word;
  },
  updateMadeMistakes() {
    this.madeMistakes++;
  },
  updateKeys(key) {
    this.pressedKey = key;
    this.usedKeys.push(key);
  },
  updateCorrectGuesses(key) {
    this.correctGuesses.push(key);
  },
  updateIsGameWon(bool) {
    this.isGameWon = bool;
  },
  reset() {
    this.word = "";
    this.possibleMistakes = 10;
    this.madeMistakes = 0;
    this.pressedKey = "";
    this.usedKeys = [];
    this.correctGuesses = [];
    this.isGameWon = false;
  }
};

export default state;
