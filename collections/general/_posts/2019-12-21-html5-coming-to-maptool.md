---
layout: post
title: HTML5 Coming to MapTool
tags: html maptool
author: bard
icon: /assets/img/html5.webp
slug: html5-coming-to-maptool
excerpt_separator: "<!--more-->"
---

<img class="float-right" src="/assets/img/html5.webp" alt="html5" width="225">

The MapTool elves have been busy this holiday season. They’ve introduced two new macro functions to produce HTML5 dialogs and frames. The new macro functions frame5() and dialog5() can be used in place of the HTML3 [frame()](http://lmwcs.com/rptools/wiki/frame_(roll_option)) and [dialog()](http://lmwcs.com/rptools/wiki/dialog_(roll_option)) macro functions.

<!--more-->

The new functionality allows the use of CSS3 and Javascript within the HTML frame/dialog so your formatting options now include those available to modern web applications. It has the limitation of not being able to access external assets.

You should now be able to do things like conditional displays like the code below.

```
[frame5("MyFrame"):{
<!DOCTYPE html>
<html lang="en">
<head>
    <script type="text/javascript">
    [r:"
        function toggle_visibility(id) {
            var e = document.getElementById(id);
            if (e.style.display == 'block')
                e.style.display = 'none';
            else
                e.style.display = 'block';
        }
        "]
    </script>
</head>
<body>
    <h1>Online Help</h1>
    <p class="boxtitle"><a href="#" onclick="toggle_visibility('help_topics');" class="boxtitle">Show/Hide Help Topics</a></p>
    <ul id="help_topics" style='display:none;'>
        <li>Products - blah blah blah.</li>
        <li>Blogs - blah blah blah.</li>
        <li>Documentation - blah blah blah.</li>
        <li>Partners - blah blah blah.</li>
    </ul>
</body>
</html>
}]
```

If you are a framework developer or web developer, please [download](https://github.com/RPTools/maptool/releases/tag/1.6.0-alpha-1) the MapTool 1.6 alpha release and put the frame5 and dialog 5 through its paces. Please report problems back to our [Discord server]({{ site.data.links.discord | escape }}) or the [RPTools forums]({{ site.data.links.forums | escape }}). You can download the alpha release of MapTool 1.6 [here](https://github.com/RPTools/maptool/releases/tag/1.6.0-alpha-1).

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}
