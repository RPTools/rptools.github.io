---
layout: post
title: "New Transfer VBL to/from Token"
tags: feature tokens vbl maptool
author: bard
image: /assets/img/TokenVBLColumn-X.webp
slug: new-transfer-vbl-to-from-token
---

MapTool 1.5 allows the transfer Vision Blocking Layer (VBL) to and from tokens. To access this new capability, simply edit a token and go to the VBL tab.

<img class="post-example" src="/assets/img/TokenVBLColumn.webp" alt="TokenVBLColumn">

There are several options on the VBL tab. You can generate VBL to cover the token. However, depending on the type of token, this can create complex VBL that will slow down vision rendering during a game.

<img class="post-example" src="/assets/img/TokenVBLColumn-Generate.webp" alt="TokenVBLColumn-Generate">

To create simpler VBL, you can now draw the VBL over the token on the map and transfer it to the token. You can then copy, move, or save the token and the VBL will remain. In the image below I’ve drawn an X with the VBL tools then transferred it onto the token.

<img class="post-example" src="/assets/img/TokenVBLColumn-X.webp" alt="TokenVBLColumn-X">

A few other notes about this panel.

- Visible Over FOW indicates that the token can always be seen over the Fog of War but still respects vision. However, if you have vision turned off on the map (Map->Vision-Off) the token will be visible regardless of VBL.
- The VBL Sensitivity determines what level of image transparency respected when generate the VBL for the token. The levels run from 1 to 255. The higher the number the more transparency is revealed.
- Visibility Tolerance determines how much of the token is seen before the entire token is revealed. If you imagine the token divided into a 3×3 grid, the Visibility Tolerance is the number of those segments that must be visible to the observing token before the entire token is made visible.

You can download the RPTools’ Products from our [Download](/toolbox/) page or our [DriveThruRPG publisher’s page](https://www.drivethrurpg.com/browse/pub/12049/RPTools?affiliate_id=401195). If you’re a coder you may also want to download the source from [GitHub](https://github.com/RPTools). While you’re in there, fork a branch and fix a bug. It’s the Open Source way.

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
