import { analyseEdges } from "../SquareAnalyser.js"
import { describe, it } from "node:test";
import assert from "node:assert";

describe("analyseEdges function", () => {
  it('should return "C\'est un carré" for [2,2,2,2]', () => {
    assert.strictEqual(analyseEdges([2,2,2,2]), "C'est un carré");
  });

  it('should return "Ce n\'est pas un carré" for [2,2,2,1]', () => {
    assert.strictEqual(analyseEdges([2,2,2,1]), "Ce n'est pas un carré");
  });
});