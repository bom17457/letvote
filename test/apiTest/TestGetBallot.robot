*** Keywords ***
a voter want ballot list
    Create Session  ballot  ${API}/ballot
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    Set Global Variable  ${headers}

voter request ballot list
    ${response}=  GET Request  ballot   /     headers=${headers}
    Set Global Variable  ${response}

recive ballot
    ${ballot}=  To Json  ${response.content}
    Should Be String  ${ballot[0]['topic']}  topic  