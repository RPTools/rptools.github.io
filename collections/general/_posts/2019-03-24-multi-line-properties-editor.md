---
layout: post
title: "Multi-line Properties Editor"
tags: feature maptool
author: bard
image: /assets/img/logos/RPTools_Map_Logo_512.png
slug: multi-line-properties-editor
---

<section markdown="1">
As part of the 1.5.0 release, MapTool included a popup window to allow for multiple-line editing of properties. Prior to this release, you would need to copy a long properties entry to another editor, make your changes, then copy it back. With 1.5, you can simply click into the properties field, then on the down arrow next to the property value to bring up an editing window.

![Multi-line property value editor](/assets/img/MultiLineEditor.webp){: .post-example }

So those huge JSON properties can now be formatted and save to make for easier editing without resorting to a copy and paste to another editor.

![Multi-line property value editor with JSON syntax highlighting](/assets/img/MultiLineEditor2.webp){: .float .float--left .float--30 }

The current implementation does not word wrap so you’ll need to insert carriage returns to get the multi-line aspect. This feature should be greatly enhanced with the 1.5.2 release coming at the end of April to include word wrap and have syntax highlighting for JSON objects.

Thanks to Darinth for enabling this feature and naciron for expanding on it.
</section>

<section markdown="1">
Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
</section>


{% include md-links.md %}
