*** Settings ***
Suite Setup     Connect To Database     pymysql    ${DBName}    ${DBUser}    ${DBPass}    ${DBHost}    ${DBPort}
Suite Teardown  Disconnect From Database
Library         DatabaseLibrary
Library         OperatingSystem

*** Variables ***
${DBHost}   18.136.212.248
${DBName}   letvote
${DBPass}   abcd1234
${DBPort}   3306
${DBUser}   root
${Version}  20190922
*** Test Cases ***
Create table and sample data
    ${output} =     Execute SQL Script       ./schema/${Version}/${DBName}_droptable.sql
    Should Be Equal As Strings   ${Output}   None
    ${output} =     Execute SQL Script       ./schema/${Version}/${DBName}_createtable.sql
    Should Be Equal As Strings   ${Output}   None
    ${output} =     Execute SQL Script       ./schema/${Version}/${DBName}_insert.sql
    Should Be Equal As Strings   ${Output}   None