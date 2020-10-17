INTERSTITIALFILE="int-$1"
OUTPUTFILE="OCR-$1"
ocrmypdf --output-type pdfa --sidecar --deskew --remove-background --force-ocr  "$1" "$INTERSTITIALFILE"
pdftk "$INTERSTITIALFILE" stamp ../sample.pdf output "$OUTPUTFILE"
rm $INTERSTITIALFILE