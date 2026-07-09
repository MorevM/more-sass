# list

> Категория функций для работы со списками значений.

## list-contains

Проверяет, содержит ли хотя бы одно значение в переданном списке искомую подстроку.

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
      $list <span className="text-red-600">
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
      Список значений.
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
      Искомая подстрока.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`bool` - `true`, если одно из значений в переданном списке содержит искомую подстроку, `false` в ином случае.

**Пример использования:**

```scss
@use 'more-sass' as more;

$list: ('foo', 'bar', 'baz');

@debug more.list-contains($list, 'ba');  // bool: true
@debug more.list-contains($list, 'abc'); // bool: false
```

## list-includes

Проверяет, присутствует ли искомое значение в переданном списке.

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
      $list <span className="text-red-600">
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
      Список значений.
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
        *
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Искомое значение.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`bool` - `true`, если искомое значение присутствует в переданном списке, `false` в ином случае.

**Пример использования:**

```scss
@use 'more-sass' as more;

$list: (1, 2, 3);

@debug more.list-includes($list, 2); // bool: true
@debug more.list-includes($list, 4); // bool: false
```

## list-join

Объединяет элементы переданного списка значений в строку.

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
      $list <span className="text-red-600">
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
      Список значений.
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
        ''
      </code>
    </td>
    
    <td>
      Разделитель элементов в полученной строке.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`string` - Строка, содержащая строковое представление всех элементов массива в том же порядке, с разделителем между каждым элементом.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.list-join((1, 2, 3, 4, 5));    // string: '12345'
@debug more.list-join((1, 2, 3, 4), ', '); // string: '1, 2, 3, 4'
```

## list-remove

Удаляет элемент из списка по переданному индексу.

**Параметры:**

<table>
<thead>
  <tr>
    <th>
      Name
    </th>
    
    <th>
      Type
    </th>
    
    <th>
      Default
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      $list <span className="text-red-600">
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
      Список значений.
    </td>
  </tr>
  
  <tr>
    <td>
      $index <span className="text-red-600">
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
      Индекс элемента для удаления. <br />
      
      Используйте негативное значение для удаления с конца списка.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`list` - Список без элемента с указанным индексом, если он найден, иначе - клон оригинального списка.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.list-remove((1, 2, 3), 1);   // list: (2, 3)
@debug more.list-remove((1, 2, 3), -1);  // list: (1, 2)
@debug more.list-remove((1, 2, 3), 100); // list: (1, 2, 3)
```

## list-slice

Выбирает срез переданного списка значений.

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
      $list <span className="text-red-600">
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
      Список значений.
    </td>
  </tr>
  
  <tr>
    <td>
      $start-at <span className="text-red-600">
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
      Позиция начала среза (включительно).
    </td>
  </tr>
  
  <tr>
    <td>
      $end-at
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        -1
      </code>
    </td>
    
    <td>
      Позиция окончания среза (включительно).
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`list` - Срез переданного списка значений.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.list-slice((1, 2, 3, 4, 5), 3); // list: (3, 4, 5)
@debug more.list-slice((1, 2, 3, 4, 5), 2, 4); // list: (2, 3, 4)
```
