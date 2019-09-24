const path = require('path');
const src = (...subdir) => {
  return path.join(__dirname, '..', ...subdir);
};

module.exports = {
  atoms: src(`atoms`),
  molecules: src(`molecules`),
  organisms: src(`organisms`),
  templates: src(`templates`),
  pages: src(`pages`),
  hack: src(`hack`),
  utils: src(`utils`),
};
