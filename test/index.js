const expect = require('expect')
const {createRobot} = require('probot')
const plugin = require('..')
const payload = require('./events/payload')

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

  describe('bot message success', function () {
    it('posts a comment because user used guys', async function () {
      await robot.receive(payload)

      expect(github.issues.createComment).toHaveBeenCalled()
    })
  })
})
