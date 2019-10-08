*** Keywords ***
I Set GET signout API endpoint
    Create Session  signout  ${API}/signout

I Set HEADER param request type as "application/json", "authentication bearer {token}" and query id
    ${header}=  Create Dictionary  Content-Type=application/json    Authorization=bearer ${body['token']}
    Set Global Variable  ${header}

Send a GET HTTP request
    ${res}=  GET Request  signout  /    headers=${header}
    ${body}=  To Json  ${res.content}
    Set Global Variable  ${res}

response should return status code 200
    Should Be Equal As Strings  ${res.status_code}  200   