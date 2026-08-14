---
layout: post
title: "Draw Explorer: Cut example"
tags: feature drawing maptool
author: jagged
icon: /assets/img/draw-explorer-cut-example.webp
slug: draw-explorer-cut-example
---

The new feature provided by the Draw Explorer is the ability to group elements of your drawing together. Grouping draws these elements as one effective object. How this differs from elements drawn normally becomes apparent when you include cuts or erasings in your group.

You draw a tower, starting with a circle.

<img class="post-example" src="/assets/img/draw-explorer-cut-step1.webp" alt="step1">

You then hollow it out using a circle cut and a line cut to make a doorway. The cuts show as red icons in the Draw Explorer and appear with red texture in the preview.

<img class="post-example" src="/assets/img/draw-explorer-cut-step2.webp" alt="step2">

But you now want to give the tower a stone floor. So you draw a stone floor and move it to underneath the walls. Unfortunately, it disappears because the cuts affect everything below them!

<img class="post-example" src="/assets/img/draw-explorer-cut-step3.webp" alt="step3">

But if you now select everything other than the stone floor and group them together, the cuts are limited to the group and the stone floor appears.

<img class="post-example" src="/assets/img/draw-explorer-cut-step4.webp" alt="step4">

You can now do things like draw shadows, and position them easily to create the appropriate effect.

<img class="post-example" src="/assets/img/draw-explorer-cut-step5.webp" alt="step5">

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our wiki for complete walk-throughs of how to use the tool. Our Community page has more links; see the toolbar at the top of the page.
