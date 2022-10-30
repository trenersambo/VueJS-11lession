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

_________________


 # Реальная история синхронизации репо на ПК и репо на github
 
Шаг 0 (удаленно)

На github уже создан РЕПО (в нем есть тестовый файл)

Шаг 1 (локально)

**git init**

Initialized empty Git repository in D:/Front_Work/31_Vue_11/.git/

Шаг 2. (локально)

Создан тестовый md

Шаг 3  (локально)

**git add .**

**git status**

**git commit -m "создан файл помощи по git"**

Шаг 4  (локально)

Нужно локальный РЕПО на ПК подключить к РЕПО на github
Даю краткое имя для РЕПО на github  = origin

**git remote add origin https://github.com/trenersambo/VueJS-11lession.git**


Шаг 4.1.  (локально)

Проверка подключенности к сайту github

**$ git remote –v**

origin  https://github.com/trenersambo/VueJS-11lession.git (fetch)
origin  https://github.com/trenersambo/VueJS-11lession.git (push)

 

Шаг 5 (локально)

В удаленный РЕПО (origin) послать ветку master (в ней файл .md)  

**git push -u origin master**


