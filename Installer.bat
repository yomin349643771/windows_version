@echo off
cd installsoft
call nodejs_install.bat

call powershell start-process windows-build-tools_install.bat -verb runas -Wait

call node_module_install.bat

cd installsoft

call nginx_start.bat

cd ..

call nginx_write.bat

call nginx_restart.bat
