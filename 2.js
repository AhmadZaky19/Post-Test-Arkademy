const firstRepeat = (string) => {
  const newString = string.split("");
  const data = newString.filter((value, index) => {
    return value === value[index];
  });
  return data[0].toString();
};

console.log(firstRepeat("EDCBAEDCBAE"));
