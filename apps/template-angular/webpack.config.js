const {
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'template-angular',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': './apps/template-angular/src/app/employee-profile/employee-profile.module.ts',
  },
});
