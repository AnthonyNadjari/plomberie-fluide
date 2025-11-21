@echo off
chcp 65001 >nul
title PlombiPro - Démarrage du projet

echo ========================================
echo   PlombiPro - Démarrage du projet
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [1/3] Installation des dépendances...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERREUR: L'installation des dépendances a échoué.
        echo Veuillez vérifier que Node.js et npm sont installés.
        pause
        exit /b 1
    )
    echo.
    echo ✓ Dépendances installées avec succès!
    echo.
) else (
    echo [1/3] Dépendances déjà installées.
    echo.
)

REM Start the development server
echo [2/3] Démarrage du serveur de développement...
echo.
echo Le serveur va démarrer sur http://localhost:8080
echo Le serveur backend va démarrer sur http://localhost:3001
echo.
echo Fermez cette fenêtre pour arrêter tous les serveurs.
echo.

REM Start backend server in a new window
echo Démarrage du serveur backend...
start "PlombiPro - Backend Server" cmd /k "npm run server"

REM Wait a moment for backend to start
timeout /t 2 /nobreak >nul

REM Wait a bit then open browser
start "" cmd /c "timeout /t 5 /nobreak >nul && start http://localhost:8080"

REM Run the frontend dev server (this will block until window is closed)
echo Démarrage du serveur frontend...
echo.
call npm run dev

pause

