// export class Mitt {
//   handles = {};
//   constructor() {}

//   static on(eventName, cb) {
//     let handleName = this.handles[eventName];
//     if (!handleName) {
//       handleName = [];
//     }
//     handleName.push(cb);
//     console.log("---------->", this.handles);
//   }

//   static emit(eventName, val) {
//     console.log("---------->", this.handles);
//     const handle = this.handles[eventName];
//     if (handle) {
//       handle.forEach((item) => {
//         item(val);
//       });
//     }
//   }
// }

const mitt = () => {
  const handleMap = new Map();
  function on(eventName, cb) {
    if (!handleMap.has(eventName)) {
      handleMap.set(eventName, []);
    }
    handleMap.get(eventName).push(cb);
  }
  function emit(eventName, val) {
    const handle = handleMap.get(eventName);
    if (Array.isArray(handle)) {
      handle.map((item) => item(val));
    }
  }

  function off(eventName) {
    const handle = handleMap.get(eventName);
    if (handle) {
      handleMap.delete(eventName);
    } else {
      handleMap.clear();
    }
  }

  return { on, emit, off, handleMap };
};

export const mitter = mitt();
