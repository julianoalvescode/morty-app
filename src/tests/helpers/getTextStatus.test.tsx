import { getTextStatus } from "../../presentation/helpers";

describe("getTextStatus", () => {
  it('should return "LIVE" if status is "live"', () => {
    const status = "Alive";
    const result = getTextStatus(status);

    expect(result).toBe("Vivo");
  });

  it('should return "DEAD" if status is "dead"', () => {
    const status = "Dead";
    const result = getTextStatus(status);

    expect(result).toBe("Morto");
  });

  it('should return "UNKNOWN" if status is "unknown"', () => {
    const status = "unknown";
    const result = getTextStatus(status);

    expect(result).toBe("Desconhecido");
  });

  it('should return "" if status is bull', () => {
    const result = getTextStatus();

    expect(result).toBe("");
  });
});
