---
layout: post
title: "Pathfinding VBL and Terrain"
tags: feature mapping terrain vbl maptool
author: bard
image: /assets/img/AI.webp
slug: pathfinding-vbl-and-terrain
---

New in version 1.5: Pathfinding.

When activated via the new ‘AI’ toggle button in MapTool version 1.5, tokens will find the shortest path to its destination as you drag them on the token or hidden layers. The movement takes into account VBL and the new terrain modifiers as well. This means your tokens will no longer walk thru VBL.

To set the terrain modifier of a token, open the Edit Panel by double clicking the token or accessing it via the right-click menu. Navigate to the Config tab as shown below, and set the modifier. You can also set the token opacity from here.

![Terrain and Transparency](/assets/img/Terrain-and-Transparency.webp){: .post-example }

As you learned in a previous post, you can now remove VBL covering drawings. This is how I quickly generated the image below. The staircase stamp has a terrain value of 2 as do the other steps in the horizontal corridor. There is also VBL on the stamped steps as well to make the PCs navigate them as they should.

![VBL on stamped steps](/assets/img/VBL.webp){: .post-example }

With the movement AI enabled, the PC can be dragged anywhere but should go around VBL and suffer appropriate movement penalties when passing over tokens with a Movement Modifier.

![Pathfinding with movement modifiers](/assets/img/MovementMods.webp){: .post-example }

There are a few limitations to the new movement AI, however.

- If no path can be found within several seconds then no path will be shown. You can still move your token to the new location since there are legitimate times when you want to ignore VBL.
- There is also no fractional terrain modifiers at this time and no macros exist to access these new feature, nor server options to force players to use this mode of moving tokens.
- There could be performance related hits as well, although we did my best to mitigate this.
- The token cannot be free-size and must be snap to grid.
- If your rule system states that the square on either side must be open in order to move diagonally then you will need to use the spacebar to set a waypoint to navigate corners.

With MapTool allowing unbounded/nearly infinite map space, we had to include a timeout to prevent an infinite search. A new token config value is also now available called Terrain Modifier. This multiplies the cost of moving into that token’s cell and is taken into account when Pathfinding is used. Some examples are: Setting the multiplier to 2 will cost 10 feet of movement vs 5 feet acting like difficult terrain.

Setting the multiplier to a sufficiently high number, like 99999, will effectively block the movement and make the token go around the obstacle. This is useful for things like an arrow slit, window, lava, etc. Any token can have this modifier which means you can set NPC tokens so PCs must go around them or stamp tokens on the object layer like oil or water. You can also place tokens on the hidden layer to denote difficult terrain.

#### But I want to jump in the lava pit!

If you absolutely, positively, despite all warnings to the contrary want to enter difficult terrain, you can use the spacebar to set a waypoint to force the path. You can also use this to get into a more advantageous attack position even over difficult terrain.

#### Optional for Now

Due to the complexity of this feature, we felt it better to get this out to the community to get feedback before making Pathfinding GM enforcible.

#### Tell Us What You Think

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
