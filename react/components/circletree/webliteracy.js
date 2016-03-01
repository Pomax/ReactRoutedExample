var categories = require('./categories'),
    PS = categories.PS,
    CM = categories.CM,
    CR = categories.CR,
    CL = categories.CL;

var WebLiteracy = {
  "Cat Behaviour": {
    "scratchy": {
      "front claws": [PS],
      "rabbit punch": [PS, CM],
      "both!": [PS],
      "mystery claws": [PS]
    },
    "chompy": {
      "playful": [PS, CM, CR],
      "serious": [PS, CR],
      "murder mode": {
        "soon": [PS, CM],
        "RIGHT NOW!": [CR],
        "you're bleeding": [CR]
      }
    },
    "escapy": {
      "wriggling": [PS, CM, CL, CR],
      "slinking": [PS, CM],
      "blatant": [CM, CL],
      "jumpy": [CM, CL],
      "it's complicated": {
        "well...": [CM, CR],
        "just gone": [CM, CR]
      }
    }
  }
};

module.exports = WebLiteracy;
