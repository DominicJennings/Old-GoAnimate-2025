:: Important stuff
@echo off && cls
title Old GoAnimate 2025
if not exist "installed" (if not exist "notinstalled" (echo Old GoAnimate 2025 Configuration File >> notinstalled))
::::::::::::::::::::
:: Initialization ::
::::::::::::::::::::

:: Terminate existing node.js apps
TASKKILL /IM node.exe /F 2>nul
cls

:::::::::::::::::::::::::::::
:: Start Old GoAnimate 2025 ::
:::::::::::::::::::::::::::::

:: Check for installation
if exist notinstalled (
	echo Old GoAnimate 2025 is not installed! Installing...
	call npm install
	ren "notinstalled" "installed"
	cls
	goto start
) else (
	goto start
)

:: Run npm start
:start
echo Old GoAnimate 2025 is now starting...
echo Please navigate to http://localhost on your browser.
npm start
