# font

> Shorthand for writing font- rules in syntax like vanilla CSS font property, but without specifying the required font-family property.

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
      $params <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string|list|number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Список значений для одного или нескольких свойств из следующих: <code>
        font-style
      </code>
      
      , <code>
        font-weight
      </code>
      
      , <code>
        font-size
      </code>
      
      , <code>
        line-height
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      $font-family
    </td>
    
    <td>
      <code>
        ?string
      </code>
    </td>
    
    <td>
      null
    </td>
    
    <td>
      Значение свойства <code>
        font-family
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
  @include more.font('italic 700 16px/1.5');
}

.element-two {
  @include more.font(32px);
}

.element-three {
  @include more.font('/1.2');
}

.element-four {
  @include more.font(16px, 'Agora Slab Pro');
}
```

```css [Результат]
.element-one {
  font-style: italic;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
}

.element-two {
  font-size: 32px;
}

.element-three {
  line-height: 1.2;
}

.element-four {
  font-size: 16px;
  font-family: 'Agora Slab Pro';
}
```

</code-group>
