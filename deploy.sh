#!/bin/bash

rm -rf _site

git clone "https://github.com/simeetnayan81/simeetnayan81.github.io.git" _site
bundle exec jekyll serve
cd _site

# if you don't have a custom domain, remove these 2 CNAME lines completely
#touch CNAME 
# add your custom domain here
#echo "blog.sudokrew.com" >> CNAME  

git add .
git commit -m "Scripted build to github pages"
git push