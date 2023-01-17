[1-s2.0-S2352914820302069-main.pdf](https://github.com/JUSTINE-A1107/Ring-UI-Components-Web-Server-Module-Data-Collection/files/10432712/1-s2.0-S2352914820302069-main.pdf)
# Ring-UI-Components-Web-Server-Module-Data-Collection
Ring elements for your UI are very popular in modern webdesign. This project serves as an easy way to add rings to your website UI without any real programming. Simply add the markup to HTML and call to javaScript to change the fill and inner content. To put content/text around or underneath, that is all unrelated, you can treat this as a div box and just put your additional content around. Line background color, foreground color and font color can be set. Using ‘transparent’ is perfectly fine as a value, as per usual in CSS, so making the background line vanish and only having the active line is easy. This project uses jquery which is linked to via CDN direct link in the index.html. Another script called ringui.js which contains all the ring specific javascript code. This is linked in the example index.html. Make sure to include it when including your js files.
This code is easy to extend and change.
Some of the possible changes or enhancements include:
● change font color via javascript
● change line color per javascript
● change line BG color per javascript
● change thicknesses per javascript
● have 2 thicknesses, background and foreground do not need the same ones, interesting visuals can be achieved by using different values. These are easy to implement, but have been omitted in the interest of keeping the current code as simple as possible
If you create any tag with the class ‘ring_ui’, this code will create a ring element for
you. This means that even this basic line, will yield a ring element:
<div id='defaultring' class='ring_ui'></div>
All settings are in fact optional, to make the code more robust and usage more
flexible. Using default values when attributes are omitted.
The following example show you all attributes possible:
<div class='ring_ui' ring-size='240' ring-thickness='8'
ring-frontcolor='orange' ring-backcolor='#444' ring-fontsize='64'
ring-fontcolor='orange' ring-percent='33' > inner content</div>
ring-size: Size in pixels, ring is square.
ring-thickness: The thickness of the line
ring-frontcolor: The color of the line in the foreground, the active percentage line.
ring-backcolor: The color of the background line.
ring-fontsize: Size of the font inside the inner content. In pixels.
ring-fontcolor: Color of the font inside the inner content.
ring-percent: You may set the initial percentage fill here, however this is mostly used for the dynamic changes.
Colors can be specified in any format that CSS permits To change the inner content of the ring, use this call:
ringUI.changeContent(divbox, string of text or html);
You may use any HTML code in the content part. The parameter divbox denotes the div of the ring_ui class
