
Feature: Login

Background: common
Given user is on login page


Scenario: valid login
When user logs in with valid credentials
Then dashboard should be displayed

Scenario: invalid login with invalid username
When user logs in with invalid username
Then error message should be displayed

Scenario: invalid login with invalid password
When user logs in with invalid password
Then error message should be displayed
