@echo off
cls
echo ========================================
echo   Blog Server Startup Script
echo ========================================
echo.

rem 检查并杀死占用端口的进程
echo Checking for existing Node.js processes...
taskkill /F /IM node.exe >nul 2>&1
if %errorlevel% equ 0 (
    echo ✓ Killed existing Node.js processes
) else (
    echo ✓ No existing Node.js processes found
)
echo.

rem 启动服务器
echo Starting blog server...
echo.
echo Access URL: http://localhost:4000/blog/
echo Press Ctrl+C to stop
echo.

npm run server
