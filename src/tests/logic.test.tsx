import { assert, describe, it, test } from "vitest";

const sum = (a: number, b: number) => {
  return a + b;
};

test("Should get a 3 as a result", () => {
  assert.equal(sum(1, 2), 3);
});

describe("Logic tests", () => {
  it("Should get a 3 as a result", () => {});
  it("Should get a 3 as a result", () => {});
  it("Should get a 3 as a result", () => {});
  it("Should get a 3 as a result", () => {});
});
