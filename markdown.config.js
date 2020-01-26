'use strict';

const fs = require('fs');

module.exports = {
  transforms: {
    TEMPLATES_LIST() {
      const templates = fs.readdirSync(`${__dirname}/templates`);
      return templates.map(name => `- [${name}](./templates/${name})`).join('\n');
    }
  },
  callback() {
    console.log('done')
  }
}
