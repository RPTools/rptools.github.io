---
layout: post
title: "New Resource Library File Type Support (POR and PDF)"
tags: feature hero-lab maps pdf tokens maptool
author: bard
icon: /assets/img/PORSupport.webp
slug: new-resource-library-file-type-support-por-and-pdf
---

MapTool 1.5 and greater now support PDFs and Hero Lab POR files as part of the Resource Library. You can either place the files in an existing file folder in the LIbrary or add a new folder via the File->Add Resource Library menu.

<section markdown="1">
### PDF Support

<img class="float float--left float--30" src="/assets/img/PDF-Support.webp" alt="PDF-Support">

The Portable Document Format (PDF) is the filetype of choice for most gaming materials. The reason is simple – the file format that provides an electronic image of text or text and graphics that looks like a printed document and can be viewed, printed, and electronically transmitted.

When you select a PDF in the Resource Library, MapTool extracts all the images from the file and displays them as it would a file folder. The process can take a few seconds or a few minutes based on the size of the PDF in question.

If you’re designing a map you can start MapTool with the high memory to speed along the process. This was done so as not to explode the storage required for the cached image files MapTool uses. Please note that the images are cached for only the current session and will be regenerated once you stop and restart MapTool.
</section>

<section markdown="1">
### Hero Lab Support

<img class="float float--left float--30" src="/assets/img/PORSupport.webp" alt="PORSupport">

The Hero Lab™ software by [Lone Wolf Designs](https://www.wolflair.com/) is a character creation and advancement tool used for a number of RPG systems. Hero Lab also acts as an electronic character sheet, keeping track of your health, abilities, and more during the game. Outside the adventure, Hero Lab lets you use those hard-fought-for XPs to advance your character.

Hero Lab has the ability to export character information to a POR file which can be used by MapTool to generate Tokens. Like the PDFs, it may take a bit to extract the data once you select a POR file and the extract only hangs around for your current MapTool session.

Once extracted, you simply drag the image onto a map. Elements of the POR entry prepopulates certain token properties. Additional information is shown on the Edit Token window on the Hero Lab tab.

<img class="post-example" src="/assets/img/HeroLabsToken.webp" alt="HeroLabsToken">

At this state, the Hero Lab stats can be accessed via MTScript to populate the Token Stats. Jamz’s Pathfinder framework has this in place if you want to add this functionality to your campaign.

You can also use the Hero Lab images for the token image, portrait, and handout.

<img class="post-example" src="/assets/img/HeroLabsTokenImages.webp" alt="HeroLabsTokenImages">
</section>

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
