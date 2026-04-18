@echo off
cd /d "%~dp0"
echo.
echo ===============================================
echo  Tijori Smart Sync - Full + Stale Sweep
echo ===============================================
echo.
echo This runs the full sync AND the stale-data sweep.
echo Use once per quarter or after suspected data drift.
echo Expect extra 3-5 minutes for the sweep before downloads start.
echo.
pause
call npm run sync -- --sweep
echo.
echo === Done ===
pause
