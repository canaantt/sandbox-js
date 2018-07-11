const _ = require("lodash")
const json2csv = require('json2csv').parse;
const fs = require("fs");
var bbi = require("./BrotmanBaty-followers.json");

var bbi_sorted = _.sortBy(bbi, (o) => o.followers_count);

var bbi_sorted_fc = bbi_sorted.map(o=>o.followers_count);

var bbi_d= bbi_sorted_fc.map(o=>{
    // var obj = {};
    // obj[o.screen_name] = o.followers_count;
    // return obj;
    var arr = [];
    arr[0] = o.screen_name;
    arr[1] = o.followers_count;
    return arr;
});
var bbi_csv = json2csv(bbi_d);
fs.writeFile('bbi_csv.csv', bbi_csv, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });