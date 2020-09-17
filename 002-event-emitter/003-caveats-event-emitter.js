const {EventEmitter} = require('events');

class MyEmitter extends EventEmitter {
  constructor(str) {
    super();
    if (typeof str !== 'string') {
      process.nextTick(_ => {
        this.emit('error', new TypeError('should be a string'));
      })
    } else {
      process.nextTick(() => {
        this.emit('start')
      })
    }
  }
}

const ee = new MyEmitter(1);

ee.on('error', e => {
  console.log(`Error event: ${e.message}`);
});

ee.on('start', () => {
  console.log('Started...');
});


