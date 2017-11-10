module.exports = handleGuys

async function handleGuys (robot, context) {
  console.log(context.event)
  const regex = /\bguys\b/i
  var guysPresent = false

  if (context.event === 'issue_comment' || context.event === 'issues') {
    guysPresent = regex.test(context.payload.issue.body)
  } else if (context.event === 'pull_request') {
    guysPresent = regex.test(context.payload.pull_request.body)
  }

  if (guysPresent && !context.isBot) {
    const params = context.issue({body: 'Hey! Instead of _guys_, maybe you could try using _team_, _all_, _folks_, _everyone_, or _y\'all_? [Here\'s why.](https://www.vox.com/2015/6/11/8761227/you-guys-sexism-language)'})
    return context.github.issues.createComment(params)
  }
}
