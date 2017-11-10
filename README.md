# Guys Bot
Making language on GitHub more inclusive one bot at a time 🤖 

![Image of example behavior](example.png)

## Getting Started with Glitch

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/guys-bot)

To get your own Glitch-hosted Guys Bot up-and-running, start by clicking the "Remix on Glitch" button above, and follow the steps below:

1. [Configure a new app on Github](https://github.com/settings/apps/new).
    - For the Webhook URL, use `https://www.example.com`. This will be replaced later.
    - For the Webhook Secret, open a terminal and run `openssl rand -base64 32`. Copy/paste the outputted value to the Webhook Secret box. Keep this handy until Step 3.
    - Choose the permissions you want to give your bot based on what you want to build (ex. issues bot, PR bot, hybrid).
    - Save your changes.

2. You will need to download your private key near the end of the page. Keep this handy until Step 3. 

3. Now, go to your Glitch project and edit the `.env` file (at left) with your app credentials. 
    - `APP_ID` can be found in the About section of your Github app.
    - `WEBHOOK_SECRET` is the value you generated in Step 2.
    - `PRIVATE_KEY` should be set to your downloaded private key. The `PRIVATE_KEY` will need to have `\n` for new lines, including a trailing `\n`. Here's an example, the actual key will be longer: `'-----BEGIN RSA PRIVATE KEY-----\ndfkls83jrfsdf\nndfkls83jrfsdf\ndfkls83jrfsdf\n-----END RSA PRIVATE KEY-----\n'` If you are running on Mac or Linux, you can get this in your Terminal by using the commamnd: `awk '{printf "%s\\n", $0}' private_key_file_name.pem`.
    - `NODE_ENV=` should be set to `production`. 

4. Wait for app to load. A green `Live` label should show up next to the **Show** button when it's finished loading.

**The docs are a work in progress. If you get stuck, please open an issue and I'll try to help you.**
