param([string]$OutputDirectory = (Join-Path $PSScriptRoot '..\public\icons'))
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
New-Item -ItemType Directory -Force -Path $OutputDirectory | Out-Null
function New-AcademyBitmap([int]$size) {
  $bitmap = [System.Drawing.Bitmap]::new($size, $size)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $graphics.Clear([System.Drawing.Color]::FromArgb(13, 17, 23))
  $cyan = [System.Drawing.Color]::FromArgb(85, 200, 242)
  $paper = [System.Drawing.Color]::FromArgb(220, 232, 238)
  $pen = [System.Drawing.Pen]::new($cyan, [Math]::Max(2, $size / 14))
  $pen.StartCap = $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $bookPen = [System.Drawing.Pen]::new($paper, [Math]::Max(1, $size / 22))
  $margin = [int]($size * .18); $mid = [int]($size * .52); $bottom = [int]($size * .79)
  $graphics.DrawLine($bookPen, $margin, [int]($size*.24), $mid, [int]($size*.34))
  $graphics.DrawLine($bookPen, $mid, [int]($size*.34), $size-$margin, [int]($size*.24))
  $graphics.DrawLine($bookPen, $margin, [int]($size*.24), $margin, $bottom)
  $graphics.DrawLine($bookPen, $size-$margin, [int]($size*.24), $size-$margin, $bottom)
  $graphics.DrawLine($bookPen, $margin, $bottom, $mid, [int]($size*.88))
  $graphics.DrawLine($bookPen, $mid, [int]($size*.88), $size-$margin, $bottom)
  $points = [System.Drawing.Point[]]@([System.Drawing.Point]::new([int]($size*.25),[int]($size*.64)),[System.Drawing.Point]::new([int]($size*.39),[int]($size*.52)),[System.Drawing.Point]::new([int]($size*.51),[int]($size*.61)),[System.Drawing.Point]::new([int]($size*.70),[int]($size*.39)))
  $graphics.DrawLines($pen, $points)
  $graphics.Dispose(); $pen.Dispose(); $bookPen.Dispose(); return $bitmap
}
foreach ($size in 16,32,48,128,256) { $bmp=New-AcademyBitmap $size; $bmp.Save((Join-Path $OutputDirectory "icon$size.png"),[System.Drawing.Imaging.ImageFormat]::Png); if($size -eq 256){$handle=$bmp.GetHicon();$icon=[System.Drawing.Icon]::FromHandle($handle);$stream=[System.IO.File]::Create((Join-Path $OutputDirectory 'academy.ico'));$icon.Save($stream);$stream.Dispose();$icon.Dispose()} $bmp.Dispose() }
