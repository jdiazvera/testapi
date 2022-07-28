import { suma } from "../src/util/suma";

describe("util/suma", () => {
  it("should sum", () => {
    const sum = suma(4, 5);
    expect(sum).toEqual(9);
  });
});
