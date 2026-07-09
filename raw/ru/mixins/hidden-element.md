# hidden-element

> Парный набор миксинов, позволяющих управлять свойствами, влияющими на видимость элемента.

## hidden-element

Визуально скрывает элемент, но оставляет его в основном потоке документа.

### Параметры

<table>
<thead>
  <tr>
    <th>
      Имя
    </th>
    
    <th>
      Тип
    </th>
    
    <th>
      По умолчанию
    </th>
    
    <th>
      Описание
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      $z-index
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      <code>
        null
      </code>
    </td>
    
    <td>
      Значение свойства <code>
        z-index
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

### Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.hidden-element;
}

.element-two {
  @include more.hidden-element(10);
}
```

```css [Результат]
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

</code-group>

## hidden-element-active

Показывает скрытый элемент - отменяет эффект применения миксина `hidden-element`.

### Параметры

<table>
<thead>
  <tr>
    <th>
      Имя
    </th>
    
    <th>
      Тип
    </th>
    
    <th>
      По умолчанию
    </th>
    
    <th>
      Описание
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      $z-index
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      <code>
        null
      </code>
    </td>
    
    <td>
      Значение свойства <code>
        z-index
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

### Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.hidden-element-active;
}
```

```css [Результат]
.element {
  visibility: visible;
  opacity: 1;
}
```

</code-group>
