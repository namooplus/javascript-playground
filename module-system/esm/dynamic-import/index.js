console.log("Let's import!");

const load = async () => {
  const { a, default: defaultValue } = await import("./module.js");
  console.log(a, defaultValue);
};

load();
