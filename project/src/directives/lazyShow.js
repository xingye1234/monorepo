export const vLazyShow = {
  created(el, binds, vnode, prevVnode) {
    const { value } = binds;

    if (!value) {
      console.log("---------->parentNode", el.parentNode);
      el.style.display = "none";
    }

    console.log("---------->el", el);
    console.log("---------->binds", binds);
    console.log("---------->vnode", vnode);
    console.log("---------->prevVnode", prevVnode);
  },

  updated(el, binds, vnode, prevVnode) {
    const { value } = binds;
    if (value) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  },
};
