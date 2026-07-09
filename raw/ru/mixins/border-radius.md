# border-radius

> Устанавливает значения необходимых свойств из семейства border-radius.

<note>

Значения могут быть автоматически установлены в ноль используя `null` (предпочтительно) или его псевдоним `n`.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        list|string
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Значение свойства.
    </td>
  </tr>
  
  <tr>
    <td>
      $direction
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
      Ключевое слово, описывающее список необходимых свойств.
    </td>
  </tr>
</tbody>
</table>

<note>

Список ключевых слов:

<table>
<thead>
  <tr>
    <th>
      Ключевое слово
    </th>
    
    <th>
      Устанавливаемые свойства
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        top
      </code>
    </td>
    
    <td>
      <code>
        border-top-left-radius
      </code>
      
      , <code>
        border-top-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        right
      </code>
    </td>
    
    <td>
      <code>
        border-top-right-radius
      </code>
      
      , <code>
        border-bottom-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom
      </code>
    </td>
    
    <td>
      <code>
        border-bottom-right-radius
      </code>
      
      , <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        left
      </code>
    </td>
    
    <td>
      <code>
        border-top-left-radius
      </code>
      
      , <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-right
      </code>
    </td>
    
    <td>
      <code>
        border-top-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-left
      </code>
    </td>
    
    <td>
      <code>
        border-top-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-right
      </code>
    </td>
    
    <td>
      <code>
        border-bottom-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-left
      </code>
    </td>
    
    <td>
      <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross-left
      </code>
    </td>
    
    <td>
      <code>
        border-top-left-radius
      </code>
      
      , <code>
        border-bottom-right-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross-right
      </code>
    </td>
    
    <td>
      <code>
        border-top-right-radius
      </code>
      
      , <code>
        border-bottom-left-radius
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        all
      </code>
    </td>
    
    <td>
      <code>
        border-radius
      </code>
    </td>
  </tr>
</tbody>
</table>
</note>

## Пример использования

<code-group>

```scss [SCSS]
@use 'more-sass' as more;

.element-one {
  @include more.border-radius(1px 2px null 4px);
}

.element-two {
  @include more.border-radius(10px, 'cross-left');
}
```

```css [Результат]
.element-one {
  border-radius: 1px 2px 0 4px;
}

.element-two {
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
```

</code-group>
