git add . &&
git commit -m "v $1" &&
git tag -a $1 -m "release $1" &&
git push &&
git push --tags