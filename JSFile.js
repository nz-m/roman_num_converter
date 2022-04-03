function convert() {
  regXp = /[^IVXLCDM]/;
  let s = document.querySelector(".input").value.toUpperCase();
  if (regXp.test(s)) {
    document.querySelector("textarea").value =
      "The given value can't be converted!";
  } else {
    let value = 0;
    const mapping = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    for (let i = 0; i < s.length; i++) {
      if (i <= s.length && mapping[s[i + 1]] > mapping[s[i]])
        value = value - mapping[s[i]];
      else {
        value = value + mapping[s[i]];
      }
    }

    if (typeof value == "number") {
      document.querySelector("textarea").value = value;
    }
  }
}
