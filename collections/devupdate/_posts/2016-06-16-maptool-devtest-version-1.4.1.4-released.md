---
layout: post
title: MapTool Dev/Test Version 1.4.1.4 Released
tags: devtest maptool
author: bard
image: /assets/img/DevTestBuild.webp
slug: maptool-devtest-version-1-4-1-4-released
excerpt_separator: "<!--more-->"
---

![dev build icon](/assets/img/DevTestBuild.webp){: .float .float--right .float--15 }

The RPTools craftsmen produced a new Dev/Test MapTool version for you to try. Adventurous GMs should consider trying it
in one of your games but be very sure to save a backup copy of your campaign first. There will likely be one more
Dev/Test release before we increment to 1.4.2.0 so please take some time to try this version so we can catch as many
bugs as possible before we release it into the gaming wilds.

<!--more-->

New Features

- Chinese translation updates. (lessercn@…)
- Added ability to pass arguments to js.eval(“expression”, [arg, … argN]). Arguments are available in the JavaScript
  expression in an array called args[]. (Craig).
- New menu option under Export -> Campaign As… (Jamz)
- New Campaign Export dialog to select a previous version of MapTool to export as. Notes on what is stripped during
  exports are shown in the dialog and stored in the il8n language files. (Jamz)
- Added a slider control on Asset Panel to adjust thumbnail sizes (clear your asset cache for best results).
  Meta+Mousewheel also works (Jamz)

Bug Fixes

- Typo fixed in English translations (Azhrei)
- Fix for MacOS X Dock and Menu String (Jamz)
- Bug Fix to Support Multiple Monitors.
- Fix for issue RPTools/maptool#85 (when you switch between the token selection tool and another tool (e.g. VBL) then
  the token tool always snaps back to the TOKEN layer) (Jamz)
- Fix for bug in Map Explorer where if a token is double clicked to select and layer switches from Token to
  Hidden\|Object\|Background layer, the token was not selected. (Jamz)
- Fix for bug in Map Explorer where if a token is double clicked to select and layer switches from between any of the
  Hidden\|Object\|Background layers, the Layer dialog list selection was not updated. (Jamz)

Build/Code Related

- Fix eclipseClasspath in Gradle build so that it creates the entry in the classpath for Nashorn. (Jamz)
- DrawableGroupConverter class is unused at this time but added as an example on how to do custom XStream conversions
  for a class.
- Updated X-Stream to version 1.4.9 to match Rplib

You can download the latest Dev/Test build from [HERE][test-builds]. Please provide feedback on the
[1.4.1.x Dev/Test Announcements][announcement] page.


{% include md-links.md %}

[test-builds]: https://maptool.craigs-stuff.net/test-builds/
[announcement]: {{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=26693
