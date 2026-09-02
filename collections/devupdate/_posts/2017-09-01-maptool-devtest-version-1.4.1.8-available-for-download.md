---
layout: post
title: "MapTool Dev/Test Version 1.4.1.8 Available for Download"
tags: maptool release
author: bard
image: /assets/img/DevTestBuild.webp
slug: maptool-devtest-version-1-4-1-8-available-for-download
---

MapTool 1.4.1.8 is available for download from [rptools.net][maptool-toolbox] by clicking on the Download link in the
top toolbar.

The commit log is available via the GitHub page but many of the changes were related to the build system and automation;
I’ve tried to separate them in the spoiler area, below, but no guarantees. (MapTool 1.4.1.7 was released Jul 2nd, 2016
so commit entries prior to that apply to the previous build.)

Major fixes include the token ID bug (where tokens contain all digits and are converted to numbers) and a problem with
Meta-I not clearing FoW properly (Ctrl-I on Windows and Unix, Cmd-I on macOS).

You can find a full list of changes on the [forums][announcement].


{% include md-links.md %}

[announcement]: {{ site.data.links.forums | escape }}/viewtopic.php?f=86&t=27292
