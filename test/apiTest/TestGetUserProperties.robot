*** Keywords ***
a user request they infomation
    Create Session  userproperties  ${API}/userproperties
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    Set Global Variable  ${headers}
a anonymous request they infomation
    Create Session  userproperties  ${API}/userproperties
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=
    Set Global Variable  ${headers}
user get infomation
    ${response}=  GET Request  userproperties   /    headers=${headers}
    Set Global Variable  ${response}   

user should have "id" "fname" "lname" "username" "role" "status"
    Should Be String  ${result['id']}
    Should Be String  ${result['fname']}
    Should Be String  ${result['lname']}
    Should Be String  ${result['username']}
    Should Be String  ${result['role']}
    Should Be String  ${result['status']}