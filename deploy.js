const path = require('path');
const { execSync } = require('child_process');

const deployScriptDir = require.main.path;
const pathToCopyInto = path.join('~', 'overlords-menagerie', 'public_html');

execSync('git pull origin master');
execSync('npm install');
execSync('npm run build');
execSync(`cp -rf ${deployScriptDir}/dist/* ${pathToCopyInto}`);
