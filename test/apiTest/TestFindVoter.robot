*** Keywords ***
a authority with name or identity voter info
    Create Session  candidate  ${API}/candidate
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${data}=  Create Dictionary  fullname=name surname  id=025930461038-1
    Set Global Variable  ${headers}
    Set Global Variable  ${data}

user find with candidate info
    ${response}=  POST Request  candidate   /    data=${data}     headers=${headers}
    Set Global Variable  ${response}

voter recived voter info
    Should Be String ${voter}=  To Json  ${response.content}
    Should Be String ${voter['id']}
    Should Be String ${voter['fname']}
    Should Be String ${voter['lname']}
    Should Be String ${voter['role']}
    Should Be String ${voter['status']}