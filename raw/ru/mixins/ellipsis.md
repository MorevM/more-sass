# ellipsis

> Обрезает текст, выходящий за пределы текущего элемента, и добавляет в конце многоточие.

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
      $max-inline-size
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      100%
    </td>
    
    <td>
      Ограничение inline-размера элемента.
    </td>
  </tr>
</tbody>
</table>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  @include more.ellipsis;
}
```

```css [Результат]
.element {
  max-inline-size: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
```

</code-group>
