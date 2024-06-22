export const reactive = (data) => {
  const o = {};
  const handles = {};

  for (const key in data) {
    Object.defineProperty(o, key, {
      get() {
        return data[key];
      },
      set(val) {
        handles[key].forEach((item) => {
          item(data[key], val);
        });
        data[key] = val;
      },
    });
  }

  function on(eventName, cb) {
    if (!handles[eventName]) {
      handles[eventName] = [];
    }

    handles[eventName].push(cb);
  }

  return {
    state: o,
    on,
  };
};
