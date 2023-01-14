const {isHappy,position} = require('./module/isHappy')

const level = ["-", "-", "-", "-", "-", "-", "-"];

const changeMap = (index, item) => {
  if(index>level.length || typeof item !== 'string') throw Error('incorrect params')
  const newLevel = level.map((e, i) => (i === index ? item : e));
  return newLevel;
};

console.log(changeMap(position,isHappy));
 