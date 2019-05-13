import rpn from 'request-promise-native';
import pkg from '../package.json';

const request = rpn.defaults({
  jar: rpn.jar(),
  'User-Agent': `put/${pkg.version}`
});

export default request;
