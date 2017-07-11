const fs = require("fs");

const buffer = fs.readFileSync("./data.json");
const showsObj = JSON.parse(buffer);
const buffer2 = fs.readFileSync("./public/data.json");
const showsObj2 = JSON.parse(buffer2);

const showsArr = showsObj.shows.concat(showsObj2.shows);

const showsFiltered1 = showsArr.filter(
  (show, index, self) => self.findIndex(s => s.title === show.title) === index
);

const showsFiltered = showsArr.filter((show, index, self) => index === self.indexOf(show));

const showsObj3 = {
  shows: showsFiltered1
};
// console.log(showsObj.shows.length,showsObj2.shows.length,showsArr.length)
// console.log(showsArr)
// console.log(showsArr.length)
// console.log(showsFiltered.length)
// console.log(showsFiltered1.length)

// fs.writeFileSync('data2.json',JSON.stringify(showsObj3))
