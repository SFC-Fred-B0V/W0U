function analyseEdges(edgeArray) {
  let isSquare = edgeArray[0] == edgeArray[1] && edgeArray[0] == edgeArray[2] && edgeArray[0] == edgeArray[3];
  return isSquare ? "C'est un carré" : "Ce n'est pas un carré"
}

export { analyseEdges };