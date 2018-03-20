#!/bin/bash
# builds a slide-deck from a template file
#
# usage:
#
#    ./slides/tools/build.sh path/to/slides < slides.template

main() {
  local slidePath=$1
  remove_non_files | to_filenames $slidePath | to_html
}

remove_non_files() {
  grep -v -E '^\s*$|^#'
}

to_filenames() {
  while read f; do cat "$1/${f// /-}.md"; done
}

to_html() {
  ./slides/tools/build.sh 
}

main $@
