import { expect, describe, expectTypeOf, test } from "vitest";
import Logic from "../logic";

describe("Setting the initial variables of logic", () => {
  const logic = new Logic(270, 270, 0);

  test('Testing types', () => {
    expectTypeOf(logic.LIMITWINDFORCE).toBeNumber();
    expectTypeOf(logic.PERPENDICULAR).toBeNumber()
    expectTypeOf(logic.MAX).toBeNumber()
    expectTypeOf(logic.capPiste).toBeNumber()
    expectTypeOf(logic.capVent).toBeNumber()
    expectTypeOf(logic.forceVent).toBeNumber()
    expectTypeOf(logic.windCondition).toBeString()
    expectTypeOf(logic.goodToGo).toBeNullable()
  })
  
  test('Testing values', () => {
    expect(logic.LIMITWINDFORCE).toBe(10)
    expect(logic.PERPENDICULAR).toBe(90)
    expect(logic.MAX).toBe(360)
  })
})
