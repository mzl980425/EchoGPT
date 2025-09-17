if (!globalThis.Deno) {
  // @ts-ignore
  globalThis.Deno = {};
  // @ts-ignore
  globalThis.Deno.version = {
    // @ts-ignore
    node: globalThis.process?.versions?.node,
    // @ts-ignore
    v8: globalThis.process?.versions?.v8,
  };
}
