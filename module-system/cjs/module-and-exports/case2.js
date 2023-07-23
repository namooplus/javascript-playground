var module = { exports: {} };

((module, exports) => {
  console.log("Before: module.exports === exports", module.exports === exports);

  /** Codes in a module */
  module.exports.a = "Assigned by module.exports";
  exports = { b: "Assigned by exports" }; // exports reassigned and now module.exports and exports refer to different things
  /** Codes in a module */

  console.log("After: module.exports === exports", module.exports === exports);
  console.log("  => module.exports", module.exports);
  console.log("  => exports", exports);
})(module, module.exports);

console.log("return", module.exports);
