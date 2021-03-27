require('dotenv').config();

const applist = [
  {
    name: 'american-british-translator'
  },
  {
    name: 'anonymous-message-board',
    env: {
      DB_URI: process.env.anonymous_message_board_DB_URI
    }
  },
  {
    name: 'build-a-pinterest-clone',
    env: {
      GITHUB_KEY: process.env.build_a_pinterest_clone_GITHUB_KEY,
      GITHUB_SECRET: process.env.build_a_pinterest_clone_GITHUB_SECRET,
      DB_URI: process.env.build_a_pinterest_clone_DB_URI,
      APP_URL: process.env.build_a_pinterest_clone_APP_URL
    }
  }
];

module.exports = {
  apps: applist.map((app, index) => {
    const { name, env } = app;
    return {
      name: name,
      script: `server.js`,
      cwd: `./apps/${name}`,
      watch: true,
      watch_delay: 5000,
      ignore_watch: ['node_modules'],
      env: Object.assign(
        {},
        {
          PORT: 50000 + 10 * (index + 1)
        },
        env ? env : {}
      )
    };
  })
};
