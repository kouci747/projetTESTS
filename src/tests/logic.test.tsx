import { assert, describe, it, test } from "vitest";
import { ResultLogic } from "../components";

describe("Testing the logic", () => {
  test('Should get "Head Wind"', () => {
    const expectedResult = {
      windCondition: "Head Wind - Vent de face",
      goodToGo: true,
    };
    const result = ResultLogic({ capPiste: 270, capVent: 270, forceVent: 0 });

    it('Should get "true" on GoodToGo', () => {
      assert.strictEqual(result.goodToGo, expectedResult.goodToGo);
    });
    it('Should get "Head Wind - Vent de face" on windCondition', () => {
      assert.strictEqual(result.windCondition, expectedResult.windCondition);
    });
  });
});
