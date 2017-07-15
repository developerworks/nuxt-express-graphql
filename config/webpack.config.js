const path = require('path');

module.exports = function() {
    // this = context
    console.log(this);

    return {
        resolve: {
            alias: {
                "@components": path.resolve(__dirname, '../src/client/components'),
            }
        }
    }
}