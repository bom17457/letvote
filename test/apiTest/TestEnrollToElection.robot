*** Keywords ***
a authority with candidate info
    Create Session  candidate  ${API}/candidate
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${data}=  Create Dictionary  electionID=1  voterID=025930461038-6
    Set Global Variable  ${headers}
    Set Global Variable  ${data}
authority enroll candidate to election with candidate info
    ${response}=  POST Request  candidate   /enroll    data=${data}     headers=${headers}

authority recived candidate info with role candidate and not voter
    ${candidateResult}=  To Json  ${response.content}    
    Should Be String  ${candidateResult[0]['role']}  candidate