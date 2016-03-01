var categories = require('./categories');

module.exports = function color(v) {
  if (typeof v === 'number') {
    if(v===0) return 'white';
    if(v===1) return '#EEE';
    if(v>=2) return 'white';
  }
  if(v===categories.PS) return 'purple';
  if(v===categories.CM) return 'gold';
  if(v===categories.CR) return 'royalblue';
  if(v===categories.CL) return 'limegreen';
};
