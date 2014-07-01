#!/bin/bash
# builds a slide-deck from input slidedown
#
# usage:
#
#    ./tools/build.sh < cat slides/*.md > index.html

set -e

compiled=$(node slides/tools/build.js)

cat slides/templates/header.html <(echo "$compiled") slides/templates/footer.html


