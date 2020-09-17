
setTimeout(() => {
  console.log('setTimeout-1'); // 4
}, 10);

setImmediate(() => {
   console.log('setImmediate'); // 3
});

queueMicrotask(() => {
  console.log('queueMicrotask-1'); // 2
});

process.nextTick(() => {
  console.log('nextTick');  // 1
});

/**

 timers: []
 immediate: []
 microtask: []
 nextTick: [] // setTimeout(fn, 0)
 */
