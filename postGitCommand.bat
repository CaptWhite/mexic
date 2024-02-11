@echo on & setlocal

git add . > postSalida.txt
git commit -m %1 > postSalida.txt
git push > postSalida.txt