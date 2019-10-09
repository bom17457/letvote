*** Keywords ***
a user request signout
    Create Session  signout  ${API}/signout
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    Set Global Variable  ${headers}
    
user get signout
    ${response}=  GET Request  signout   /    headers=${headers}
    Set Global Variable  ${response}   