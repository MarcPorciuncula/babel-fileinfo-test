const util = require('util');

module.exports = function(babel) {
  return {
    visitor: {
      Expression(path, state) {
        process.stdout.write('state.file.filename is ' + state.file.filename + '\n');
        process.stdout.write('state.file.opts: ' + util.inspect(state.file.opts) + '\n');
      }
    }
  }
}
