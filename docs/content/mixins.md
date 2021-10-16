# Миксины

## aspect-ratio

#### Аргументы

| Название       | Тип               | По умолчанию           | Описание        
| :------------- | :---------------- | :--------------------- | :--------------- 
| $width *       | number (unitless) | -                      | Ширина элемента 
| $height        | number (unitless) | $width                 | Высота элемента 

#### Описание
Задаёт элементу фиксированное соотношение сторон с помощью [хака с padding-top](https://css-tricks.com/aspect-ratio-boxes/). \
Создаёт у блока псевдоэлемент `::before`.

#### Применение

::: demo

qwe

:::


#### Пример использования

<base-example>

  <template v-slot:scss>

  ```scss
  .box-16-9 {
    @include aspect-ratio(16, 9);
    background: red;
  }
  
  .box-square {
    @include aspect-ratio(1);
    background: blue;
  }
  ```

  </template>

  <template v-slot:css>

  ```scss
  .box-16-9 {
    background: red;
    
    &::before {
      content: '';
      display: block;
      padding-top: 56.25%;
    }
  }
  
  .box-square {
    background: blue;
    
    &::before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }
  ```

  </template>

</base-example>

```scss
.block {
  @include aspect-ratio(16, 9);
}
```
