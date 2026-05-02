module.exports = {
    default: {
        require: [
            "Features/Step-definitions/*.js",
            "Features/Support/*.js"
        ],
        path: ["Features/**/*.feature"],
        format: [
            "progress-bar",
            "html:reports/cucumber-report.html",
            "json:reports/cucumber-report.json",
            "rerun:@rerun.txt"
        ]
    }
}