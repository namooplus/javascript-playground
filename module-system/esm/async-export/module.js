// Top level await in module
await new Promise((resolve) => {
  setTimeout(() => {
    console.log("Load started!");
    resolve();
  }, 1000);
});

const a = await new Promise((resolve) => {
  setTimeout(() => {
    resolve("A");
  }, 1000);
});

export { a };
