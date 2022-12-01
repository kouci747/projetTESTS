import { assert, describe, test } from "vitest";
import Logic from "../logic";

// Head wind
describe("Setting the logic for Head Wind", () => {
  const logic = new Logic(270, 270, 0);
  const result = logic.computeResult();

  describe("Testing the logic", () => {
    const expectedResult = {
      windCondition: "Head Wind - Vent de face",
      goodToGo: true,
    };

    describe("Testing wind condition", () => {
      test('Should get "true" on isHeadWind', () => {
        assert.isTrue(logic.isHeadWind());
      });
      test('Should get "true" on isCrossWind', () => {
        assert.isTrue(logic.isCrossWind());
      });
      test('Should get "false" on isTailWind', () => {
        assert.isFalse(logic.isTailWind());
      });
    });

    describe("Testing wind force", () => {
      test('Should get "true" isWindForceLessThanTen', () => {
        assert.isTrue(logic.isWindForceLessThanTen());
      });
    });

    describe("Testing results", () => {
      test('Should get "true" on GoodToGo', () => {
        assert.strictEqual(result.goodToGo, expectedResult.goodToGo);
      });
      test('Should get "Head Wind - Vent de face" on windCondition', () => {
        assert.strictEqual(result.windCondition, expectedResult.windCondition);
      });
    });
  });
});
