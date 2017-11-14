const expect = require('expect')
const {createRobot} = require('probot')
const plugin = require('..')

const prGuysPayload = require('./events/pr_guys')
const issueGuysPayload = require('./events/issue_guys')

describe('guys-bot', () => {
  let robot
  let github

  beforeEach(() => {
    robot = createRobot()
    plugin(robot)
    // This is an easy way to mock out the GitHub API
    github = {
      issues: {
        createComment: expect.createSpy().andReturn(Promise.resolve({
          // Whatever the GitHub API should return
        }))
      }
    }
    // Passes the mocked out GitHub API into out robot instance
    robot.auth = () => Promise.resolve(github)
  })

  describe('Pull requests', function () {
    it('posts a comment because user used guys', async function () {
      await robot.receive(prGuysPayload)

      expect(github.issues.createComment).toHaveBeenCalled()
    })
  })

  describe('Issues', function () {
    it('posts a comment because user used guys', async function () {
      await robot.receive(issueGuysPayload)

      expect(github.issues.createComment).toHaveBeenCalled()
    })
  })
})
