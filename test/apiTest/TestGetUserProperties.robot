*** Keywords ***
Given I Set GET userproperties API endpoint
    Create Session  userproperties ${API}/userproperties

When I Set HEADER param request type as "application/json" and "authentication bearer {token}"
    ${header}=  Create Dictionary Content-Type=application/json  Authorization=bearer ${body['token']}
    Set Global Variable  ${header}

And Send a GET HTTP request
    ${res}=  GET Request  userproperties  /    data=${reqBody}     headers=${header}
    ${body}=  To Json  ${res.content}
    Set Global Variable  ${res}
    Set Global Variable  ${body}
    
Then response should return status code 200 and message not equal not found user
    Should Be Equal As Strings  ${res.status_code}  200
    Should not equal  ${body.message}  not found user