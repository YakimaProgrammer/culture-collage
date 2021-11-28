#rm src/*/resources/tiny/*.webp
rm src/*/resources/webp/*.webp

for f in src/*/resources/originals/*.{jpg,png}
do
  filename="$(basename $f)"
  directory="$(dirname $f)"
  
  #WebP version
  webp="$(realpath $directory/../webp)/${filename%.*}.webp"
  
  #Tiny version
  #tiny="$(realpath $directory/../tiny)/${filename%.*}.webp"
  
  convert "$f" -auto-orient -quality 30 -resize 50% "$webp"
  #convert "$f" -auto-orient -quality 5 -resize x100 "$tiny"
done
