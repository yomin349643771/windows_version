cd zip
unzip.exe ..\nginx-1.16.0.zip -d %USERPROFILE%\Downloads\aceweb_basic-master\windows_ace\installsoft
cd ..
ren nginx-1.16.0 nginx
cd nginx
start nginx
nginx -s stop
