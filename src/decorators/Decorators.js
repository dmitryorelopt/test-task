export function getClassDecorator(constructor, proxyFunction, decoratorName) {
  const name = decoratorName ? decoratorName : proxyFunction.name;
  if (typeof constructor !== "function") {
    return function(constructor) {
      if (typeof constructor !== "function") {
        throw new Error(`${name} decorator must used only with class`);
      }

      return proxyFunction(constructor);
    };
  }
  return proxyFunction(constructor);
}
