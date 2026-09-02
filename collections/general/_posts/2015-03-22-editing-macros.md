---
layout: post
title: Editing Macros
tags: community macros mtscript maptool
author: bard
slug: editing-macros
---

MTScript is a custom language for writing MapTool macros which grew out of MapTool's chat functionality. It began simply
enough as a way to roll dice. It expanded over time to the point where users create custom gaming frameworks and
convenience functions in MapTool to be used by GMs and Players alike. To get a hint of what mtScript can do, check out
the [User Creations][user-creations] topic in the MapTool forum. To see MTScript taken to the Nth degree see
[Wolph42's Bag of Tricks][bag-of-tricks] which encapsulates extreme MTScripting. You'll find support for complete RPG
frameworks for a huge number of games systems in [Campaign Frameworks][campaign-frameworks].

The MapTool macro editor is a little lacking in functionality so the community stepped up to create tools for editing.
It's one of the strengths of this group, the desire to contribute when and where they can. There are at least two
community gems out there that allow for easy editing and syntax checking for Macros.

<a href="https://www.vim.org/download.php" target="_blank" rel="noopener noreferrer"></a><a href="https://www.vim.org/download.php" target="_blank" rel="noopener noreferrer">![vim_header](/assets/img/vimlogo.svg){: .float .float--left .float--5 decoding="async" }</a>The first is Craig's GVIM configuration. You can find download and installation instructructions at this [forum link]({{ site.data.links.forums | escape }}/viewtopic.php?f=46&amp;t=5764). GVIM is the descendant of the venerable VI editor. People either love or hate VI. It uses one or two character commands and is very powerful. You almost never need to touch the mouse once you get use to it. To get over VI's learning curve we suggest reading [vimbook-OPL.pdf](https://www.truth.sk/vim/vimbook-OPL.pdf). Azhrei also produced a [quick reference sheet](https://www.eeconsulting.net/business/vi.pdf). GVIM runs on Windows, Mac, Linux.

<a href="https://notepad-plus-plus.org/" target="_blank" rel="noopener noreferrer">![notepad++](/assets/img/notepad++-logo.svg){: .float .float--right .float--5 decoding="async" }</a> The second external editor that can be used is [Notepad++](https://notepad-plus-plus.org/) with Aliasmask's configuration. Notepad++ is more user friendly and is closer to the editors most users know. However, it only runs on Windows operating systems or a system in Windows emulation mode, such as Linux Wine.

<a href="{{ site.data.links.forums | escape }}/viewtopic.php?f=20&amp;t=25531" target="_blank" rel="noopener noreferrer">![RPedit Logo](/assets/img/RPedit-Logo.webp){: .float .float--left .float--5 decoding="async" }</a> Regardless of which you use, the RPEdit library token is a great utility that allows you to extract all the macros from a token for easy copying into one of the above tools. The tool is actually written in MTScript and allows for macro configuration and button display properties.

![rpedit](/assets/img/rpedit.webp){: .post-example loading="lazy" decoding="async" }

You can find the files and full instructions on this [forum link]({{ site.data.links.forums | escape }}/viewtopic.php?f=20&amp;t=25531). Besides editing, you can also put your macros under source code control by saving them out to github or sourceforge.

If you decide to take the plunge into Macro writing, visit the [Introduction to Macro Writing]({{ site.data.links.wiki }}/index.php/Introduction_to_Macro_Writing) on the RPTools Documentation Wiki. If you get stuck head over to the [MapTool-&gt;Macros]({{ site.data.links.forums }}/viewforum.php?f=20) topic in the RPTools forum for help.


{% include md-links.md %}

[user-creations]: {{ site.data.links.forums | escpape }}/viewforum.php?f=8
[bag-of-tricks]: {{ site.data.links.forums | escpape }}/viewtopic.php?f=46&amp;t=16066
[campaign-frameworks]: {{ site.data.links.forums | escpape }}/viewforum.php?f=33
