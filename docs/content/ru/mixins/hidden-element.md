---
title: hidden-element
description: More Sass - библиотека полезных миксинов и функций для SCSS.
position: 260
category: Миксины
fullscreen: true
---

Парный набор миксинов, позволяющих управлять свойствами, влияющими на видимость элемента.

## hidden-element

Визуально скрывает элемент, но оставляет его в основном потоке документа.

### Параметры

| Имя      | Тип       | Значение по умолчанию | Описание                     |
|----------|-----------|-----------------------|------------------------------|
| $z-index | `?number` | null                  | Значение свойства `z-index`. |

### Пример использования

<code-group>
  
  <code-block label="SCSS" active>
  
  ```scss
  @use 'more-sass' as more;
  
  .element-one {
  	@include more.hidden-element;
  }
  
  .element-two {
  	@include more.hidden-element(10);
  }
  ```
  
  </code-block>
  
  <code-block label="Результат">
  
  ```css
  .element-one {
  	visibility: hidden;
  	opacity: 0;
  }
  
  .element-two {
  	z-index: 10;
  	visibility: hidden;
  	opacity: 0;
  }
  ```
  
  </code-block>
  
</code-group>

## hidden-element-active

Показывает скрытый элемент - отменяет эффект применения миксина `hidden-element`.

### Параметры

| Имя      | Тип       | Значение по умолчанию | Описание                     |
|----------|-----------|-----------------------|------------------------------|
| $z-index | `?number` | null                  | Значение свойства `z-index`. |

### Пример использования

<code-group>
  
  <code-block label="SCSS" active>

  ```scss
  @use 'more-sass' as more;
  
  .element {
  	@include more.hidden-element-active;
  }
  ```

  </code-block>

  <code-block label="Результат">

  ```css
  .element {
  	visibility: visible;
  	opacity: 1;
  }
  ```

  </code-block>
  
</code-group>
