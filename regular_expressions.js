"use strict"
// Determine whether a string contains a nomor KTP

function has_ktp(string) {
  var pattern = /\d\d\d\-\d\d\-\d\d\d\d$/g;
  return pattern.test(string);
}

console.log("------ has_ktp() -------");
console.log("has_ktp returns true if it has what looks like a nomor KTP")
console.log(has_ktp("please don't share this: 234-60-1422") == true)

console.log("has_ktp returns false if it doesn't have a nomor KTP")
console.log(has_ktp("please confirm your identity: XXX-XX-1422") == false)



// Return the Social Security number from a string.
function grab_ktp(string) {
  var pattern = /\d\d\d\-\d\d\-\d\d\d\d/g;
  var posisi;

  if (has_ktp(string) == true) {
    posisi = string.search(pattern);
    return string.slice(posisi,posisi+11);
  }
}

console.log();
console.log("------ grap_ktp() -------");

console.log("grab_ktp returns an nomor KTP if the string has an nomor KTP")
console.log(grab_ktp("please don't share this: 234-60-1422") == "234-60-1422")

console.log("grab_ktp returns nil if it doesn't have a nomor KTP")
console.log(grab_ktp("please confirm your identity: XXX-XX-1422") == null)



// Return all of the Social Security numbers from a string.
function grab_all_nomor_ktp(string) {
  var pattern = /\d\d\d\-\d\d\-\d\d\d\d/g;
  return string.match(pattern);
}

console.log();
console.log("------ grap_all_nomor_ktp() -------");
console.log("grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP")
console.log(grab_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp("please confirm your identity: XXX-XX-1422"))
// return []


// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
function hide_all_nomor_ktp(string) {
  return string.replace(/\d\d\d-\d\d/g,"XXX-XX");
}

console.log();
console.log("------ hide_all_nomor_ktp() -------");
console.log("hide_all_nomor_ktp obfuscates any nomor KTP in the string")
console.log(hide_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log("hide_all_nomor_ktp does not alter a string without nomor KTP in it")
var string = "please confirm your identity: XXX-XX-1422"
console.log(hide_all_nomor_ktp(string) == string)



// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
function format_nomor(string) {

//  return string.replace(/(\d\d\d\d\d|\d\d\d.\d\d|\d\d\d-\d\d)/g,"XXX-XX");
//  var pattern = /\d\d\d\d\d\d\d\d\d | \d\d\d.\d\d | \d\d\d-\d\d-\d\d\d\d/g;
  string = string.replace(/[.]/g,"-");


  var nomor = string.match(/[\d][\d][\d][\d][\d][\d][\d][\d][\d]/i);
  string = string.replace(nomor.toString(),
    nomor.slice(0,1) +
    nomor.slice(1,2) +
    nomor.slice(2,3) + "-" +
    nomor.slice(3,4) +
    nomor.slice(4,5) + "-" +
    nomor.slice(5,6) +
    nomor.slice(6,7) +
    nomor.slice(7,8) +
    nomor.slice(8,9)
  )
  console.log(nomor);
  return string;

}

console.log();
console.log("------ format_nomor() -------");

console.log("format_nomor finds and reformat any nomor KTP in the string")
console.log(format_nomor("234601422, 350.80.0744, 013-60-8762") == "234-60-1422, 350-80-0744, 013-60-8762")

console.log("format_nomor does not alter a string without nomor KTP in it")
string = "please confirm your identity: 44211422"
console.log(format_nomor(string) == string)

console.log(format_nomor("234601422, 350.80.0744, 013-60-8762"));
