---
layout: post
title: "Draw Explorer: Vision Blocking Layer"
tags: feature drawing vbl vision maptool
author: jagged
icon: /assets/img/map4.webp
slug: draw-explorer-vision-blocking-layer
---

With the introduction of Maptool 1.5 comes a series of additions to the Draw Explorer that should speed map creation. If you draw your dungeon rooms directly in Maptool, you can now build the Vision Blocker Layer in a few simple clicks.  Imagine you had built the dungeon shown below entirely with textures (not images):

<img class="post-example" src="/assets/img/map1.webp" alt="map1" width="300">

You now want to add the vision blocking layer. So your first step is to cover the entire map with a solid vision blocking rectangle:

<img class="post-example" src="/assets/img/map2.webp" alt="map2" width="300">

Now you simply open the Draw Explorer by clicking **Window > Draw Explorer.**

Then select all of the rooms, right click and select **Shape to VBL > Remove from VBL**

<img class="post-example" src="/assets/img/map3.webp" alt="map3" width="300">

Your vision layer is complete. The job is done!

<img class="post-example" src="/assets/img/map4.webp" alt="map4" width="300">

#### Path vs. Shape

The menu contains two options for adding/removing VBL: Path and Shape

- Path is the outer border of the drawing. Use this if you to add or remove VBL lines from the edges of your drawings.
- Shape includes or removed the entire drawing to/from VBL. Use it to replicate the use case above.

#### Limitations

You currently cannot use either the Path or Shape to VBL for the Oval drawing type.

You can download the RPTools’ Products from our [Download](/toolbox/) page or our [DriveThruRPG publisher’s page](https://www.drivethrurpg.com/browse/pub/12049/RPTools?affiliate_id=401195). If you’re a coder you may also want to download the source from [GitHub](https://github.com/RPTools). While you’re in there, fork a branch and fix a bug. It’s the Open Source way.

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
