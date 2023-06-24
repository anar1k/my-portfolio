export function setup () {
  // @ts-ignore
  global.CSS = {
    supports: () => false,
    escape: (str: string) => str
  };
}
