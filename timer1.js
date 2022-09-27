const myArgs = process.argv.slice(2);
const sound = '\x07';

const timer = function(myArgs) {
  for (const i of myArgs) {
    if (i === undefined) {
      continue;
    }
    if (i < 0) {
      continue;
    }
    if (isNaN(i)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write(sound);
    }, i * 1000);
  }
};
timer(myArgs);
