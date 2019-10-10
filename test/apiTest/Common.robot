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
Resource    TestGetElections.robot
*** Variables ***
${API}      http://localhost:3000
${authority username}  authority
${voter username}  voter
${candidate username}  candidate
${any username}  any
*** Test Cases ***
Scenario: GET get version - TestVersion
    Given I Set GET version API endpoint
    When Send GET HTTP request
    Then I recive valid HTTP response code 200 and key version is not null

Scenario: success - Signin With "Authority" account
    Given a user with authority account
    When user has signin
    And user get result 
    Then user recived status code 200
    And recived access token
    And role is authority

Scenario: GetElections List
    Given a user request the election list
    When user get election list
    #And user get result
    Then user recived status code 200
    And data type should be array json

Scenario: Create Election
    Given a user create election infomation
    When user post election infomation
    Then user recived status code 201

# Scenario: UpdateElectionStatus
#     Given 
#     When 
#     Then 

Scenario: success - Signin With "voter" account
    Given a user with voter account
    When user has signin
    And user get result 
    Then user recived status code 200
    And recived access token
    And role is voter

Scenario: success - Signin With "candidate" account
    Given a user with candidate account
    When user has signin
    And user get result
    Then user recived status code 200
    And recived access token
    And role is candidate

Scenario: fail - Signin With "any" account
    Given a user with any account
    When user has signin
    Then user recived status code 401

Scenario: Signout
    Given a user request signout
    When user get signout
    Then user recived status code 200

Scenario: success - GetUserProperties
    Given a user request they infomation
    When user get infomation
    Then user recived status code 200
    And user get result
    And user should have "id" "fname" "lname" "username" "role" "status"

Scenario: fail - GetUserProperties
    Given a anonymous request they infomation
    When user get infomation
    Then user recived status code 401