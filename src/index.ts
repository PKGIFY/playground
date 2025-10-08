export function HelloWord(text: string): string {
  return text;
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
