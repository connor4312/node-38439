const { isMainThread, Worker } = require('worker_threads');

if (isMainThread) {
  new Worker('./index.js');
} else {
  console.log('--Worker--');
}
