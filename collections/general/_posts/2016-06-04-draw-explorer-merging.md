---
layout: post
title: "Draw Explorer: Merging"
tags: feature drawing maptool
author: jagged
icon: /assets/img/logos/RPTools_Map_Logo_512.png
slug: draw-explorer-merging
excerpt_separator: "<!--more-->"
---

<img class="float-right" src="/assets/img/draw-explorer-merge4.webp" alt="merge4" width="150" height="150">

With the release of Maptool 1.4.2, you will have the ability to merge different drawn elements of your map together. You can try this functionality in the [Dev/Test Build of MapTool](/2016/05/maptool-devtest-version-1-4-1-2/) now but we don’t recommend using Dev/Test for your gaming sessions unless you’re the adventurous sort. If you’re unfamiliar with the Draw Explorer, we detailed its initial functionality in a [previous post](/2016/05/new-functionality-draw-explorer/).

<!--more-->

Merge Drawing is somewhat like Group Drawings where you can work with a series of individual elements as one but the true power comes when working with transparencies. When using a non-100% transparency setting for overlapping drawings, the opacities will add, causing the transparency to be more opaque. The effect: overlapping shapes spoil the transparency effect. To correct this, you can now merge drawings into a single object.

Take the following example where we wish to add a drop-shadow to a simple tower:

<img class="post-example" src="/assets/img/draw-explorer-merge1.webp" alt="merge1">

I have decided that I want the shadow to give the impression that the tower is tall, so I create a circular shadow (black with transparency set at 60%) below and to the left of the tower that is also slightly smaller. Then I draw two triangles to join the circle to the tower.

<img class="post-example" src="/assets/img/draw-explorer-merge2.webp" alt="merge2">

Now obviously this creates some nasty “shadow overlaps”, so I select the two triangles and circle shadows in the Draw Explorer and merge them together.

<img class="post-example" src="/assets/img/draw-explorer-merge3.webp" alt="merge3">

That looks much better! Now I just need to move the merged shadow to the bottom and we are finished.

<img class="post-example" src="/assets/img/draw-explorer-merge4.webp" alt="merge4">

Note that you cannot ‘unmerge’ merged drawings and drawing borders will disappear from overlapping sections. Also, the merged drawing will have the same border, fill, and transparency settings. The properties will be pulled from the object under the mouse pointer.

Please feel free to try the new functionality in the [Dev/Test Build of MapTool](/2016/05/maptool-devtest-version-1-4-1-2/). You can provide feedback in the [forums]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=26693) or as a comment here.
