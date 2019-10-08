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
Resource    TestGetUserProperties.robot
Resource    TestCreateElection.robot
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
    Then response should return status code 200 and role equal voter
Scenario: POST post signin - TestSignin --fail
    Given I Set POST signin API endpoint
    When I Set HEADER param request type as "application/json"
    And Set request Body with "fake" username and password
    And Send a POST HTTP request - fail
    Then response should return status code 401
Scenario: GET post signout - TestSignOut --success
    Given I Set GET signout API endpoint
    When I Set HEADER param request type as "application/json", "authentication bearer {token}" and query id
    And Send a GET HTTP request
    Then response should return status code 200
Scenario: GET get userProperties - TestGetUserProperties
    Given I Set GET userproperties API endpoint
    When I Set HEADER param request type as "application/json" and "authentication bearer {token}"
    And Send a GET HTTP request to userproperties
    Then response should return status code 200
Scenario: POST post election - TestCreateElection
    Given I Login as authority 
    And I Set POST election API endpoint
    When I Set HEADER param request type as "application/json" and "authentication bearer {token}"
    And I Set request Body with "topic" "description" "start_vote_datetime" "end_vote_datetime" "start_register_datetime" "end_register_datetime"
    And Send a POST HTTP request to create Election
    Then response should return status code 200
