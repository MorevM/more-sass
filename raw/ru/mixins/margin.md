# margin

> Сокращённый вариант записи свойства margin с возможностью пропускать значения.

<note>

Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.

</note>

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
      $values <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        list
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Значения свойства <code>
        margin
      </code>
      
       в стандартном порядке (top-right-bottom-left).
    </td>
  </tr>
</tbody>
</table>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.margin(10px);
}

.element-two {
  @include more.margin(10px 20px 30px 40px); // or: @include more.margin(10px, 20px, 30px, 40px);
}

.element-three {
  @include more.margin(null auto);
}
```

```css [Результат]
.element-one {
  margin-block-start: 10px;
  margin-block-end: 10px;
  margin-inline-start: 10px;
  margin-inline-end: 10px;
}

.element-two {
  margin-block-start: 10px;
  margin-block-end: 30px;
  margin-inline-start: 40px;
  margin-inline-end: 20px;
}

.element-three {
  margin-inline-start: auto;
  margin-inline-end: auto;
}
```

</code-group>
