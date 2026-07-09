# bem-modifiers

> Позволяет использовать несколько модификаторов в одном селекторе при использовании методологии БЭМ.

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
      $modifiers <span className="text-red-600">
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
      Список дополнительных модификаторов.
    </td>
  </tr>
</tbody>
</table>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.block {
  &__element {
    @include more.bem-modifiers('--modifier-one', '--modifier-two', '--modifier-three') {
      color: #f00;
    }
  }
}
```

```css [Результат]
.block__element--modifier-one.block__element--modifier-two.block__element--modifier-three {
  color: #f00;
}
```

</code-group>
