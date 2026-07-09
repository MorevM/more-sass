# string

> Категория функций для работы со строками.

## str-capitalize

Преобразует первый символ переданной строки в верхний регистр.

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
      $string <span className="text-red-600">
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
      Изначальная строка.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`string` - Переданная строка, первый символ которой преобразован в верхний регистр.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.str-capitalize('foo bar'); // string: 'Foo bar'
```

## str-replace

Заменяет все вхождения строки поиска на строку замены.

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
      $string <span className="text-red-600">
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
      Строка, в которой осуществляется поиск и замена.
    </td>
  </tr>
  
  <tr>
    <td>
      $search <span className="text-red-600">
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
      Строка поиска.
    </td>
  </tr>
  
  <tr>
    <td>
      $replace <span className="text-red-600">
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
      Строка замены.
    </td>
  </tr>
  
  <tr>
    <td>
      $limit
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      <code>
        null
      </code>
    </td>
    
    <td>
      Переданное значение ограничивает количество производимых замен.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`string` - Изменённая строка.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.str-replace('foo bar baz', 'ba', 'x'); // string: 'foo xr xz'
```

## str-split

Разделяет переданную строку на список строк.

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
      $string <span className="text-red-600">
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
      Изначальная строка.
    </td>
  </tr>
  
  <tr>
    <td>
      $delimiter
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
      Строка-разделитель.
    </td>
  </tr>
  
  <tr>
    <td>
      $separator
    </td>
    
    <td>
      <code>
        string
      </code>
    </td>
    
    <td>
      <code>
        auto
      </code>
    </td>
    
    <td>
      Разделитель, который будет использован в полученном списке <br />
      
      <code>
        space
      </code>
      
       | <code>
        comma
      </code>
      
       | <code>
        slash
      </code>
      
       | <code>
        auto
      </code>
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`list` - Список строк, созданный путём разделения переданной строки на подстроки по заданному разделителю.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.str-split('foo|bar|baz', '|', 'comma'); // list: ('foo', 'bar', 'baz')
```

## str-trim

Удаляет пробелы в начале и конце переданной строки.

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
      $string <span className="text-red-600">
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
      Изначальная строка.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`string` - Строка, в начале и конце которой отсутствуют пробелы.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.str-trim(' foo bar   '); // string: 'foo bar'
```
