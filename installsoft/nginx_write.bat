@echo off
cd nginx/conf
del nginx.conf
copy nul nginx.conf
cd ../..
copy nginx.conf nginx\conf\nginx.conf
