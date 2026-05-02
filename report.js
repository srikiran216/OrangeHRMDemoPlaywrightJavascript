const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest'
    },
    device: 'Local test machine',
    platform: {
      name: 'windows',
      version: '10'
    }
  }
});

/*const reporter = require('cucumber-html-reporter');

reporter.generate({
  theme: 'bootstrap',
  jsonFile: 'reports/report.json',
  output: 'reports/report.html',
  reportSuiteAsScenarios: true,
  launchReport: true
});*/