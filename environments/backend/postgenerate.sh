#/bin/bash

echo "Updating generated files..."

runtime=$PWD/src/api-v1/runtime.ts

if [ -f $runtime ]; then
  rm $PWD/src/api-v1/runtime.ts
  file=$PWD/src/api-v1/index.ts
  grep -v "runtime" $file > temp
  mv temp $file
fi

apis=$PWD/src/api-v1/apis

if [ -d $apis ]; then
  rm -rf $apis
  file=$PWD/src/api-v1/index.ts
  grep -v "apis" $file > temp
  mv temp $file
fi

models=$PWD/src/api-v1/models

for model in $models/*; do
  line=$(grep "runtime" $model)
  if [[ ! -z $line ]]; then
    grep -v "$line" $model > temp
    mv temp $model
  fi
done

tsfiles=$(find $PWD/src/api-v1 -name '*.ts' -type f)

for tsfile in $tsfiles; do
  perl -pi -e 'print "/* eslint-disable */\n" if $. == 1' $tsfile
  perl -pi -e 'print "// \@ts-nocheck\n" if $. == 1' $tsfile
done

echo "Done!"

exit 0
