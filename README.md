# Helix Logo

## Setup
1. Copy `docker-compose-example.yml` to `docker-compose.yml` and change any settings you need
2. Build the container, install packages, and exit cleanly: `docker-compose run web bash -c 'npm install; exit' && docker-compose down`
3. Copy `.env-example` to `.env` and enter your configuration

## Development
Just run `docker-compose up`

You'll find the front-end in the `public-source` folder.

## Deployment
Use the `./tools`

### Staging
To deploy to Staging, use the `./tools`.
`./tools deploy:staging` will pull the latest develop onto staging.logo.newcastlehelix.com

### Production
To deploy to Production, fist navigate to github and draft a new release, following the versioning standard.

- (X).0.0 - Major release
- 0.(X).0 - Feature release
- 0.0.(X) - Bugfix release  

https://github.com/Your-Majesty/newcastle-helix-logo/releases

Then set the Production environment to use that tag.  
`./tools deploy:production 1.0.1`
