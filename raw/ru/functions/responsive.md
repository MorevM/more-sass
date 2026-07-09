# responsive

> Категория функций для адаптивных CSS-значений.

## use-fluid-value

Возвращает значение, равномерно масштабируемое в указанных пределах ширины экрана.

**Параметры:**

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
      $start <span className="text-red-600">
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
      Начальная ширина экрана и значение свойства.
    </td>
  </tr>
  
  <tr>
    <td>
      $end <span className="text-red-600">
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
      Конечная ширина экрана и значение свойства.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`?number` - Гибкое выражение `clamp()`, одно фиксированное значение или `null`, если оба значения не переданы.

**Пример использования:**

```scss
@use 'more-sass' as more;

@function fluid-value($start, $end) {
  @return more.use-fluid-value((320px, $start), (1280px, $end));
}

.element {
  margin-block-start: fluid-value(16px, 32px);
}
```
