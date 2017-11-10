module.exports = probotPlugin

const handleGuys = require('./lib/handle-guys')

function probotPlugin (robot) {
  robot.on([
    'issue_comment.created',
    'issues.opened',
    'pull_request.opened'
  ], handleGuys.bind(null, robot))
}
