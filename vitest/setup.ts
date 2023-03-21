export function setup () {
  global.CSS = {
    supports: () => false,
    escape: (str: string) => str
  };
}
