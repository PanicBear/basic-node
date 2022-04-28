const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
};
emitter.on('clarko', callback1);

emitter.on('clarko', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('clarko', { message: 1 });
emitter.emit('clarko', { message: 2 });
emitter.removeListener('clarko', callback1);
emitter.emit('clarko', { message: 3 });
