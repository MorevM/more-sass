# color

> Functions group for work with colors.

## hex-to-hsl

Converts HEX color value to HSL.

**Arguments:**

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
      Color HEX value.
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
      The output list separator. <br />
      
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

**Returns:**

`list` - The list of HSL values structured of *(hue, saturation, lightness)*.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.hex-to-hsl(#ff0000); // list: 0deg, 100%, 50%
```

## hex-to-rgb

Converts HEX color value to RGB.

**Arguments:**

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
      Color HEX value.
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
      The output list separator. <br />
      
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

**Returns:**

`list` - The list of RGB values structured of *(red, green, blue)*.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.hex-to-rgb(#ff0000); // list: 255, 0, 0
```

## shade

Mixes a given color with black.

**Arguments:**

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
      The original color.
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
      Amount of the black color in the result color (<code>
        %
      </code>
      
      ).
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`color` - The result color of mixing the original color with black.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.shade(#808080, 45); // color: #464646
```

## social-color

Retrieves a given social media brand color.

**Arguments:**

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
      Social media code ('vk', 'fb', 'tw', etc.).
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`?color` - Social media brand color.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.social-color('fb'); // color: #4267b2
```

<note>

List of available codes:

- `vk` - VKontakte
- `fb` - Facebook
- `ok` - Odnoklassniki
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

Mixes a given color with white.

**Arguments:**

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
      The original color.
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
      Amount of the white color in the result color (<code>
        %
      </code>
      
      ).
    </td>
  </tr>
</tbody>
</table>

**Returns:**

`color` - The result color of mixing the original color with white.

**Example:**

```scss
@use 'more-sass' as more;
@debug more.tint(#808080, 45); // color: #b9b9b9
```
