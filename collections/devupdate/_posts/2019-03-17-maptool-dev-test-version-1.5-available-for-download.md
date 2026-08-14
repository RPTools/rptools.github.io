---
layout: post
title: "MapTool Dev/Test Version 1.5 Available for Download"
tags: announcements maptool release
author: bard
icon: /assets/img/DevTestBuild.webp
slug: maptool-dev-test-version-1-5-available-for-download
---

The RPTools team is proud to announce the release of MapTool 1.5 which includes a number of new features to make your in-game RPG experience better from campaign design to game night. The [Github changelog](https://github.com/RPTools/maptool/blob/master/CHANGE_LOG.md) contains a complete list of changes.

This release merges the JamzTheMan’s [Nerps](https://maptool.nerps.net/) branch into the main RPTools branch bringing with it [Hero Lab and PDF integration](/2019/03/new-resource-library-file-type-support-por-and-pdf/). Also included is a new [Macro editor](/2019/03/new-macro-editor/) with syntax highlighting and code completion, [terrain modifiers](/2019/03/pathfinding-vbl-and-terrain/), [Draw Explorer](/2019/03/draw-explorer-vision-blocking-layer/) enhancements, a new Whisper function from the connections window, and many, many more.

A major change from MapTool 1.4 is the removal of the MapTool Launcher and the inclusion of a [packaged Java](/2019/03/maptool-1-5-comes-bundled-with-java/) with the release. This means you’ll no longer need to keep your system’s java maintained in order to run MapTool. This should be a great enhancement for those who ‘just want things to work.’

Another major change in the way we develop and deploy MapTool is the creation of a continuous integration (CI) system. Enabling CI means it will be easier to build and deploy MapTool so, in theory, we’ll have shortened development/release cycles so functionality donated by our [contributors](/contributors/) will reach you sooner. The new CI for MapTool also means it will be easier to accept patches from new contributors.

RPTools has also implemented a new [Code of Conduct](/contributor-covenant-code-of-conduct/) for the community. While we’ve always been a polite crowd, the CoC will give us something to point to when discussions become intense.

We’ll discuss the new features in the coming days on this site until we make it through all the new stuff.

Thanks to the following developers for their contributions for this release

- Jamz
- Jagged
- Craig
- Azhrei
- Darinth
- Richard Polzinj
- kayila
- uthin
- naciron

Thanks to those who took time to test the release candidates as well

- Phergus
- Aliasmask
- RPTroll

And we have a new Italian translation thanks to jappyjoker.

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

### Download Now!

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See this [announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
