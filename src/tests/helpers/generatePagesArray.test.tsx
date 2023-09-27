import { generatePagesArray } from "@/presentation/helpers";

describe("generatePagesArray", () => {
  it("should generate correct page sequence", () => {
    const result = generatePagesArray(1, 5);
    expect(result).toEqual([2, 3, 4, 5]);
  });

  it("should ignore negative pages", () => {
    const result = generatePagesArray(-3, 3);
    expect(result).toEqual([1, 2, 3]);
  });
});
