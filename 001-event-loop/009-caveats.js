function promise() {
  return Promise.resolve()
    .then(promise)
}

function nextTick() {
  process.nextTick(nextTick)
}

setTimeout(_ => {
  console.log('timeout');
});
nextTick();
// promise();


console.log('end');
