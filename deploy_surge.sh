#!/usr/bin/env expect -f
set timeout 60
spawn surge . 
expect "email:"
send "2697859618@qq.com\r"
expect "password:"
send "zsy325618\r"
expect {
    "Project:" { send ".\r" }
    "could you also" { send "y\r" }
}
expect {
    "Domain:" { send "\r" }
    "could you also" { send "y\r" }
}
expect {
    "could you also" { send "y\r" }
    eof
}
expect eof
