export const proxyReactive = (data) => {
  const handles = {};
  const proxy = new Proxy(data, {
    get(target, key) {
      return Reflect.get(target, key);
    },
    set(target, key, val) {
      const handle = handles[key];
      if (Array.isArray(handle)) {
        handle.forEach((item) => {
          item(data[key], val);
        });
      }
      return Reflect.set(target, key, val);
    },
  });

  function on(eventName, cb) {
    if (!handles[eventName]) {
      handles[eventName] = [];
    }
    handles[eventName].push(cb);
  }

  return {
    state: proxy,
    on,
  };
};
