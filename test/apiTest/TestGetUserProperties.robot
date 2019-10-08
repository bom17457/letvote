*** Keywords ***
I Set GET userproperties API endpoint
    Create Session  userproperties  ${API}/userproperties

I Set HEADER param request type as "application/json" and "authentication bearer {token}"
    ${header}=  Create Dictionary  Content-Type=application/json  Authorization=${body['token']}
    Set Global Variable  ${header}
Send a GET HTTP request to userproperties
    ${res}=  GET Request  userproperties  ?id=025930461038-1    headers=${header}
    ${body}=  To Json  ${res.content}
    Set Global Variable  ${res}
    #Set Global Variable  ${body}