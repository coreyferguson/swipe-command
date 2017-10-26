
const path = require('path');
const { spawn } = require('child-process-promise');

cleanDistFolder()
  .then(copyPublicAssets)
  .then(webpack)
  .catch(err => {
    if (err && err.message) console.error('message:', err.message);
    if (err && err.stderr) console.error('stderr:', err.stderr);
    if (err && err.stack) console.error('stack:', err.stack);
  });

function cleanDistFolder() {
  return spawn(
    'rm',
    [
      '-fr',
      path.join(__dirname, '../dist')
    ],
    { capture: [ 'stdout', 'stderr' ]}
  );
}

function copyPublicAssets() {
  return spawn(
    'cp',
    [
      '-RT',
      path.join(__dirname, '../public'),
      path.join(__dirname, '../dist')
    ],
    { capture: [ 'stdout', 'stderr' ]}
  );
}

function webpack() {
  return spawn(
    'npm',
    ['run', 'webpack'],
    { capture: [ 'stdout', 'stderr' ]}
  );
}
