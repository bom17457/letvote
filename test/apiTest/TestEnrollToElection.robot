*** Keywords ***
a authority with candidate info
    ${headers}=  Create Dictionary  Content-Type=application/json    Authorization=${result['token']}
    ${data}=  Create Dictionary  fullname=name surname  id=025930461038-1
    Set Global Variable  ${headers}
    Set Global Variable  ${data}
authority enroll candidate to election with candidate info
    ${response}=  POST Request  candidate   /    data=${data}     headers=${headers}

authority recived candidate info with role candidate and not voter
    ${candidateResult}=  To Json  ${response.content}    