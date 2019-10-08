*** Keywords ***
I Login as authority 
    ${reqBody}=  Create Dictionary  username=authority  password=abcd1234
    ${res}=  Post Request  signin  /    data=${reqBody}     headers=${header}
    ${body}=  To Json  ${res.content}
    Set Global Variable  ${body}
I Set POST election API endpoint
    Create Session  election  ${API}/userproperties
Send a POST HTTP request to create Election
    ${res}=  Post Request  election  /    data=${reqBody}     headers=${header}
    Set Global Variable  ${res}

