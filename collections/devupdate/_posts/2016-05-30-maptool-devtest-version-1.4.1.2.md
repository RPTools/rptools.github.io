---
layout: post
title: MapTool Dev/Test Version 1.4.1.2
tags: announcements devtest maptool
author: bard
icon: /assets/img/DevTestBuild.webp
slug: maptool-devtest-version-1-4-1-2
excerpt_separator: "<!--more-->"
---

<img class="float-right" src="/assets/img/Apocalipstix03.webp" alt="BlowedUp">

Warning: This Build Could Blow Up!

<!--more-->

Now that’s out of the way, going forward the numbering of builds will indicate the type of build, with

- `1.4.<even number>.x` being a stable build that will mostly be about bug fixes and maybe some small changes which don’t change campaign format or break compatibility, and
- `1.4.<odd number>.x` being development builds, which may be unstable and probably shouldn’t be used for your usual gaming unless you have adventurous players (not roleplaying adventures…). We need our community to test these builds so the Evens will be solid, we just don’t recommend using them for your weekly game. Also always make sure to save a backup copy of your campaign.

So, with that said, here are the new features.

One important new change is the versions that contain a Java VM with the download so a separate download/install of Java is no longer required if you do not want to do this (downloads without the packaged Java Virtual Machine will also still be available). If you download one of these files when you first run MapTool it will need to go through an installation process, this could take anywhere between 2 and 10 minutes depending on the speed of your computer, this only happens the first time you run it (for each new version). If the install takes an extraordinarily long amount of time to run please let us know your computer/os/amount of memory etc. The two .zip files are the non-JVM distributions, all other files contain the JVM just be sure to pick the correct one for your system.

In the future, we’ll update the RPTools Launch page to contain functionality to download the appropriate version for your system. We hope to have that worked out by the 1.4.2 general release build.

The dev builds can currently be found at http://maptool.craigs-stuff.net/test-builds/ (they will move to main MapTool site at some point). This version requires java 1.8, although if you download one of the downloads that contain the VM/installer this is not something you will have to worry about.

### New Features

- JavaScript API (first tentative steps) (Craig)
- Draw explorer additions (Jagged)
  - set and get properties and merge drawing functions
- Light/Fog of War(FoW)/Vision Blocking Layer (VBL) (Jamz)
  - New checkRegion method to do a more relaxed bounds check, for use with VBL Tokens.
  - VBL Tokens now only show when token can “see” them. Currently, 2/9ths of a token need to be seen, that is 2 out of 9 “regions”.
  - Multi-threaded one of the heavier chunks of code that processes Light. Slight improvements in some case, substantial improvements in others. YMMV
  - Beginning work on showing VisionBlocking Token over FoW. More enhancements to come.
  - New lighting option, “lumens” allows FoW to be concealed vs revealed, ie “Magical Darkness” effect.
  - Token FoW path logic now multi-threaded to improve performance
  - drawPolygonVBL Macro bug fixed if x OR y where the same as last coordinate it would not draw.
  - FoW changes; new buttons drive what FoW is displayed [GM, All, PC, NPC] and is driven by ownership/GM permissions. Player clients can now see FoW for NPC’s if they own them. GM’s can now see FoW based on NPC, PC or “adversaries”, ie tokens with no ownership. This gives GM’s a better perspective on what each token can “see”.
  - NPC’s can now reveal FoW on movement (is Server option is checked). This allows player clients who “own” NPC tokens to freely move them, exposing FoW along the way.
  - New Macro function, exposeAllOwnedArea; exposes FoW for any tokens owned by the user
  - New Macro function, restoreFoW; resets all FoW for the map, duplicates the FoW reset when you import a new map sans dialog
  - New Map Menu, Restore Fog-of-War; duplicates the FoW reset when you import a new map with dialog prompt.
  - New Macro function, toggleFoW, duplicates menu function of the same
  - New Macro function, exposeFogAtWaypoints, duplicates menu function of the same
  - Map Menu option, FoW: Expose only at waypoints; Exposes FoW only at waypoints vs every cell along a tokens path
  - Lights have a new option, lumens (to be documented)
  - FoW has several changes to what a client or GM view can see is now based on “ownership” vs NPC/PC. (to be documented)
  - FoW “view” buttons control which tokens (via ownership) are used to show the current FoW. ie a GM can now see what his antagonists see, what the PC’s see, what all NPC’s can see, or what everyone can see. PC’s get the same options by restricted again by ownership.
- New Deployment Option: jWrapper (Jamz)
  - Updated MT Launcher to play nicely with jWrapper (mt.cfg moved to users .maptool/config directory to persist across upgrades)
  - New Icon created for Launcher
  - New Splash screen created for MapTool (also used for jWrapper installing splash)
  - SplashScreen class updated to support transparent background images and new coordinates for version #
  - New command line options for MapTool, debug, version, monitor, fullscreen, width, height, xpos, ypos. use -w=500 or -width=500 for instance to set MT frame width to 500. -fullscreen has no param.

Other (Jamz)
- Tokens now save a “large” thumbnail for use with larger preview thumbs. A small thumbnail is still saved for backward compatibility with older MT versions.
- Token “Path” improvements, fixes issue when dragging nonSnapToGrid with snapToGrid tokens together.
- Token popup menu, Save As… now works on multiple tokens. Options added to default to token name or GM name as well as skip/show all prompts during save.
- Token popup menu, Block Vision menu option creates VBL under token based on non-transparent pixels. Further refinements to be added…
- Statusbar; Asset Cache Status shows disk spaced used by Assets in users .maptool folder. Double click on status flushes disk cache.
- Statusbar; Image Thumbs Cache Status shows disk spaced used by Image thumbnails in users .maptool folder. Double click on status flushes disk cache.
- Statusbar; User home free space Status shows free disk space for users home folder (where .maptool resides).
- Asset Tree Right-Click menu option “Rescan…” to rescan a directory (as MT caches folder contents after they are read)
- Thumbnail size increased to 500×500. This gives a much better preview of larger images (like maps) in the asset preview window now that they can be scaled with control+mousewheel.
- Path fixes! These fixes come from Lee way back to 1.3b89 patches. It fixes snapToGrid and nonSnapToGrid tokens are moved together. (Lee/Jamz)
- Save As Compatible lays the ground work to strip various fields/classes “on campaign save” so it’s compatible with an older version.

### Bug Fixes

- MapTool Launcher Bug Fixes (Jamz)
  - Updated gradle build to reflect new launch.properties config to replace mt.cfg
  - launch.properties is now updated and stored as a resource in the JAR to be used as a default for new installations and to update JAR/JRE path values on new installations
  - New property MAPTOOL_VERSION added to track launch.properties and update properly when new MapTool version detected
  - Fixed Logging Bug, logging selections now persist properly across multiple launches
  - Default configuration (launch.properties) should properly install itself across all OS types
  - If jWrapper JRE is used (default unless changed) and a new version is detected, the config property will be updated
  - copyXmlFiles method commented out, default logging xml files stored in .maptool/logging directory
  - launch.properties in the same directory as the JAR will be used instead of what is stored in .maptool/config directory to allow multiple versions to be installed/ran manually
  - Updated template to remove mt.cfg references
- Other
  - Fix for slow token deletion. <https://github.com/RPTools/maptool/issues/47> (Craig)
  - Bug Fix: autoResize feature (Right-Click drag) <https://github.com/RPTools/maptool/issues/49> (Jamz)
  - Maptool installing spash updated to match MT splash (added shadow under gear logo) (Jamz)
  - FoW bug fixed where calls to expose FoW were not passed to clients (Jamz)
  - Bug fix, statsheet will no longer show (and thus get in the way) when a token is being dragged. It will only show “on hover” when no mouse buttons are pressed. (Jamz)
  - Asset Tree duplicate listener removed which was causing asset tree contents to be refreshed twice. (Jamz)
  - AutoResize dialog bug fixed for vertical anchor text. (Jamz)
  - Fix for incorrect dock name and menu name in Mac OS X (Jamz)

### Build/refactoring/”plumbing” related (Jamz)

- Update gradle.properties.sample
- Spotless prep for license application across java source.
- Several new gradle tasks created to support fat jar creation and jWrapper build
- Sample gradle.properties.sample file showing properties needed to run jWrapper build
- Token class implements Cloneable now
- Updated Spotless to 1.3.3 which includes 37 formatter fixes from Eclipse.
- A couple of “formatting” changes to classes due to Spotless update (only a few classes, very minor)

### JavaScript Additions

It is now possible to evaluate JavaScript with the MTScript macro js.eval(), .e.g {js.eval(‘return 1+1’)}. The JavaScript is wrapped up to stop scripts interfering with each other accidentally so the return in the above is important. I know its not full JavaScript scripting at the moment, but other things have to happen before we can get the adding of complete scripts working. So its a case of one step at a time, and this allows us to create and test the API for full scripting (as well as get feedback) in preparation for when we can do the rest. The js.eval() function will remain even when there is full JavaScript scripting so it’s safe to use it in MTScript macros going forward.

There are two global objects available to your scripts.
- MapTool, which holds objects/functions for interacting with (you guessed it MapTool)
- MTScript, which holds objects/functions for interacting with MapTool Script/macro language.

As I said before there is not a whole lot yet just the behind the scenes stuff and some functionality to test different things (but you can still write some of your complex code as java script if you want as you can easily pass information back and forward between MTScript and JavaScript) Strings, Numbers, JSON objects/arrays should all be converted to the correct representation when passing between MTScript and JavaScript

#### Broadcast

```
[js.eval(“MapTool.chat.broadcast(‘This is a test’)”)]
[js.eval(“MapTool.chat.broadcastTo([‘gm’],’This is a test too’)”)]
[js.eval(“MapTool.chat.broadcastToGM(‘This is a test to GMs’)”)]
```

#### ClientInfo

```
[js.eval(‘return MapTool.clientInfo.faceEdge()’)]
[js.eval(‘return MapTool.clientInfo.faceVertex()’)]
[js.eval(‘return MapTool.clientInfo.portraitSize()’)]
[js.eval(‘return MapTool.clientInfo.showStatSheet()’)]
[js.eval(‘return MapTool.clientInfo.version()’)]
[js.eval(‘return MapTool.clientInfo.fullScreen()’)]
[js.eval(‘return MapTool.clientInfo.timeInMs()’)]
[js.eval(‘return MapTool.clientInfo.timeDate()’)]
[js.eval(‘return MapTool.clientInfo.libraryTokens()’)]
[js.eval(‘return MapTool.clientInfo.userDefinedFunctions()’)]
```

#### Executing a MTScript macro and return result to JavaScript

```
[js.eval(“MTScript.evalMacro(‘{a = a + 2d6}’)”)]
[js.eval(“MTScript.execMacro(‘{a = 20d6}’)”)]
```

#### Reading/Setting MTScript macro variables

```
[js.eval(“return MTScript.getVariable(‘a’) +12”)]
[a = js.eval(“return { val1: ‘a’, val2: ‘b’ }”)][json.get(a, ‘val2’)]
[a = js.eval(“return [111,2,333,44]”)] [json.get(a,2)]
[js.eval(“MTScript.setVariable(‘a’, 12)”)][a]
```

#### Retrieve Tokens on a map and display thier name

(Unfortionately you can not do more than this yet)
```
[js.eval(“return MapTool.tokens.getMapTokens()”)]
[js.eval(“return MapTool.tokens.getMapTokens()[0].getName()”)]
[js.eval(“return MapTool.tokens.getMapTokens()[1].getName()”)]
```

#### Abort/Raise Error/Assert MTScript style

```
[js.eval(“MTScript.raiseError(‘What an Error!?!?’)”)]
[js.eval(“MTScript.abort()”)]
[js.eval(“MTScript.mtsAssert(true, ‘nothing to see here’)”)]
[js.eval(“MTScript.mtsAssert(false, ‘something to see here’)”)]
```
