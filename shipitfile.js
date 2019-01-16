'use strict'

module.exports = function (shipit) {
  require('shipit-better-deploy')(shipit)
  require('shipit-better-cnpm')(shipit)
  require('shipit-pm')(shipit)
  shipit.initConfig({
    default: {
      workspace: '/tmp/deploy/vue-link',
      deployTo: '/home/work/vue-link',
      repositoryUrl: 'https://github.com/mengxxSELF/vue-link.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      key: '/path/to/key',
      shallowClone: true,
      cnpm: {
        flags: '--production',
        local: false,
        npm: 'cnpm',
        remote: true
      },
      pm: {
        production: {
          path: '/home/work/vue-link/current/pm2.json'
        }
      }
    },
    production: {
      // servers: ['root@101.200.45.254'],
      servers: ['root@47.104.231.146'],
      branch: 'master'
    }
  })
}
