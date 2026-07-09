# parent-state

> Позволяет задавать правила псевдо-элемента, зависящие от состояния его родителя, прямо в наборе правил самого псевдо-элемента.

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
      $states <span className="text-red-600">
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
      Состояние(я) родительского элемента текущего псевдо-элемента (псевдоклассы, модификаторы и т.п.).
    </td>
  </tr>
</tbody>
</table>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element {
  &::after {
    @include more.parent-state(':hover', '.is-active') {
      color: #f00;
    }
  }
}
```

```css [Результат]
.element:hover::after,
.element.is-active::after {
  color: #f00;
}
```

</code-group>
