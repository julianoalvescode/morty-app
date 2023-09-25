export function getTextStatus(status?: "Alive" | "Dead" | "unknown"): string {
  if (!status) return "";

  switch (status) {
    case "Alive":
      return "Vivo";
    case "Dead":
      return "Morto";
    case "unknown":
      return "Desconhecido";
    default:
      return "Desconhecido";
  }
}

export function generatePagesArray(from: number, to: number): Array<number> {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}
