# triangle

> Рисует треугольник из текущего элемента.

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
      Строчный размер треугольника.
    </td>
  </tr>
  
  <tr>
    <td>
      $block-size <span className="text-red-600">
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
      Блочный размер треугольника.
    </td>
  </tr>
  
  <tr>
    <td>
      $direction <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Ключевое слово, описывающее направление треугольника.
    </td>
  </tr>
  
  <tr>
    <td>
      $color
    </td>
    
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      <code>
        currentColor
      </code>
    </td>
    
    <td>
      Цвет треугольника.
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
      Фигура
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
      ▲
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom
      </code>
    </td>
    
    <td>
      ▼
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        left
      </code>
    </td>
    
    <td>
      ◀
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        right
      </code>
    </td>
    
    <td>
      ▶
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-left
      </code>
    </td>
    
    <td>
      ◣
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bottom-right
      </code>
    </td>
    
    <td>
      ◢
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-left
      </code>
    </td>
    
    <td>
      ◤
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        top-right
      </code>
    </td>
    
    <td>
      ◥
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
  @include more.triangle(10px, 8px, 'top');
}

.element-two {
  @include more.triangle(14px, 18px, 'bottom-left', #148cd7);
}
```

```css [Результат]
.element-one {
  display: block flow;
  inline-size: 10px;
  block-size: 8px;
  background: currentColor;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
}

.element-two {
  display: block flow;
  inline-size: 14px;
  block-size: 18px;
  background: #148cd7;
  clip-path: polygon(0 0, 0 100%, 100% 100%);
}
```

</code-group>
