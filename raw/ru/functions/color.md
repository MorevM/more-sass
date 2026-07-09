# color

> Категория функций для работы с цветом.

## hex-to-hsl

Преобразует HEX-значение цвета в HSL.

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
      $hex <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      HEX-значение цвета.
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
        comma
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

`list` - Список значений в формате HSL *(hue, saturation, lightness)*.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.hex-to-hsl(#ff0000); // list: 0deg, 100%, 50%
```

## hex-to-rgb

Преобразует HEX-значение цвета в RGB.

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
      $hex <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      HEX-значение цвета.
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
        comma
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

`list` - Список значений в формате RGB *(red, green, blue)*.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.hex-to-rgb(#ff0000); // list: 255, 0, 0
```

## shade

Затемняет переданный цвет, смешивая его с чёрным.

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
      $color <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Оригинальный цвет.
    </td>
  </tr>
  
  <tr>
    <td>
      $amount
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        10
      </code>
    </td>
    
    <td>
      Доля чёрного цвета в получившемся цвете (%).
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`color` - Цвет, полученный в результате смешения оригинального цвета с чёрным.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.shade(#808080, 45); // color: #464646
```

## social-color

Получает фирменный цвет определённой социальной сети.

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
      $social <span className="text-red-600">
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
      Код требуемого ресурса ('vk', 'fb', 'tw', etc.).
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`?color` - Фирменный цвет требуемой социальной сети.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.social-color('vk'); // color: #4a76a8
```

<note>

Список доступных кодов:

- `vk` - ВКонтакте
- `fb` - Facebook
- `ok` - Однокласники
- `yt` - YouTube
- `tw` - Twitter
- `ig` - Instagram (purple)
- `ig-gradient` - Instagram (gradient)
- `tg` - Telegram
- `dr` - Dribble
- `be` - Behance
- `li` - Linked In
- `wa` - WhatsApp
- `vb` - Viber

</note>

## tint

Осветляет переданный цвет, смешивая его с белым.

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
      $color <span className="text-red-600">
        *
      </span>
    </td>
    
    <td>
      <code>
        color
      </code>
    </td>
    
    <td>
      —
    </td>
    
    <td>
      Оригинальный цвет.
    </td>
  </tr>
  
  <tr>
    <td>
      $amount
    </td>
    
    <td>
      <code>
        number
      </code>
    </td>
    
    <td>
      <code>
        10
      </code>
    </td>
    
    <td>
      Доля белого цвета в получившемся цвете (%).
    </td>
  </tr>
</tbody>
</table>

**Возвращаемое значение:**

`color` - Цвет, полученный в результате смешения оригинального цвета с белым.

**Пример использования:**

```scss
@use 'more-sass' as more;

@debug more.tint(#808080, 45); // color: #b9b9b9
```
