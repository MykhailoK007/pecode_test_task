export function promiseTemplate(...callbacks) {
  let promise = new Promise((res, rej) => {
    res(callbacks[0]());
  });
  for (let i = 1; i < callbacks.length; i++) {
    promise.then(() => {
      return callbacks[i]();
    });
  }
}
