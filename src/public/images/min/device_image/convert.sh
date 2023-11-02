#!/bin/bash

find . -type f -name "*.png" -exec mogrify -format webp {}  \; -print && find . -type f -name "*.jpg" -exec mogrify -format webp {}  \; -print && find . -type f -name "*.jpeg" -exec mogrify -format webp {}  \; -print && find . -type f -name "*.jpeg" -exec mogrify -format webp {}  \;
find . -type f -iname \*.png -delete
find . -type f -iname \*.jpg -delete
find . -type f -iname \*.jpeg -delete
