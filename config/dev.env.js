'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

// vue.config.js
module.exports = {
  chainWebpack: config => config.resolve.symlinks(false)
}

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
