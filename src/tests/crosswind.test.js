import { expect, assert, describe, expectTypeOf, test } from "vitest";
import Logic from "../logic";

// Cross wind
describe("Setting the logic for Cross Wind", () => {
  const logic = new Logic(268, 270, 0);
  const result = logic.computeResult();

  describe("Testing the logic", () => {
    const expectedResult = {
      windCondition: "Cross Wind - Vent de travers",
      goodToGo: true,
    };

    describe("Testing wind condition", () => {
      test('Should get "false" on isHeadWind', () => {
        assert.isFalse(logic.isHeadWind());
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
      test('Should get "Cross Wind - Vent de travers" on windCondition', () => {
        assert.strictEqual(result.windCondition, expectedResult.windCondition);
      });
    });
  });
});

