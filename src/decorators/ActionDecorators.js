export function payload(...params) {
  return function(target, propertyKey, descriptor) {
    descriptor.initializer = () => new ConfigurePayload(params);
    return descriptor;
  };
}

export function actionsCreator() {
  return function (constructor) {
    const instance = new constructor();
    const fields = Object.getOwnPropertyNames(instance);

    return class extends constructor {
      constructor() {
        super();

        fields.forEach(field => {
          const actionType = actionTypeFromFieldName(field);

          if (instance[field] instanceof ConfigurePayload || !instance[field]) {
            this[field] = (...args) => {
              let payload = getInstancePayload(instance, field, args);
              if (!payload) {
                payload = args.length
                  ? args.length === 1
                    ? args[0]
                    : args
                  : undefined;
              }

              return {
                type: actionType,
                payload
              };
            };
          }

          this[field].actionType = actionType;
          this[field].toString = () => actionType;
        });
      }
    };
  }
}

class ConfigurePayload {
  constructor(props) {
    this.payloadFields = props;
  }
}

function getInstancePayload(instance, field, args) {
  return (
    instance[field] &&
    instance[field].payloadFields.reduce((accumulator, current, index) => {
      accumulator[current] = args && args[index];
      return accumulator;
    }, {})
  );
}

function actionTypeFromFieldName(methodName) {
  return methodName.replace(/([A-Z])/g, "_$1").toUpperCase();
}
