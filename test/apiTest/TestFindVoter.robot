*** Keywords ***
a authority with name or identity voter info    
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${data}=  Create Dictionary  fullname=authority katip  id=025930461038-1
    Set Global Variable  ${headers}
    Set Global Variable  ${data}

user find with candidate info
    ${response}=  POST Request  userproperties   /search   data=${data}     headers=${headers}
    Set Global Variable  ${response}

voter recived voter info
    ${voter}=  To Json  ${response.content}
    Should Be String  ${voter[0]['id']}
    Should Be String  ${voter[0]['fname']}
    Should Be String  ${voter[0]['lname']}
    Should Be String  ${voter[0]['role']}
    Should Be String  ${voter[0]['status']}