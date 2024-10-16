# Домашнее задание к лекции «Классы, наследование»

## Destructuring

[![Build status](https://ci.appveyor.com/api/projects/status/b46yvhe1aolm9l72?svg=true)](https://ci.appveyor.com/project/NadinDesyatova/object-reflection-proxy-destructuring)

### Описание

Реализована функция `showAttacksOptions`, которая отображает доступные варианты спец.атак для персонажа. 
С помощью аргумента-деструктора функция извлекает массив с нужными полями (`id`, `name`, `description`, `icon`) из объекта, а если значения для поля `description` нет - устанавливает default'ное значение в 'Описание недоступно'.
Функция возвращает извлечённый массив из объектов с четыремя полями.

---