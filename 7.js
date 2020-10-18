const count_handshake = (num) => {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }
  const count = arr.reduce((acum, val) => acum + val);
  return count;
};

console.log(count_handshake(3));
