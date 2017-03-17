function my_max(arr){
  var biggestNum = arr.reduce(function(a, b){
    return Math.max(a, b);
  });
  return biggestNum;
}

var integers = [1,34,5,2];
console.log(my_max(integers));


function vowel_count(string){
  var m = string.match(/[aeiouy]/gi).length;
  return m;
}

var sentence = 'AEIOU ?';
console.log(vowel_count(sentence));


function reverse(string) {
  var arr = string.split('').reverse().join('');
  console.log(arr);
}

console.log(reverse("Sam is a cat"));
