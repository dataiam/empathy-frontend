const path = require('path')
 
module.exports = {
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}