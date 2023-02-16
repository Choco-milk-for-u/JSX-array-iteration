export default function beforeIndex({ currentIndex, Block }) {
  if (Block[currentIndex]) {
    return Block[currentIndex];
  } else {
    if (currentIndex > 0) {
      return beforeIndex({ currentIndex: currentIndex - 1, Block });
    }
    else{
        return Block[0];
    }
  }
}
