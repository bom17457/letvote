*** Settings ***
Library		Collections
Library		RequestsLibrary
Library		HttpLibrary.HTTP
Library		DatabaseLibrary
Library		String
Library     json
Resource    TestVersion.robot
Resource    TestSignin.robot
Resource    TestSignout.robot
*** Variables ***
${API}      http://localhost:3000
*** Test Cases ***
Scenario: GET get version - TestVersion
    Given I Set GET version API endpoint
    When Send GET HTTP request
    Then I recive valid HTTP response code 200 and key version is not null
Scenario: POST post signin - TestSignin --success
    Given I Set POST signin API endpoint
    When I Set HEADER param request type as "application/json"
    And Set request Body with "real" username and password
    And Send a POST HTTP request
    Then response should return status code 200 and role equal student
Scenario: POST post signin - TestSignin --fail
    Given I Set POST signin API endpoint
    When I Set HEADER param request type as "application/json"
    And Set request Body with "fake" username and password
    And Send a POST HTTP request - fail
    Then response should return status code 401
Scenario: GET post signout - TestSignOut --success
    Given I Set GET signout API endpoint
    When I Set HEADER param request type as "application/json", "authentication bearer {token}"
    And Send a GET HTTP request
    Then response should return status code 200
Scenario: GET get userProperties - TestGetUserProperties
    Given I Set GET userproperties API endpoint
    When I Set HEADER param request type as "application/json" and "authentication bearer {token}"
    And Send a GET HTTP request
    Then response should return status code 200 and message not equal not found user