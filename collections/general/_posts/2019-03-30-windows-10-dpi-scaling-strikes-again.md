---
layout: post
title: "Windows 10 DPI Scaling Strikes Again!"
tags: bug maptool
author: bard
icon: /assets/img/SwatBug.webp
slug: windows-10-dpi-scaling-strikes-again
---

DPI scaling may affect your MapTool experience in odd ways. We’ve [previously discussed](/2019/03/windows-10-font-issue/) the effect on the readability of MapTool text as well as a workaround to fix it.

Recently, community member Vishika complained the templating tool has issues in the new version of MapTool. We discovered DPI Scaling had once again bit MapTool. However, through the diagnosis, we discovered how to turn off DPI Scaling on an application by application bases.

To fix for MapTool only without affecting the entire display right click on the MapTool icon in the task bar and select Properties.

<img class="post-example" src="/assets/img/dpi1.webp" alt="dpi1" width="560">

From the Compatibility Tab, select Change High DPI Settings. On the popup screen, adjust the DPI settings to those below.

<img class="post-example" src="/assets/img/dpi3.webp" alt="dpi3" width="560">

The template tool and the rest of MapTool for that matter should work as usual.

The RPTools team continues to work on this issue. We’re investigating how to make this setting change within MapTool. We also hope the move to JavaFX will eliminate the need for this configuration change going forward.

For help with MapTool, TokenTool, or other RPTools products, please see the [RPTools Forums]({{ site.data.links.forums | escape }}) or live chat on [Discord]({{ site.data.links.discord | escape }}).
