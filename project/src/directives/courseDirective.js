export const vDel = {
  mounted(el, binds) {
    const { data, row, col } = binds.value;
    delete data[`${col}-${row}`];
  },
};
