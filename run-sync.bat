@echo off
cd /d "%~dp0"
echo Starting Tijori Sync...
npm run sync >> sync.log 2>&1
echo Sync Completed.
