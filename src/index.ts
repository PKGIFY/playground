/**
 * A simple function that returns the input text
 * @param text - The input string
 * @returns The same string that was passed as input
 */
export function HelloWord(text: boolean, name: string): boolean {
  return text ? true : false;
}

export function NewFunction(options: {
  text: boolean;
  name: string;
  newParam: boolean;
}): string {
  return options.text ? `Hello ${options.name}` : `Goodbye ${options.name}`;
}

function functionWithoutExport(param: boolean) {
  return "This is a function without export";
}

function _functionWithUnderscorePrefix(param: boolean) {
  return "This is a function with underscore prefix";
}

export function functionWithoutReturnType(text: string): string {
  return text;
}
