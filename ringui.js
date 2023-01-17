function RingUI()
{
    this.changePercent = function(ringdiv, _percent)
    {
        let circumf  = parseFloat( ringdiv.attr('ring-circumf') );
        let myCircle = ringdiv.find(".ring_ui-circle");
        myCircle.attr("stroke-dasharray", ""+circumf+" "+circumf);
        myCircle.attr("stroke-dashoffset", ""+(circumf - _percent * 0.01 * circumf));
        ringdiv.attr('percent', _percent);
    }

    this.changeContent = function(ringdiv, _content)
    {
        ringdiv.find('.ring_ui-content').html(_content);
    }

    this.init = function()
    {

       $('.ring_ui').each(function()
       {
            let item = $(this);
            let content = item.html();

            let cSize = parseInt(item.attr('ring-size')) || 160;
            let cThickness = parseInt( item.attr('ring-thickness') ) || 5;
            let cFontsize = parseInt( item.attr('ring-fontsize') ) || 40;
            let cFrontcolor = item.attr('ring-frontcolor') || "black";
            let cBackcolor = item.attr('ring-backcolor') || "#777";
            let cFontcolor = item.attr('ring-fontcolor') || "black";
            let circumf = ((cSize*0.5)-(cThickness * 2)) * 2 * Math.PI;
            item.attr('ring-circumf', circumf);
            item.css({width: cSize, height: cSize});

            item.html( getRingHTML(cSize, cThickness, cBackcolor, cFrontcolor, cFontsize, cFontcolor, content) );

            ringUI.changePercent(item, parseInt( item.attr('ring-percent') ));
       });

    }

    let getRingHTML = function(in_size, in_strokeWidth, in_backLineColor, in_frontLineColor, in_fontSize, in_fontColor, in_content)
    {
        return "<svg height='"+in_size+"' width='"+in_size+"' >"+
            "<circle fill='transparent' stroke='"+in_backLineColor+"' stroke-width='"+in_strokeWidth+"' "+
            " r='"+((in_size*0.5)-(in_strokeWidth * 2))+"' cx='"+(in_size*0.5)+"' cy='"+(in_size*0.5)+"' /> "+
            "<circle class='ring_ui-circle' fill='transparent' stroke='"+in_frontLineColor+"' stroke-width='"+in_strokeWidth+"' "+
            " r='"+((in_size*0.5)-(in_strokeWidth * 2))+"' cx='"+(in_size*0.5)+"' cy='"+(in_size*0.5)+"' /> "+
        "</svg> " + 
        "<div class='ring_ui-content' style='font-size: "+in_fontSize+"px; color: "+in_fontColor+"'>"+in_content+"</span></div>";
    } 
}

$( document ).ready(function()
{
    window.ringUI = new RingUI();
    window.ringUI.init();
});