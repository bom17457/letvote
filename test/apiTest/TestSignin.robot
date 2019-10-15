*** Keywords ***
a user with authority account
    Create Session  signin  ${API}/signin
    ${headers}=  Create Dictionary  Content-Type=application/json
    ${data}=  Create Dictionary  username=${authority username}  password=abcd1234
    Set Global Variable  ${headers}
    Set Global Variable  ${data}

a user with voter account
    Create Session  signin  ${API}/signin
    ${headers}=  Create Dictionary  Content-Type=application/json
    ${data}=  Create Dictionary  username=${voter username}   password=abcd1234
    Set Global Variable  ${headers}
    Set Global Variable  ${data}

a user with candidate account
    Create Session  signin  ${API}/signin
    ${headers}=  Create Dictionary  Content-Type=application/json
    ${data}=  Create Dictionary  username=${candidate username}  password=abcd1234
    Set Global Variable  ${headers}
    Set Global Variable  ${data}

a user with any account
    Create Session  signin  ${API}/signin
    ${headers}=  Create Dictionary  Content-Type=application/json
    ${data}=  Create Dictionary  username=${any username}  password=abcd1234
    Set Global Variable  ${headers}
    Set Global Variable  ${data}
#--------------------------------------------------------------------------------#
user has signin
    ${response}=  POST Request  signin   /    data=${data}     headers=${headers}
    Set Global Variable  ${response}    

user get result
    ${result}=  To Json  ${response.content}    
    Set Global Variable  ${result}    
#--------------------------------------------------------------------------------#
user recived status code 200
    Should Be Equal As Strings  ${response.status_code}  200

user recived status code 401
    Should Be Equal As Strings  ${response.status_code}  401

recived access token
    Should Be String  ${result['token']}

#--------------------------------------------------------------------------------#
role is authority
    Create Session  userproperties  ${API}/userproperties
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${response}=  GET Request  userproperties   /    headers=${headers}
    ${result}=  To Json  ${response.content}
    Should Be Equal As Strings  ${result['role']}  authority

role is voter
    Create Session  userproperties  ${API}/userproperties
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${response}=  GET Request  userproperties   /    headers=${headers}
    ${result}=  To Json  ${response.content}
    Should Be Equal As Strings  ${result['role']}  voter

role is candidate
    Create Session  userproperties  ${API}/userproperties
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${response}=  GET Request  userproperties   /    headers=${headers}
    ${result}=  To Json  ${response.content}
    Should Be Equal As Strings  ${result['role']}  candidate
#--------------------------------------------------------------------------------#
