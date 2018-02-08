/**
 * Store all the function/mixins helpers needed for styled component
 */

import { baseline } from '../Helpers/style';

// Mixin to convert a font-size from px to rem
// Uses a baseline of 10
// @params {fontsize} - Default to 16px, the value of the fontsize in px we want to convert to rem
// @params {linesize} - Default to 22px, the value of the lineheight in px we want to convert to rem
export function fontSize(fontsize = 16, linesize = 22) {
  const fontRem = fontsize/baseline;
  const lineRem = linesize/baseline;

  return `
    font-size: ${fontsize}px;
    font-size: ${fontRem}rem;
    line-height: ${linesize}px;
    line-height: ${lineRem}rem;
  `;
}

// Mixin clearfix 
// @usage - ${clearfix}; - To clear the space around an element
export function clearfix() {
  return `
    &::after {
      clear: both;
      content: '';
      display: table;
    }
  `
}

// Mixin to truncate a text
// @params{width} - The width passed which the text will be truncated
// @usage - ${truncate(`300px`)}; - To truncate the text after 300px in width
export function truncate(width) {
  return `
    max-width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `
}

// Mixin for sizing an element
// @params {height} - Define the height of an element 
// @params {width} - Define the width of an element 
// @usage - ${size(`100%`)}; - To size an element to height: 100% and width: 100%
// @usage - ${size(`100%, 50%`)}; - To size an element to height: 100% and width: 50%
// @usage - ${size(`100%, null`)}; - To set the height only to 100%
// @usage - ${size(`null, 100%`)}; - To set the width only to 100%
export function size(height, width = height) {
  return `
    height: ${height};
    width: ${width};
  `
}

// Mixin to define a max-size on an element
// @params {max-height} - Define the max-height of an element
// @params {max-width} - Define the max-width of an element
// @usage - ${maxSize(`300px`)}; - To limit the size of an element to max-height: 300px and max-width: 300px
// @usage - ${maxSize(`300px`, `100px`)}; - To limit the size of an element to max-height: 300px and max-width: 100px
// @usage - ${maxSize(`300px`, null)}; - To limit the size of an element to max-height: 300px
// @usage - ${maxSize(null, `300px`)}; - To limit the size of an element to max-width: 300px
export function maxSize(maxHeight, maxWidth = maxHeight) {
  let ret = '';
  if (maxHeight) {
    ret = `max-height: ${maxHeight};`
  }

  return ret += `max-width: ${maxWidth};`
}

// Mixin for quick borders
// @params{style} - The style of the border (width and type)
// @params{color} - The color of the border
// @params{sides} - The sides of the border (top, right, bottom and/or left)
// @usage - ${border('3px solid', $colors.esBlue, 'all') - To apply a 3px solid $esBlue border to top, right, bottom and left sides
// @usage - ${border('3px solid', $colors.esBlue, 'top right') - To apply a 3px solid $es-blue border to top and right only
export function border(style, color, sides) {
  let output = '';
  if (style !== undefined) {
    if (sides === 'all') {
      output += `border: ${style} ${color};`;
    }
    else {
      sides = sides ? sides.split(' ') : [];
      for (let side in sides) {
        if (sides[side] === 'top' || sides[side] === 'right' || sides[side] === 'bottom' || sides[side] === 'left') {
          output += `border-${sides[side]}: ${style} ${color};\n`;
        }
      }
    }
  }

  return output;
}

// Mixin to center an element vertically, horizontally or in both directions
// For this mixin to work, the parent element needs to be relatively positioned !
// @params {direction} - Define the direction of the centering (vertical, horizontal or bothDirections)
// @usage - ${center(vertical)} - To vertically center an element
// @usage - ${center(horizontal)} - To horizontally center an element
// @usage - ${center(bothDirections)} - To vertically and horizontally center an element
export function center(direction) {
  const ret = 'position: absolute;';
  
  if (direction === 'vertical') {
    return `
      ${ret}
      top: 50%;
      transform: translateY(-50%);
    `;
  } else if (direction === 'horizontal') {
    return `
      ${ret}
      left: 50%;
      transform: translate(-50%);
    `;

  } else if (direction === 'bothDirections') {
    return `
      ${ret}
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  }
}

// Mixin for quick border-radius
// @params{radius} - Define the width of the border-radius
// @params{sides} - The sides of the border (top-left, top-right, bottom-right and/or bottom-left)
// @usage - ${borderRadius(`3px, all`)} - To apply a border-radius of 3px to top-left, top-right, bottom-right and bottom-left sides
// @usage - ${borderRadius(`3px, top-left bottom-right`)} - To apply a border-radius of 3px to top-left and bottom-right sides only
export function borderRadius(radius, sides) {
  let output = '';

  if (sides === 'all') {
    output += `
      border-radius: ${radius};
      background-clip: padding-box;
    `
  }
  else {
    sides = sides ? sides.split(' ') : [];
    for (let side in sides) {
      if (sides[side] === 'top-left' || sides[side] === 'top-right' || sides[side] === 'bottom-left' || sides[side] === 'bottom-right') {
        output += `border-${sides[side]}-radius: ${radius};\n`
      }
    }

    if (output) {
      output += `background-clip: padding-box;`;
    }
  }

  return output;
}

// Mixin to create a gradient
// @params {from} - The starting color
// @params {to} - The end color
// @params {orientation} - The direction of the gradient (to bottom, to right or ellipse at center)
// @usage - ${gradient(esBlue, esYellow, 'vertical') - For a gradient from esBlue to esYellow towards the bottom.
export function gradient(from, to, orientation) {
  const ret = 'background: $from;';

  if (orientation === 'vertical') {
    return `
      ${ret}
      background: linear-gradient(to bottom, ${from}, ${to});
    `;
  } else if (orientation === 'horizontal') {
    return `
      ${ret}
      background: linear-gradient(to right, ${from}, ${to});
    `;
  } else {
    return `
      ${ret}
      background: radial-gradient(ellipse at center, ${from}, ${to});
    `;
  }
}

// Mixin to be used any time a pseudo element is used (i.e. ::before or ::after)
// @params{display} - Default to block, the type of display of the pseudo-element
// @params{pos} - Default to absolute, the position type of the pseudo element
// @params{content} - Default to empty value
// @usage - ${pseudo()} - Apply the default values to the pseudo element
export function pseudo(display = 'block', pos = 'absolute', content = '') {
  return `
    content: ${content};
    display: ${display};
    position: ${pos};
  `
}

// Calculates the darker and lighter version of a hex colour.
// @params {hex} — a hex colour value such as “#abc” or “#123456” (the hash is optional)
// @params {lum} — the luminosity factor, i.e. -0.1 is 10% darker, 0.2 is 20% lighter, etc.
export function colorLuminance(hex, lum) {
  // Validate hex string.
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // convert to decimal and change luminosity
  let rgb = "#", c, i;
  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
    rgb += ("00" + c).substr(c.length);
  }

  return rgb;
}

// @params {$position} - Define the position type; absolute, relative or fixed
// @params {$args} - Pass in the values and type of position
// @usage - @include position('absolute', 'top 0 right 20px bottom 30%'); - T define all positions but left.
export function position(position, args) {
  const directions = ['top', 'right', 'bottom', 'left'];
  const argsArray = args.split(' ');

  let output = [];
  for (let o in directions) {
    let i = argsArray.indexOf(directions[o]);
    if (i > -1 && ((i + 1) <= argsArray.length)) {
      let value = parseInt(argsArray[i + 1]) < 0 ? 'auto' : argsArray[i + 1];
      output.push(`${directions[o]}: ${value};`)
    }
  }

  return `
    position: ${position};
    ${output.join("\n")}
  `;
}

// Mixin to create a css triangle (useful for tooltips or components such as feedback messages)
// @params{$color} - The color of the triangle
// @params{$direction} - The direction of the tip of the triangle (can be down, up, right or left)
// @params{$size} - Default to 6px, the size of the triangle
// @params{$position} - Default to absolute, can be overridden if a relative or fixed position is needed
// @params{$round} - Default to false, can be set to true to apply a border-radius to the triangle
// @usage - @include triangle($es-blue, down, 10px); - For a blue triangle pointing down with a size of 10 px and absolutely positioned
export function triangle(color, direction, size = '6px', position = 'absolute', round = false) {
  let triangle = '';
  let radius = '';

  if (round) {
   radius = borderRadius('3px', 'all');
  }

  if (direction === 'down') {
    triangle = `
      ${border(`${size} solid`, 'transparent', 'left right')}
      ${border(`${size} solid`, color, 'top')}
      ${margin(`${0 - Math.round(parseInt(size) / 2.5)}px`, null, null)}
    `;
  }
  else if (direction === 'up') {
    triangle = `
      ${border(`${size} solid`, 'transparent', 'left right')}
      ${border(`${size} solid`, color, 'bottom')};
      ${margin(null, null, `${0 - Math.round(parseInt(size) / 2.5)}px`)}
    `;
  }
  else if (direction === 'right') {
    triangle = `
      ${border(`${size} solid`, 'transparent', 'top bottom')};
      ${border(`${size} solid`, color, 'left')};
      ${margin(null, `-${size}`, null, null)};
    `;
  }
  else if (direction === 'left') {
    triangle = `
      ${border(`${size} solid`, 'transparent', 'top bottom')}
      ${border(`${size} solid`, color, 'right')}
      ${margin(null, null, null, `-${size}`)}
    `;
  }

  return `
    ${pseudo('block', position)}
    height: 0;
    width: 0;
    ${radius}
    ${triangle}
  `;
}

// Mixin for quick margin (useful to not forget one of the four values)
// @params{$top} - The margin-top value
// @params{$right} - The margin-right value
// @params{$bottom} - The margin-bottom value
// @params{$left} - The margin-left value
// @usage - @include margin(10px); - To define top, bottom, left and right margin to 10px
// @usage - @include margin(10px, 15px); - To define top and bottom margin to 10px and left and right margin to 15px
// @usage - @include margin(10px, 15px, 13px); - To define top margin to 10px, left and right margin to 15px and bottom margin to 13px
// @usage - @include margin(10px, 5px, 6px, 8px); - To define top margin to 10px, right margin to 5px, bottom margin to 6px and left margin to 8px
// @usage - @include margin(10px, null, null, null); - To define margin-top only to 10px
export function margin(top, right, bottom, left) {
  right = !!right ? right : right !== null ? top : null;
  bottom = !!bottom ? bottom : bottom !== null ? top: null;
  left = !!left ? left : left !== null ? right : null;

  const margins = {
    'margin-top': top,
    'margin-right': right,
    'margin-bottom': bottom,
    'margin-left': left,
  };

  let output = [];
  for (let margin in margins) {
    if (margins[margin] !== null) {
      output.push(`${margin}: ${margins[margin]};`);
    }
  }

  return output.join("\n");
}

// Mixin to apply custom style for Mozilla Firefox
export function targetFirefox() {
  return `
    @-moz-document url-prefix() {
      @content;
    }
  `
}

// Mixin to apply custom style for Internet Explorer
export function targetIe() {
  return `
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      @content;
    }
  `
}

// Mixin to apply custom styles for Edge
export function targetEdge() {
  return `
    @supports (-ms-ime-align:auto) {
      @content
    }
  `
}
