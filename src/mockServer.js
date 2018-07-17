/**
 * Effect as: json-server db.json --routes routes.json --port 8080 --delay 1000
 */
const fse = require('fs-extra');
const jsonServer = require('json-server');
const server = jsonServer.create();
const jsonFile = 'db.json';
const router = jsonServer.router('db.json');
//const middlewares = jsonServer.defaults();
/**
 * watching db.json change
 * Thanks to rohan-dephpande at 
 * https://github.com/typeicode/json-server/issues/286
 */
const middlewares = [
  ...jsonServer.defaults( { readOnly: false }),
  ...[
    (req, res, next) => fse 
      .readJSON(jsonFile)
      .then(contents => {
        router.db.assign(contents).write();
        next();
      })
  ]
];
const pause = require('connect-pause');

server.use(middlewares);
server.use(jsonServer.bodyParser);

// ===================================
// Define custom routes (routes.json)
// -----------------------------------
// let routes = JSON.parse(fs.readFileSync('routes.json'));
//server.use(jsonServer.rewriter(routes));

server.use(pause(1000));
server.use('/api', router);
server.listen(8080, () => {
  console.log('JSON Server is running');
});