Guys Bot
=========================

![Image of example behavior](example.png)

## Getting Started

[![Remix on Glitch](https://cdn.glitch.com/2703baf2-b643-4da7-ab91-7ee2a2d00b5b%2Fremix-button.svg)](https://glitch.com/edit/#!/remix/guys-bot)

To get your own Glitch-hosted Probot up-and-running:

1. [Configure a new app on Github](https://github.com/settings/apps/new).
    - For the Homepage URL, you can use your repository URL or website URL. 
    - For the Webhook URL, use `https://www.example.com`. This will be replaced     later.
    - For the Webhook Secret, open a terminal and run `openssl rand -base64 32`. Copy/paste the outputted value to the Webhook Secret box. Keep this handy
    until Step 4.
    - Choose the permissions you want to give your bot based on what you want to build (ex. issues bot, PR bot, hybrid).
    - Download your private key.
    - Save your changes.

2. Private key stuff

3. Edit the `.env` file (at left) with your app credentials. 
    - `APP_ID` can be found in the About section of your Github app.
    - `WEBHOOK_SECRET` is the value you generated in Step 2.
    - `PRIVATE_KEY` should be set to your downloaded private key. 
    - `NODE_ENV=` should be set to `production`. 

4. Wait for app to load. A green `Live` label should show up next to the **Show** button when it's finished loading.
