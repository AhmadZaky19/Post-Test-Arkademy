function isPalindrome(string) {
    if (typeof string !== 'string') {
      console.log('bukan string')
    } else {
      if (string === string.split('').reverse().join('').toLowerCase()) {
        console.log('String merupakan Palindrome')
      } else {
        console.log('String bukan Palindrome')
      }
    }
  
  }
  isPalindrome('malam')
  isPalindrome('nine')
