# meta

> Категория функций для выполнения общих операций.

## column

Генерирует значение или выражение, которое позволит установить размер, в точности равный заданному количеству колонок макета.

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
      $expression <span className="text-red-600">
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
      Выражение, описывающее необходимый размер в колонках макета: <code>
        необходимо-колонок/всего-колонок
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      $gutter
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      null
    </td>
    
    <td>
      Расстояние между колонками макета.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`string|number` - Выражение `calc` или точное значение.

**Пример использования:**

```scss
@use 'more-sass' as more;
@debug more.column('6/12');       // number: 50%
@debug more.column('6/12', 15px); // string: calc(100% / 2 - (15px * (12 - 6) / 12))
```

## get-char

Получает Unicode-escape значение символа по его человекопонятному имени.

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
      $char <span className="text-red-600">
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
      Человекопонятное имя символа.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`?string` - Unicode-escape значение символа, или `null` если переданное имя символа не зарегистрировано.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.get-char('dollar'); // string: '\0024'
```

<note>

Список доступных символов:

<table>
<thead>
  <tr>
    <th>
      
    </th>
    
    <th>
      
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        dollar
      </code>
    </td>
    
    <td>
      $
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        section
      </code>
    </td>
    
    <td>
      §
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        bullet
      </code>
    </td>
    
    <td>
      •
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        hyphen
      </code>
    </td>
    
    <td>
      ‑
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        en-dash
      </code>
    </td>
    
    <td>
      –
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        em-dash
      </code>
    </td>
    
    <td>
      —
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        copyright
      </code>
    </td>
    
    <td>
      ©
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        registered
      </code>
    </td>
    
    <td>
      ®
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        degree
      </code>
    </td>
    
    <td>
      °
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        ring
      </code>
    </td>
    
    <td>
      ∘
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        infinity
      </code>
    </td>
    
    <td>
      ∞
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-up-black
      </code>
    </td>
    
    <td>
      ▲
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-up-white
      </code>
    </td>
    
    <td>
      △
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-right-black
      </code>
    </td>
    
    <td>
      ▶
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-right-white
      </code>
    </td>
    
    <td>
      ▷
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-down-black
      </code>
    </td>
    
    <td>
      ▼
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-down-white
      </code>
    </td>
    
    <td>
      ▽
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-left-black
      </code>
    </td>
    
    <td>
      ◀
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        triangle-left-white
      </code>
    </td>
    
    <td>
      ◁
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        circle-black
      </code>
    </td>
    
    <td>
      ●
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        circle-white
      </code>
    </td>
    
    <td>
      ○
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        square-black
      </code>
    </td>
    
    <td>
      ■
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        square-white
      </code>
    </td>
    
    <td>
      □
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        diamond-black
      </code>
    </td>
    
    <td>
      ◆
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        diamond-white
      </code>
    </td>
    
    <td>
      ◇
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        diamond-inside
      </code>
    </td>
    
    <td>
      ◈
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        check
      </code>
    </td>
    
    <td>
      ✓
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        check-heavy
      </code>
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross
      </code>
    </td>
    
    <td>
      ✕
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        cross-heavy
      </code>
    </td>
    
    <td>
      ✖
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        fisheye
      </code>
    </td>
    
    <td>
      ◉
    </td>
  </tr>
</tbody>
</table>
</note>

## offset

Генерирует значение или выражение, которое позволит установить размер, в точности равный заданному количеству колонок макета,
плюс дополнительный отступ, равный расстоянию между колонками.

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
      $expression <span className="text-red-600">
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
      Выражение, описывающее необходимый размер в колонках макета: <code>
        необходимо-колонок/всего-колонок
      </code>
      
      .
    </td>
  </tr>
  
  <tr>
    <td>
      $gutter
    </td>
    
    <td>
      <code>
        ?number
      </code>
    </td>
    
    <td>
      null
    </td>
    
    <td>
      Расстояние между колонками макета.
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`string|number` - Выражение `calc` или точное значение.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.offset('6/12');       // number: 50%
@debug more.offset('6/12', 15px); // string: calc(calc(100% / 2 - (15px * (12 - 6) / 12)) + 15px)
```

## parse-directions

Разбирает переданный список значений используя стандартный порядок CSS (top, right, bottom, left).
Значения могут быть пропущены используя `null` (предпочтительно) или его псевдоним `n`.

<note>

Если передан один аргумент, он используется для всех свойств позиционирования.

Если передано два аргумента, первое используется как значение **top** и **bottom**, второе - как значение **left** и **right**.

Если передано три аргумента, первое используется как значение **top**,
второе - как значение **left** и **right**, третье - как значение **bottom**.

Если передано четыре аргумента, первое используется как значение **top**, второе - как значение **left**,
третье - как значение **bottom**, четвёртое - как значение **left**.

</note>

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
      $values <span className="text-red-600">
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
</tbody>
</table>

**Возвращаемое значение:**

`map` - Полный набор свойств позиционирования в формате **(position: value)**.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.parse-directions(1px 2px 3px 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)
@debug more.parse-directions(1px, 2px, 3px, 4px); // map: (top: 1px, right: 2px, bottom: 3px, left: 4px)

@debug more.parse-directions(null, 2px, n, 4px); // map: (top: null, right: 2px, bottom: null, left: 4px)
```
