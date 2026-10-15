param([string]$Version = '')
$ErrorActionPreference = 'Stop'
$projectRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$package = Get-Content (Join-Path $projectRoot 'package.json') -Raw | ConvertFrom-Json
if ([string]::IsNullOrWhiteSpace($Version)) { $Version = $package.version }
if ($Version -ne $package.version) { throw "Requested version $Version does not match package version $($package.version)." }
$releaseRoot = Join-Path $projectRoot '.release'
$stage = Join-Path $releaseRoot "tradingview-indicator-academy-$Version"
$zip = "$stage.zip"
Push-Location $projectRoot
try { npm run check } finally { Pop-Location }
if (Test-Path -LiteralPath $stage) { Remove-Item -LiteralPath $stage -Recurse -Force }
if (Test-Path -LiteralPath $zip) { Remove-Item -LiteralPath $zip -Force }
New-Item -ItemType Directory -Force -Path $stage | Out-Null
Copy-Item -Path (Join-Path $projectRoot 'dist\*') -Destination $stage -Recurse -Force
Copy-Item -LiteralPath (Join-Path $projectRoot 'LICENSE') -Destination $stage -Force
Copy-Item -LiteralPath (Join-Path $projectRoot 'NOTICE.md') -Destination $stage -Force
Copy-Item -LiteralPath (Join-Path $projectRoot 'THIRD_PARTY_NOTICES.md') -Destination $stage -Force
Compress-Archive -LiteralPath $stage -DestinationPath $zip -CompressionLevel Optimal
$hash = (Get-FileHash -LiteralPath $zip -Algorithm SHA256).Hash.ToLowerInvariant()
Set-Content -LiteralPath "$zip.sha256" -Value "$hash  $(Split-Path $zip -Leaf)" -Encoding Ascii
Write-Output "Release ZIP: $zip"
Write-Output "SHA-256: $hash"
