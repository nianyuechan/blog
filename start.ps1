# Blog Server Startup Script
Clear-Host
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Blog Server Startup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if Node.js is installed
Write-Host "[1/3] Checking Node.js..." -ForegroundColor Yellow
Write-Host ""
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js is installed: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    Write-Host ""
    Write-Host "Press any key to exit..."
    $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown') | Out-Null
    exit 1
}

# Check if dependencies are installed
Write-Host ""
Write-Host "[2/3] Checking dependencies..." -ForegroundColor Yellow
Write-Host ""
if (Test-Path "node_modules") {
    Write-Host "✓ Dependencies are installed" -ForegroundColor Green
} else {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "✗ Failed to install dependencies" -ForegroundColor Red
        Write-Host ""
        Write-Host "Press any key to exit..."
        $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown') | Out-Null
        exit 1
    }
    Write-Host "✓ Dependencies installed successfully" -ForegroundColor Green
}

# Start the server
Write-Host ""
Write-Host "[3/3] Starting server..." -ForegroundColor Yellow
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Server is starting..." -ForegroundColor Green
Write-Host "  Access URL: http://localhost:4000/blog/" -ForegroundColor Cyan
Write-Host "  Press Ctrl+C to stop the server" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start the server
npm run server

# If server exits with error, show error message and pause
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "✗ Server failed to start" -ForegroundColor Red
    Write-Host "Please check the error message above." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Press any key to exit..."
    $Host.UI.RawUI.ReadKey('NoEcho,IncludeKeyDown') | Out-Null
    exit 1
}
