# pseudo

> Сокращённый вариант одновременной записи свойств content и display для псевдо-элементов.

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
      $display
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        block
      </code>
    </td>
    
    <td>
      Значение свойства <code>
        display
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      $content
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        ''
      </code>
    </td>
    
    <td>
      Значение свойства <code>
        content
      </code>
      
      .
    </td>
  </tr>
</tbody>
</table>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  &::after {
    @include more.pseudo;
  }
}

.element-two {
  &::after {
    @include more.pseudo('inline-block', 'foo');
  }
}
```

```css [Результат]
.element-one::after {
  content: '';
  display: block flow;
}

.element-two::after {
  content: 'foo';
  display: inline flow-root;
}
```

</code-group>
