@echo off
title Scrapix AI - React Website
echo ========================================
echo   SCRAPIX AI - React Website
echo ========================================
echo.
IF NOT EXIST "node_modules\" (
    echo Installing packages... please wait 3-5 minutes
    echo.
    npm install
    echo.
)
echo Opening website at http://localhost:3000
echo.
npm start
