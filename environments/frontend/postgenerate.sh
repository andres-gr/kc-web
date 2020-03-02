#/bin/bash

echo "Fixing generated files..."

dir=$PWD/src/api-v1

for file in $dir/*.ts; do
  perl -pi -e 'print "/* eslint-disable */\n" if $. == 1' $file
  perl -pi -e 'print "// \@ts-nocheck\n" if $. == 1' $file
done

echo "Done!"

exit 0
