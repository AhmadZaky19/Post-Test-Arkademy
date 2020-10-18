const revPyramid = (n) => {
    for (let i = 0; i < n; i++) {
      let line = " ";
      for (let j = 0; j < n * 2 - 1; j++) {
        if (i === 0) {
          line += "o  ";
        } else if (i === j) {
          line += "o  ";
        } else if (j === 2 * n - 2 - i) {
          line += "o  ";
        } else {
          line += "   ";
        }
      }
      console.log(line);
    }
  };
  revPyramid(7);
