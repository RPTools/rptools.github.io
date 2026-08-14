---
layout: post
title: "New Feature: Token VBL"
tags: feature vision maptool
author: bard
icon: /assets/img/TokenVBL2.webp
slug: new-feature-token-vbl
---

Long time users of MapTool know the problem with doors, columns, statues, and Vision Blocking Layer (VBL). You want MapTool to block vision through these objects but you want the players to see them without their vision being blocked by VBL. Thanks to the RPTools craftsmen, you can now have your object and VBL too.

A new feature in MapTool 1.4.1.8 is Token VBL. It allows the GM to place VBL on an object yet still allow full visibility of that object to the players. What’s more, the VBL moves with the object so if a door swings open, the VBL moves with it. You’ve seen a preview of this capability in a previous post. In this article, we show you how to use this new feature.

Here is a drawing of a standard dungeon, with PCs exploring a corridor ending with doors.

<img class="post-example" src="/assets/img/TokenVBL1.webp" alt="TokenVBL1" width="300">

Note that the doors of fully visible but completely blocking the sight of the PCs. This is a great improvement of the previous versions of MT which had the GM clearing VBL as the characters opened doors. Now all the GM does is rotate the door to reveal to the PCs what’s beyond the doors.

In the picture below, the hero cracks to the door open to see what’s inside. Note that the VBL associate with the door moves with the door as it swings open.

<img class="post-example" src="/assets/img/TokenVBL2.webp" alt="TokenVBL2" width="300">

The elf now opens the door a bit further to reveal more of the creature within.

<img class="post-example" src="/assets/img/TokenVBL3.webp" alt="TokenVBL3" width="300">

Joy, it’s a dragon. The battle is joined.

To create token VBL, simply double-click the token or object to bring up the edit feature of MapTool. A few things to make note of. You can both generate and clear the VBL associated with a token. Making the token or object ‘Always Visible’ means the image will appear ‘above’ any fog of war and thus always be seen from PCs with vision and line of sight.

Visibility tolerance indicates how much of the object must be seen in order to see any of it. There are nine points on any token to be considered – four for each corner, four each midpoint between corners, and 1 for the center of the object. Thus a Visibility tolerance of 2 indicates that if any 2 points from that list are seen then the entire object is seen. In most cases, 2 is sufficient.

<img class="post-example" src="/assets/img/TokenVBL4.webp" alt="TokenVBL4" width="259">

You can also have the VBL fully encompass the entire image (VBL Sensitivity 0 seen above), or ignore the transparent portions of the image by increasing the VBL Sensitivity. (see below).

<img class="post-example" src="/assets/img/TokenVBL5.webp" alt="TokenVBL5" width="259">

The final effect allows for this functionality.

<!-- Video file no longer exists -->
<div class="alert alert--caution">doorVBL-demonstration.mp4 could not be found</div>

This new feature, combined with the new Draw Explorer, makes custom maps in MT much easier to manage and create. Token VBL reduces map creation time by automatically doing what used to be a manual effort for vision blocking objects. It also speeds up games by removing the need for VBL manipulation during the game.

Token VBL is available in MapTool 1.4.1.8 forwards which is available on our DTRPG [Publisher’s Page](https://www.drivethrurpg.com/browse/pub/12049/RPTools?affiliate_id=1002608). or from the RPTools [Downloads page](/toolbox/).
