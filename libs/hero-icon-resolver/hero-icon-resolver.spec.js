import heroIconResolver from "./index";
import { describe, test, expect } from "vitest";

describe("solid icons", () => {
  test('should resolve components with the suffix "SolidIcon"', () => {
    const resolved = heroIconResolver("EnvelopeSolidIcon");

    expect(resolved).toStrictEqual({
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/solid",
    });
  });

  test('should resolve components with the suffix "IconSolid"', () => {
    const resolved = heroIconResolver("EnvelopeIconSolid");

    expect(resolved).toStrictEqual({
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/solid",
    });
  });
});

describe("outline icons", () => {
  test('should resolve components with the suffix "OutlineIcon"', () => {
    const resolved = heroIconResolver("EnvelopeOutlineIcon");

    expect(resolved).toStrictEqual({
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/outline",
    });
  });

  test('should resolve components with the suffix "IconOutline"', () => {
    const resolved = heroIconResolver("EnvelopeIconOutline");

    expect(resolved).toStrictEqual({
      name: "EnvelopeIcon",
      from: "@heroicons/vue/24/outline",
    });
  });
});
