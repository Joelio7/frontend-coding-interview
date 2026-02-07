import { describe, it, expect } from "vitest";
import { truncateText } from "../utils";

describe("truncateText", () => {
  it("should truncate text longer than max length and add ellipsis", () => {
    const longText = "This is a very long text that should be truncated";
    const result = truncateText(longText, 30);

    expect(result).toBe("This is a very long text that...");
    expect(result.length).toBe(32);
  });

  it("should not truncate text shorter than max length", () => {
    const shortText = "Short text";
    const result = truncateText(shortText, 30);

    expect(result).toBe("Short text");
    expect(result).not.toContain("...");
  });

  it("should not truncate text exactly at max length", () => {
    const exactText = "Exactly thirty characters!!";
    const result = truncateText(exactText, 27);

    expect(result).toBe("Exactly thirty characters!!");
  });
});
