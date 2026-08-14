---
layout: post
title: MapTool 1.9.3 Released
tags: maptool release
author: bard
icon: /assets/img/SwatBug.webp
slug: maptool-1-9-3-released
---

Users discovered a few bugs in MapTool 1.9.2. This release fixes the following:

- [#2849](https://github.com/RPTools/maptool/issues/2849) Has Sight always ticked for PC tokens. Fixed.
- [#2854](https://github.com/RPTools/maptool/issues/2854) Imported UVTT maps had file extension in Map Name. Display Name not updated. Fixed.
- [#2853](https://github.com/RPTools/maptool/issues/2853) Light properties not being read from UVTT files. Fixed.
- [#2825](https://github.com/RPTools/maptool/issues/2825) One unit test failing with updated json-path library. Disabled for now.
- [#2812](https://github.com/RPTools/maptool/issues/2812) A bad data directory path would produce a less than helpful error message and leave MapTool running in background. Fixed.
- [#2802](https://github.com/RPTools/maptool/issues/2802) During Map loading the GM name is displayed to Players. Fixed.
- [#2785](https://github.com/RPTools/maptool/issues/2786) Changing MapTool data directory location did not change the location for log files. Fixed.
- [#2785](https://github.com/RPTools/maptool/issues/2785) Macros moved between Macro Groups or Panels set to Player Editable. Fixed.
- [#2783](https://github.com/RPTools/maptool/issues/2783) Conversion from AWT to JTS geometry was producing near-zero length segments causing pathfinding to fail on large, complex VBL/MBL maps with current JTS library. Fixed.
- [#2779](https://github.com/RPTools/maptool/issues/2779) Mousewheel events not reaching HTML overlays. Fixed.
- [#2766](https://github.com/RPTools/maptool/issues/2766) Message in Stack Overflow error dialog isn’t wrapping or using the HTML formatting of the message. Fixed.
- [#2758](https://github.com/RPTools/maptool/issues/2758) Players able to “flip” unowned tokens. Fixed.
- [#2747](https://github.com/RPTools/maptool/issues/2747) “LaunchInstructions” was shown as program name on macOS. Fixed.
- [#2729](https://github.com/RPTools/maptool/issues/2729) MBL geometry is recalculated and checked too often when pathfinding leading to poor user experience. Big improvement.
- [#2663](https://github.com/RPTools/maptool/issues/2663) Assets sometimes fail to load from cache. Fixed.
- [#2658](https://github.com/RPTools/maptool/issues/2658) Current Time property for Audio Streams failing to update. Fixed.
- [#2486](https://github.com/RPTools/maptool/issues/2486) Map Export would overwrite existing file without warning. Fixed.
- [#2355](https://github.com/RPTools/maptool/issues/2355) MapTool hangs for a while when tokens cross certain VBL boundaries. Fixed.

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
