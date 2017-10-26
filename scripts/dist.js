
/* eslint no-console: "off" */

const asciify = require('asciify');
const path = require('path');
const { spawn } = require('child-process-promise');

cleanDistFolder()
  .then(copyPublicAssets)
  .then(webpack)
  .then(() => {
    return new Promise((resolve, reject) => {
      asciify('Success!', { font: 'shadow' }, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  })
  .then(message => {
    console.log();
    console.log(message);
  })
  .catch(err => {
    if (err && err.message) console.error('message:', err.message);
    if (err && err.stderr) console.error('stderr:', err.stderr);
    if (err && err.stack) console.error('stack:', err.stack);
  });

function cleanDistFolder() {
  console.log('Cleaning dist folder.');
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
  console.log('Copying public assets.');
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
  console.log('Building src with webpack.');
  return spawn(
    'npm',
    ['run', 'webpack'],
    { capture: [ 'stdout', 'stderr' ]}
  );
}
