@echo off
setlocal enabledelayedexpansion

:: Set quality level
set quality=60

:: Folder with images (change if needed)
set inputFolder=%cd%

echo Converting all JPG images to WebP with quality %quality%...

for %%f in ("%inputFolder%\*.jpg") do (
    echo Processing: %%~nxf
    "C:\webp-tools\bin\cwebp.exe" -q %quality% "%%f" -o "%%~dpnf.webp"
)

echo Done!
pause
