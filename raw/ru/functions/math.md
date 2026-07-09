# math

> Категория функций для работы с числовыми значениями.

## get-numeric

Преобразует строковое представление числа в настоящее число.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string | number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Исходное значение <br />
      
      (число или строковое представление числа).
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`?number` - Числовое значение или `null`, если переданное значение не является [корректным числом](https://developer.mozilla.org/en-US/docs/Web/CSS/number#valid_numbers).

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.get-numeric('12px'); // number: 12px
@debug more.get-numeric('foo'); // null
```

## get-unit

Получает единицу измерения переданного числа.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string|number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Число или строковое представление числа, <br />
      
      единицу измерения которого нужно получить.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`?number` - Число, представляющее собой базовое значение полученной единицы измерения (1px, 1em, и т.д.)
или `null`, если переданное значение не является корректным числом.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.get-unit(12px); // number: 1px
```

## strip-unit

Убирает единицу измерения у переданного числа.

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
      $value <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string|number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Число или строковое представление числа, <br />
      
      у которого необходимо убрать единицу измерения.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`?number` - Число без единицы измерения или `null`, если переданное значение не является корректным числом.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.strip-unit(12px); // number: 12
```

## with-unit

Устанавливает единицу измерения для переданного числа, не имеющего её.

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
      $value<span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        string|number
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Исходное значение (число или строковое представление числа).
    </td>
  </tr>
  
  <tr>
    <td>
      $unit
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        px
      </code>
    </td>
    
    <td>
      Единица измерения (одна из единиц измерений в CSS).
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`number` - Переданное число, преобразованное к заданной единице измерения.

**Пример использования:**

```scss
@use 'more-sass' as more;
@debug more.with-unit(12); // number: 12px
@debug more.with-unit(12, 'em'); // number: 12em
```
