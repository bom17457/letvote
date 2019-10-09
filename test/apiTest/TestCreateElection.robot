*** Keywords ***
a user create election infomation
    Create Session  election  ${API}/election
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${data}=  Create Dictionary  topic=Student Election 2020  description=Electing  electionFrom=2019-10-22 11:01:50  electionTo=2019-10-22 11:01:50  registerFrom=2019-10-22 11:01:50  registerTo=2019-10-22 11:01:50  displayText=Who is your partant
    Set Global Variable  ${headers}
    Set Global Variable  ${data}

user post election infomation
    ${response}=  POST Request  election   /    data=${data}     headers=${headers}
    Set Global Variable  ${response}  

user recived status code 201
    Should Be Equal As Strings  ${response.status_code}  201