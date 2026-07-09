# padding

> Сокращённый вариант записи свойства padding с возможностью пропускать значения.

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
        padding
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
  @include more.padding(10px);
}

.element-two {
  @include more.padding(10px 20px 30px 40px); // or: @include more.padding(10px, 20px, 30px, 40px);
}

.element-three {
  @include more.padding(null auto);
}
```

```css [Результат]
.element-one {
  padding-block-start: 10px;
  padding-block-end: 10px;
  padding-inline-start: 10px;
  padding-inline-end: 10px;
}

.element-two {
  padding-block-start: 10px;
  padding-block-end: 30px;
  padding-inline-start: 40px;
  padding-inline-end: 20px;
}

.element-three {
  padding-inline-start: auto;
  padding-inline-end: auto;
}
```

</code-group>
