if (condition) {
    // code that is executed if "condition" is true
  }


  if (condition) {
    // code that is executed if "condition" is true
  } else {
    // code that is executed otherwise
  }
  

  if (condition1) {
    // code that is executed if "condition1" is true
  } else if (condition2) {
    // code that is executed if "condition2" is true
    // but "condition1" was false
  } else {
    // code that is executed otherwise
  }

  if (condition1) {
    // ...
  } else if (condition2) {
    // ...
  } else if (condition3) {
    // ...
  } else if (condition4) {
    // ...
  } else {
    // ...
  }

  if (num >= 0 && num < 1) {
    // ...
  }
  
  // The inner brackets are obsolete because relational operators
  // have higher precedence than logical operators.
  if (num >= 0 && num < 1) {
    // ...
  }

  function checkNumber(num) {
    let message = '';
  
    if (num === 0) {
      message = 'You passed 0, please provide another number.';
    } else {
      message = 'Valid number';
    }
  
    return message;
  }
  
  // Can also be written as ...
  function checkNumber(num) {
    if (num === 0) {
      return 'You passed 0, please provide another number.';
    }
  
    return 'Valis Number';
  }