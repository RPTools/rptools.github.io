---
layout: post
title: "MapTool Dev/Test Version 1.4.1.6 Released"
tags: devtest maptool
author: bard
icon: /assets/img/LauncherWindow-1.4.1.6.webp
slug: maptool-devtest-version-1-4-1-6-released
excerpt_separator: "<!--more-->"
---

<img class="post-example" src="/assets/img/LauncherWindow-1.4.1.6.webp" alt="LauncherWindow">

The last (hopefully) Dev/Test version in the 1.4.1 series is now available for download from <http://maptool.craigs-stuff.net/test-builds/>. The 1.4.1 series saw a large number of major changes which will now be rolled into the forthcoming 1.4.2 production release. We’ll only release a 1.4.1.7 if more testing is required.

<!--more-->

As with all Dev/Test builds, be sure to backup your campaign before using this for a game. We do ask that you run at least a trail game with this version if you can. That way it will hit the streets as well tested as possible.

Be sure to drop by the forums to let the developers and testers know how much you appreciated their efforts. MapTool is free, always will be, and is developed by volunteer gamers who want you to have a product that meets your gaming needs.

Please see the voluminous retrospective below for all that went into 1.4.1

### Build 1.4.1.6
New Features

<img class="float-right" src="/assets/img/NewTokenVBL.webp" alt="NewTokenVBL" width="260">

- New tab on Edit Token Dialog to show Token VBL which allows: (Jamz)
  - Auto Generation of VBL based on non-transparent/translucent image pixels
  - Clearing of Token VBL
  - Toggle for “Always Show” which will show the token over FoW when another token can see x of its 9 regions, with x = Visibility Tolerance setting on a token.
- Normal VBL layer shows Token VBL as translucent yellow under normal VBL to assist in placement (Jamz)
- Added “Always Visible” menu option to Token/Stamp pop-up menu (right clicking on token) which replaces “Block Vision” from previous release (Jamz)
- Campaign export updated with new Token class fields for omission (Jamz)
- New Macro functions to support new token VBL options: (Jamz)
  - setAlwaysVisible() & getAlwaysVisible, set/get Always Visible option on tokens
  - getTokenVBL() & setTokenVBL(), to set/get VBL stored on tokens
  - transferVBL() directly transfersVBL from token to normal VBL if true, otherwise it transfers from VBL to token
- Fix for wrong jar file version being specified in launcher properties (Craig)
- Fix for the extremely slow mass deletion of items on the object, hidden, or background layers (Craig)

Bug Fixes

- Squashed a bug that prevented getExposedTokens() macro from returning proper tokens when a Figure token or VBL Token was on the map. (Jamz)
- Squashed a bug that prevented getExposedTokens() macro from returning proper tokens if No Vision was selected at the same time FoW was turned on. (Jamz)
- Minor cleanup of a couple classes for imports and console debug statements (Jamz)

### Build 1.4.1.5
Fixes for build issues in 1.4.1.4

### Build 1.4.1.4
New Features

- Chinese translation updates. (lessercn@…)
- Added ability to pass arguments to js.eval(“expression”, [arg, … argN]). Arguments are available in the JavaScript expression in an array called args[]. (Craig).
- New menu option under Export -> Campaign As…
- New Campaign Export dialog to select a previous version of MapTool to export as. Notes on what is stripped during exports are shown in the dialog and stored in the il8n language files.

Bug Fixes

- Typo fixed in English translations (Azhrei)
- Fix for MacOS X Dock and Menu String (Jamz)
- Bug Fix to Support Multiple Monitors.

Build/Code Related

- Fix eclipseClasspath in Gradle build so that it creates an entry in the classpath for Nashorn. (Jamz)
- DrawableGroupConverter class is unused at this time but added as an example on how to do custom XStream conversions for a class.
- Updated X-Stream to version 1.4.9 to match Rplib

### Build 1.4.1.3

<img class="float-right" src="/assets/img/draw-explorer.webp" alt="Draw Explorer" width="300">

New Features

- JavaScript API (first tentative steps) (Craig)
- Draw explorer additions (Jagged)
  - set and get properties and merge drawing functions
- Light/FoW/VBL (Jamz)
  - New checkRegion method relaxed the bounds check, for use with VBL Tokens.
  - VBL Tokens now only show when token can “see” them. This is currently 2/9ths of a token need to be seen, that is 2 out of 9 “regions”.
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
  - Lights has a new option, lumens (to be documented)
  - FoW has several changes to what a client or GM view can see is now based on “ownership” vs NPC/PC. (to be documented)
  - FoW “view” buttons control which tokens (via ownership) are used to show the current FoW. ie a GM can now see what his antagonists see, what the PC’s see, what all NPC’s can see, or what everyone can see. PC’s get the same options by restricted again by ownership.
  - Updated MT Launcher to play nicely with jWrapper (mt.cfg moved to users .maptool/config directory to persist across upgrades)
  - New Icon created for Launcher
  - New Splash screen created for MapTool (also used for jWrapper installing splash)
  - SplashScreen class updated to support transparent background images and new coords for version #
  - New command line options for MapTool, debug, version, monitor, fullscreen, width, height, xpos, ypos. use -w=500 or -width=500 for instance to set MT frame width to 500. -fullscreen has no param.New Deployment Option: jWrapper (Jamz)

<img class="float-right" src="/assets/img/ZoomImageExplorer.webp" alt="ZoomImageExplorer" width="130">
- Other (Jamz)
  - Tokens now save a “large” thumbnail for use with larger preview thumbs. This saves a small thumbnail for backward compatibility with older MT versions.
  - Token “Path” improvements, fixes issue when dragging nonSnapToGrid with snapToGrid tokens together.
  - Token popup menu, Save As… now works on multiple tokens. Options added to default to token name or GM name as well as skip/show all prompts during the token save.
  - Token popup menu, Block Vision menu option creates VBL under token based on non-transparent pixels. Further refinements to be added…
  - Statusbar; Asset Cache Status shows disk spaced used by Assets in users .maptool folder. Double click on status flushes disk cache.
  - Statusbar; Image Thumbs Cache Status shows disk spaced used by Image thumbnails in users .maptool folder. Double click on status flushes disk cache.
  - Statusbar; User home free space Status shows free disk space for users home folder (where .maptool resides).
  - Asset Tree Right-Click menu option “Rescan…” to rescan a directory (as MT caches folder contents after they are read)
  - Thumbnail size increased to 500×500. This gives a much better preview of larger images (like maps) in the asset preview window now that they can be scaled with control+mousewheel.
  - Path fixes! These fixes come from Lee way back to 1.3b89 patches. It fixes snapToGrid and nonSnapToGrid tokens are moved together. (Lee/Jamz)
  - Save As Compatible lays the groundwork to strip various fields/classes “on campaign save” so it’s compatible with an older version.


Bug Fixes

- MapTool Launcher Bug Fixes (Jamz)
  - Updated the Gradle build to reflect new launch.properties config to replace mt.cfg
  - launch.properties is now updated and stored as a resource in the JAR to be used as a default for new installations and to update JAR/JRE path values on new installations
  - New property MAPTOOL_VERSION added to track launch.properties and update properly when new MapTool version detected
  - Fixed Logging Bug, logging selections now persist properly across multiple launches
  - Default configuration (launch.properties) should properly install itself across all OS types
  - If jWrapper JRE is used (default unless changed) and a new version is detected, the config property will be updated
  - copyXmlFiles method commented out, default logging XML files stored in .maptool/logging directory
  - launch.properties in the same directory as the JAR will be used instead of what is stored in .maptool/config directory to allow multiple versions to be installed/ran manually
  - Updated template to remove mt.cfg references
- Other
  - Fix for slow token deletion. <https://github.com/RPTools/maptool/issues/47> (Craig)
  - Bug Fix: autoResize feature (Right-Click drag) <https://github.com/RPTools/maptool/issues/49> (Jamz)
  - Maptool installing splash updated to match MT splash (added shadow under gear logo) (Jamz)
  - FoW bug fixed where calls to expose FoW were not passed to clients (Jamz)
  - Bug fix, stat sheet will no longer show (and thus get in the way) when a token is being dragged. It will only show “on hover” when no mouse buttons are pressed. (Jamz)
  - Asset Tree duplicate listener removed which was causing asset tree contents to be refreshed twice. (Jamz)
  - AutoResize dialog bug fixed for vertical anchor text. (Jamz)
  - Fix for incorrect dock name and menu name in Mac OS X (Jamz)

Build/refactoring/”plumbing” related (Jamz)

- Update Gradle.properties.sample
- Spotless prep for license application across java source.
- Several new Gradle tasks created to support fat jar creation and jWrapper build
- SampleGradle.properties.sample file showing properties needed to run a jWrapper build
- Token class implements Cloneable now
- Updated Spotless to 1.3.3 which includes 37 formatter fixes from Eclipse.
- A couple of “formatting” changes to classes due to Spotless update (only a few classes, very minor)

JavaScript Additions

It is now possible to evaluate JavaScript with the MTScript macro js.eval(), .e.g {js.eval(‘return 1+1’)}.
The JavaScript is wrapped up to stop scripts interfering with each other accidently so the return in the above is important. I know it’s not full JavaScript scripting at the moment, but other things have to happen before we can get the adding of complete scripts working. So it’s a case of one step at a time, and this allows us to create and the test the API for full scripting (as well as get feedback) in preparation for when we can do the rest. The js.eval() function will remain even when there is full JavaScript scripting so it’s safe to use it in MTScript macros going forward.

There are two global objects available to your scripts:
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
