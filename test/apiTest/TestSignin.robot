*** Keywords ***
I Set POST signin API endpoint
    Create Session  signin  ${API}/signin

I Set HEADER param request type as "application/json"
    ${header}=  Create Dictionary  Content-Type=application/json
    Set Global Variable  ${header}

Set request Body with "real" username and password
    ${reqBody}=  Create Dictionary  username=voter  password=abcd1234
    Set Global Variable  ${reqBody}

Send a POST HTTP request
    ${res}=  Post Request  signin  /    data=${reqBody}     headers=${header}
    ${body}=  To Json  ${res.content}
    Set Global Variable  ${res}
    Set Global Variable  ${body}

Send a POST HTTP request - fail
    ${res}=  Post Request  signin  /    data=${reqBody}     headers=${header}
    Set Global Variable  ${res}

Then response should return status code 200 and role equal student
    Should Be Equal As Strings  ${res.status_code}  200
    Should Be String  ${body['role']}

Set request Body with "fake" username and password
     ${reqBody}=  Create Dictionary  username=voter  password=abab
     Set Global Variable  ${reqBody}

Then response should return status code 401
    Should Be Equal As Strings  ${res.status_code}  401    