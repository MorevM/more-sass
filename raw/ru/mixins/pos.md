# pos

> Сокращённый вариант записи свойств позиционирования.

## Параметры

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
      $position
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        absolute
      </code>
    </td>
    
    <td>
      Тип позиционирования (relative, absolute и т.д.).
    </td>
  </tr>
  
  <tr>
    <td>
      $values
    </td>
    
    <td>
      <code>
        list
      </code>
    </td>
    
    <td>
      <code>
        ()
      </code>
    </td>
    
    <td>
      Значения позиционирования в стандартном порядке (top-right-bottom-left)*.
    </td>
  </tr>
  
  <tr>
    <td>
      $z-index
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        null
      </code>
    </td>
    
    <td>
      Значение <code>
        z-index
      </code>
      
      , если оно необходимо.
    </td>
  </tr>
</tbody>
</table>

<note>

Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.

</note>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.pos('absolute', 10px);
}

.element-two {
  @include more.pos('absolute', 10px 20px 30px 40px, 5);
}

.element-three {
  @include more.pos('absolute', null auto);
}
```

```css [Результат]
.element-one {
  position: absolute;
  inset-block-start: 10px;
  inset-block-end: 10px;
  inset-inline-start: 10px;
  inset-inline-end: 10px;
}

.element-two {
  position: absolute;
  inset-block-start: 10px;
  inset-block-end: 30px;
  inset-inline-start: 40px;
  inset-inline-end: 20px;
  z-index: 5;
}

.element-three {
  position: absolute;
  inset-inline-start: auto;
  inset-inline-end: auto;
}
```

</code-group>

<note>

Также доступны сокращённые варианты записи для конкретных типов позиционирования:

`pos-rel($values, $z-index)``pos-abs($values, $z-index)``pos-fix($values, $z-index)`

</note>
