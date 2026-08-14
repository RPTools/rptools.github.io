---
layout: post
title: "Draw Explorer: Get/Set Properties"
tags: feature drawing maptool
author: bard
icon: /assets/img/logos/RPTools_Map_Logo_512.png
slug: draw-explorer-getset-properties
excerpt_separator: "<!--more-->"
---

<img class="float-right" src="/assets/img/draw-explorer-6.webp" alt="6" width="150" height="150">

With the release of Maptool 1.4.2 you will have the ability to get a drawing’s properties and apply those to another drawing. You can try this functionality in the [Dev/Test Build of MapTool](/2016/05/maptool-devtest-version-1-4-1-2/) now but we don’t recommend using Dev/Test for your gaming sessions unless you’re the adventurous sort.

<!--more-->

Drawing properties are the selections you make in the Drawing dialog shown to the right. The power of this functionality comes into play when you want to redo a map with a new texture, border, or transparency. You’ll be able to update your drawing rather than redraw with new settings. It should be a great time saver for users who draw their maps rather than import them.

The Get Properties function is simple to use. You simply select the drawing with properties you want to mimic in the Draw Explorer, right click, and select the Get Properties option from the popup menu. To apply these properties, select another drawing and perform Set Properties on it.

The gettable/settable properties include

- Fill color or texture
- Border color or texture
- Pen Width used on the Border
- Transparency percentage

Please note: there is a current bug in MapTool that is not easily resolved around re-rendering the map after changes in the Draw Explorer. This will potentially cause the changes made in Draw Explorer to not show on the map until you rerender via zoom or another rerendering event.

Please feel free to try the new functionality in the [Dev/Test Build of MapTool](/2016/05/maptool-devtest-version-1-4-1-2/). You can provide feedback in the [forums]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=26693) or as a comment here.
