*** Keywords ***
a user request the election list
    Create Session  elections  ${API}/elections
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    Set Global Variable  ${headers}

user get election list
    ${response}=  GET Request  elections   /    headers=${headers}
    Set Global Variable  ${response}  

