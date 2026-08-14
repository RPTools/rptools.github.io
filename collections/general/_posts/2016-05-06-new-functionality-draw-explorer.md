---
layout: post
title: "New Functionality: Draw Explorer"
tags: feature drawing maptool
author: bard
icon: /assets/img/draw-explorer.webp
slug: new-functionality-draw-explorer
---

MapTool added the Draw Explorer as a new feature in release 1.4.0.1. This innovation gives GMs access to a tree view of drawings and templates on the current map. From this view, users see a list of elements created with the Drawing and Template Tools. Note: for the purposes of this article, both templates and drawings will simply be called drawings.

From the Draw Explorer, users may
- change a drawing’s layer
- group drawings together
- move drawings to the front or back of Z-order
- delete drawings.

All these functions make drawing in MapTool much easier while opening up exciting new capabilities.

### Pre-1.4 Functionality

<div class="alert alert--note">Readers familiar with MapTool’s Drawing and Template Tools can skip to the next section.</div>

<img class="post-example" src="/assets/img/draw-explorer-7.webp" alt="7">

MapTool has two tools used for drawing: Drawing Tool and Template Tool. Users access both from the Tool Pallet (pictured above). Drawing Tool allows the creation of freehand drawings, lines, boxes, ellipses, and diamonds. GMs often use these tools to create maps. The map on the [“RPTools is the Millennium Falcon of RPG Software”](/2011/05/welcome/) page was created with these drawing tools and stamp objects. Template Tool has pre-defined templates – largely from DnD – for use during game play. The templates available follow the same rules as drawings, with the same tool pallet but their use is for spell and area-of-effect templates.

<img class="post-example" src="/assets/img/draw-explorer-6.webp" alt="6">

Both tools use the drawing pallet (pictured above). Users select the border fill color and width, opacity, layer, and whether or not to snap the drawing to the MapTool grid. Both border and fill can be a solid color or a texture from the MapTool Resource Library. An erase (Cut) function removes or modifies a drawing.  MapTool renders new drawings over old. The technical term for this Z-ordering, where newer items have a higher Z order than older ones.

For additional information on drawing via the MapTool VTT, please consult the MapTool Wiki “Introduction to Drawing” page. (coming soon™)

### New Functionality

Users access the Draw Explorer via the MapTool Window Menu. A checkbox by a Window indicates it is visible. As with all MapTool windows, you have the capability of arranging the Draw Explorer window within the MapTool frame as you wish, including docking it with other windows in a tabbed fashion.

<img class="post-example" src="/assets/img/draw-explorer-1.webp" alt="1">

The Draw Explorer is similar to the Map Explorer, separating items based on their layer – either Token, Hidden, Object, or Background. Selecting a drawing in Draw Explorer displays it below the tree view. The listing is in Z order. Cuts (erasers) also show in the Draw Explorer. We’ll have another article discuss the manipulation of Cuts soon™.

<img class="post-example" src="/assets/img/draw-explorer-2.webp" alt="2">

Users often draw items on the wrong layer. With the Draw Explorer, you can now change a drawing’s layer. Note that any change in layer will reset the Z-order of the drawing so it resides at the top of the tree view for its new layer.

<img class="post-example" src="/assets/img/draw-explorer-3.webp" alt="3">

You can also change a drawing’s Z-order, moving them so they are either draw over or behind other drawings. Be careful moving Cuts to a lower Z-order. Anything with a higher Z will ignore the cut. Sometimes you want this, other times it negates the effect of the cut completely.

<img class="post-example" src="/assets/img/draw-explorer-4.webp" alt="4">

Users can group drawings together so they are drawn as a unit. This will be important later as the devs add new features to Draw Explorer. This has the effect of giving your layers within the layer. There will be additional information on groupings in our next article.

<img class="post-example" src="/assets/img/draw-explorer-5.webp" alt="5">

Thus far the response to the Draw Explorer has been overwhelmingly positive. As always, there is a wishlist of add-ons from our community which includes:
- drag objects around the tree view to change their Z-order and layer
- move drawings around the map
- copy drawings
- edit drawings
- export a drawing to its own image file to be reused as a droppable resource.

Feel free to visit the [RPTools forum post]({{ site.data.links.forums | escape }}/viewtopic.php?f=86&t=26382) discussing this feature to
1. Thank the devs for this great, new functionality
2. Provide feedback
3. Post ideas for new capabilities to add to the Draw Explorer.

Other Links:

- [Getting Started with MapTool]({{ site.data.links.wiki | escape }}/index.php/Introduction_to_Mapping)
- [Feature Request Thread for Draw Explorer]({{ site.data.links.forums | escape }}/viewtopic.php?f=86&t=26382)
- MapTool Wiki entry for Draw Explorer (coming soon™)
