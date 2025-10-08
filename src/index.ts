/**
 * A simple function that returns the input text
 * @param text - The input string
 * @returns The same string that was passed as input
 */
export function HelloWord(text: boolean, name: string): string {
  return text ? `Hello ${name}` : `Goodbye ${name}`;
}

function functionWithoutExport() {
  return "This is a function without export";
}

function _functionWithUnderscorePrefix() {
  return "This is a function with underscore prefix";
}

export function functionWithoutReturnType(text: string) {
  return text;
}
