Feature: Admin

Background: common step
Given user is on login page
When user logs in with valid credentials


Scenario: validate Admin page
Then user navigate to Admin page
Then user management title should be display