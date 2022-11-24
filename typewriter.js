const sentence = "hello there from lighthouse labs";

let x = 0;
const timeout = function() {
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, x += 50);
  }
  return x;
};

setTimeout(() => {
  console.log('\n');
}, timeout() + 50);
