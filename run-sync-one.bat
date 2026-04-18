@echo off
cd /d "%~dp0"
echo.
echo ===============================================
echo  Tijori Smart Sync - Single Company
echo ===============================================
echo.
set /p company="Enter company name, ticker, or ISIN: "
if "%company%"=="" (
    echo.
    echo No input given. Exiting.
    pause
    exit /b
)
echo.
echo Syncing "%company%"... this usually takes 1-3 minutes.
echo.
call npm run sync -- --company "%company%"
echo.
echo === Done ===
pause
