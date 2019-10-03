*** Keywords ***
I Set GET version API endpoint
    Create Session  version  ${API}/version

Send GET HTTP request
    ${res}=  Get Request  version  /
    ${body}=  To Json  ${res.content}
    Set Global Variable  ${res}
    Set Global Variable  ${body}
    
I recive valid HTTP response code 200 and key version is not null
    Should Be Equal As Strings  ${res.status_code}  200
    Should Be String  ${body['version']}