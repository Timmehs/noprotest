# Greater Good Innovations
<img src="https://github.com/Timmehs/greater-good-innovations/raw/master/src/images/ggi-logo.png" width="300"/>

## Development
**Please do not commit directly to master**

### Basic content changes and page creation
* Use Forestry.io to make and preview changes.

### Styling, content block configuration, and other more detailed changes
Please create a branch that describes your changes, e.g.:
```
git checkout master # branch off of master branch
git pull origin master # pull latest changes on master
git checkout -b rounded-avatar-images # create your branch
```

### Deployment
* Return to https://github.com/Timmehs/greater-good-innovations and open a pull request against `master`
 * If deploying changes from forestry, you will create a PR from `development` into `master`
 * If deploying changes made locally, you will create a PR from `your-branch-name` into `master`
* Wait for tests to pass, review Netlify deploy preview, and click merge if everything looks good.

## Technologies

Built with:

- [gatsbyjs](https://www.gatsbyjs.org/) (JavaScript/React Static Site Framework)
- [bulma](https://bulma.io/) (Style framework)
- [forestry.io](https://app.forestry.io) (Content Management System)
- [netlify](https://www.netlify.com) (deployment/hosting)

## Admin

For questions or administrative access to any aspect of this site, please contact Tim Sandberg tasandberg@gmail.com
