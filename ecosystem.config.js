module.exports = {
  apps : [{
    script: 'bun start',
  }],

  deploy : {
    production : {
      user : 'hisyamkamil99',
      host : '34.46.7.132',
      ref  : 'origin/dev',
      repo : 'git@github.com:hisyam99/sipinter-web.git',
      path : '/home/hisyamkamil99/sipinter-web',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.bashrc && bun install && bun run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
    }
  }
};
