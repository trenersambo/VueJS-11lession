## Репозиторий

### Самостоятельная проработака с "нуля" VueJS (not CLI).

_______

## Инструкция по работе с лоакальным + удаленным РЕПО


Установить Git bash 

Внести в нем свои данные «имя-почта» :
git config --global user.name "Your Name"
git config --global user.email "e@w.com"

 ### Локальное РЕПО (работа в терминале)

1. Каталог создан.
2. git init (создание скрытой папки git)
3. git status (пока пусто)
4. Создание файла ins.md и его наполнение
5. git status (скажет, что есть неотслеживаемый файл Untracked files)
6. git add . (или  git add ins.md) 
7. git status ( есть файл для индексации Changes to be committed)
8. git commit -m "_Первый тест_"
9. git log (покажет хэш коммита, где находится HEAD, автор)

10. На GitHub.com создается Репозиторий с именем «testRepo»

11. Из подсказки, появившейся в новом «testRepo» выбираю пункты: 

11А). git remote add origin https://github.com/trenersambo/testRepo.git  (из терминала на ПК подключаю  репо, созданный на github.com)

11-B). git remote (проверка подключения origin’a)

11-C). git push -u origin master (шлю ветку master на github.com)

12). Все следующие изменения после индексации и коммита, шлю просто через git push
13). git pull приём с сервера Github.com изменений 
14). git merge слияние веток после принятия изменений. 

