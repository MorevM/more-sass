# box

> Устанавливает размеры элемента.

Сокращённый вариант одновременной записи свойств `inline-size` и `block-size`.

<note>

Inline- или block-размер может быть пропущен используя `null` (предпочтительно) или его псевдоним `n`.

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
      $inline-size <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Inline-размер элемента.
    </td>
  </tr>
  
  <tr>
    <td>
      $block-size
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      $inline-size
    </td>
    
    <td>
      Block-размер элемента.
    </td>
  </tr>
</tbody>
</table>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.box(100px);
}

.element-two {
  @include more.box(100px, 200px);
}

.element-three {
  @include more.box(100px, null);
}

.element-four {
  @include more.box(null, 200px);
}
```

```css [Результат]
.element-one {
  inline-size: 100px;
  block-size: 100px;
}

.element-two {
  inline-size: 100px;
  block-size: 200px;
}

.element-three {
  inline-size: 100px;
}

.element-four {
  block-size: 200px;
}
```

</code-group>
