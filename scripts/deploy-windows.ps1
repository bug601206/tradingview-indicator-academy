$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$stableRoot = Join-Path ([Environment]::GetFolderPath('MyDocuments')) 'TradingView Indicator Academy'
$extensionRoot = Join-Path $stableRoot 'Extension'
$iconPath = Join-Path $projectRoot 'public\icons\academy.ico'
if (-not (Test-Path -LiteralPath $iconPath)) {
  & (Join-Path $PSScriptRoot 'generate-icons.ps1')
}
Push-Location $projectRoot
try { npm run build } finally { Pop-Location }
New-Item -ItemType Directory -Force -Path $stableRoot | Out-Null
New-Item -ItemType Directory -Force -Path $extensionRoot | Out-Null
Copy-Item -Path (Join-Path $projectRoot 'dist\*') -Destination $extensionRoot -Recurse -Force
Copy-Item -LiteralPath (Join-Path $projectRoot 'public\icons\academy.ico') -Destination (Join-Path $stableRoot 'academy.ico') -Force
$launcher = "@echo off`r`nstart `"`" `"https://www.tradingview.com/chart/`"`r`n"
Set-Content -LiteralPath (Join-Path $stableRoot 'Launch TradingView Indicator Academy.cmd') -Value $launcher -Encoding Ascii
$guide = @"
TradingView Indicator Academy — one-time setup

1. Open Chrome and go to chrome://extensions
2. Enable Developer mode.
3. Choose Load unpacked.
4. Select this folder:
   $extensionRoot
5. Pin "TradingView Indicator Academy" from Chrome's Extensions menu.

Daily use: double-click the desktop shortcut, then click the pinned Academy icon once to open its side panel.
After future updates: the same Extension folder is updated. Open chrome://extensions and click Reload on the Academy card once.
"@
Set-Content -LiteralPath (Join-Path $stableRoot 'FIRST-TIME SETUP.txt') -Value $guide -Encoding UTF8
$desktop = [Environment]::GetFolderPath('Desktop')
$shell = New-Object -ComObject WScript.Shell
$shortcut = $shell.CreateShortcut((Join-Path $desktop 'TradingView Indicator Academy.lnk'))
$shortcut.TargetPath = $env:ComSpec
$shortcut.Arguments = '/c ""' + (Join-Path $stableRoot 'Launch TradingView Indicator Academy.cmd') + '""'
$shortcut.WindowStyle = 7
$shortcut.WorkingDirectory = $stableRoot
$shortcut.IconLocation = (Join-Path $stableRoot 'academy.ico') + ',0'
$shortcut.Description = 'Open TradingView for TradingView Indicator Academy'
$shortcut.Save()
$setupShortcut = $shell.CreateShortcut((Join-Path $desktop 'TradingView Indicator Academy - First Setup.lnk'))
$setupShortcut.TargetPath = 'explorer.exe'
$setupShortcut.Arguments = '"' + $extensionRoot + '"'
$setupShortcut.WorkingDirectory = $stableRoot
$setupShortcut.IconLocation = (Join-Path $stableRoot 'academy.ico') + ',0'
$setupShortcut.Description = 'Open the stable extension folder for one-time Chrome installation'
$setupShortcut.Save()
Write-Output "Stable application: $stableRoot"
Write-Output "Extension folder: $extensionRoot"
Write-Output "Desktop launcher: $(Join-Path $desktop 'TradingView Indicator Academy.lnk')"
