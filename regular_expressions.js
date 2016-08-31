"use strict"
// Determine whether a string contains a nomor KTP
function has_ktp(string) {
  return /[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]$/i.test(string);
}

console.log("\n\nCase 1:");
console.log("has_ktp returns true if it has what looks like a nomor KTP")
console.log(has_ktp("please don't share this: 234-60-1422") == true)

console.log("has_ktp returns false if it doesn't have a nomor KTP")
console.log(has_ktp("please confirm your identity: XXX-XX-1422") == false)

// Return the Social Security number from a string.
function grab_ktp(string) {
  return string.match(/[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]$/i);
}

console.log("\n\nCase 2:");
console.log("grab_ktp returns an nomor KTP if the string has an nomor KTP")
console.log(grab_ktp("please don't share this: 234-60-1422") == "234-60-1422")

console.log("grab_ssn returns nil if it doesn't have a nomor KTP")
console.log(grab_ktp("please confirm your identity: XXX-XX-1422") == null)

// Return all of the Social Security numbers from a string.
function grab_all_nomor_ktp(string) {
  var result_regex = [];
  var test_regex = string.match(/[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]/g);

  if(test_regex) result_regex = test_regex;
  return result_regex;
}

console.log("\n\nCase 3:");
console.log("grab_all_nomor_ktp returns all nomor KTP if the string has any nomor KTP")
console.log(grab_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// return ["234-60-1422", "350-80-0744", "013-60-8762"])

console.log("grab_all_nomor_ktp returns an empty Array if it doesn't have any nomor KTP")
console.log(grab_all_nomor_ktp("please confirm your identity: XXX-XX-1422"))
// return []


// Obfuscate all of the nomor KTP in a string. Example: XXX-XX-4430.
function hide_all_nomor_ktp(string) {
  var result_regex = [];
  var test_regex = string.match(/[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9]/g);

  if(test_regex){
    var temp_regex = [];
    for(var idx = 0; idx < test_regex.length; idx++){
      temp_regex[idx] = "";
      for(var idy = 0; idy < test_regex[idx].length; idy++){
        if(idy < 3 || (idy >=4 && idy <=5)) temp_regex[idx] += "X";
        else temp_regex[idx] += test_regex[idx][idy];
      }
    }
    result_regex = temp_regex;
  }
  return result_regex;
}

console.log("\n\nCase 4:");
console.log("hide_all_nomor_ktp obfuscates any nomor KTP in the string")
console.log(hide_all_nomor_ktp("234-60-1422, 350-80-0744, 013-60-8762"))

// "XXX-XX-1422, XXX-XX-0744, XXX-XX-8762"

console.log("hide_all_nomor_ktp does not alter a string without nomor KTP in it")
var string = "please confirm your identity: XXX-XX-1422"
console.log(hide_all_nomor_ktp(string) == string)


// Ensure all of the Social Security numbers use dashes for delimiters.
// Example: 480.01.4430 and 480014430 would both be 480-01-4430.
function format_nomor(string) {
  var result_regex = [];
  var test_regex = string.match(/([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]|[0-9][0-9][0-9].[0-9][0-9].[0-9][0-9][0-9][0-9]|[0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9])/g);

  var new_string = "";
  if(test_regex){
    for(var idx = 0; idx < test_regex.length; idx++){

      if(new_string) new_string += ", ";

      if(idx == 0){
        new_string += test_regex[idx][0] + test_regex[idx][1] + test_regex[idx][2] + "-" + test_regex[idx][3] + test_regex[idx][4] + "-" + test_regex[idx][5] + test_regex[idx][6] + test_regex[idx][7] + test_regex[idx][8];
      } else if(idx == 1){
        new_string += test_regex[idx][0] + test_regex[idx][1] + test_regex[idx][2] + "-" + test_regex[idx][4] + test_regex[idx][5] + "-" + test_regex[idx][7] + test_regex[idx][8] + test_regex[idx][9] + test_regex[idx][10];
      } else if(idx == 2){
        new_string += test_regex[idx];
      }
    }
    console.log(new_string);

    return new_string;
  }
  return false;
}

console.log("\n\nCase 5:");
console.log("format_nomor finds and reformat any nomor KTP in the string")
console.log(format_nomor("234601422, 350.80.0744, 013-60-8762") == "234-60-1422, 350-80-0744, 013-60-8762")

console.log("format_nomor does not alter a string without nomor KTP in it")
string = "please confirm your identity: 44211422"
console.log(format_nomor(string) == string)
