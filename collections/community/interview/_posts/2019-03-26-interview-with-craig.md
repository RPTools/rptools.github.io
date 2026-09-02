---
layout: post
title: "Blast from the Past: Interview with Craig"
tags: blast-from-the-past interview
author: bard
image: /assets/img/post-icons/Craig.webp
slug: blast-from-the-past-interview-with-craig
---

Craig ‘no avatar’ Wisniewski is a current member of the RPTools staff and its lead developer. Craig writes most of the design documents we use behind the scenes
to determine how features will work within MapTool and is active in release automation and release management. He’s one of the primary review gates for new code
coming into the tools.

This interview is from February of 2011 and took place in the initial phases of MapTool 1.4 development.

***

We continue [Maptool Month](https://rptroll.blogspot.com/search/label/Maptool) interviews with the father of [MapTool](/) frameworks, Craig
Wisniewski. Frameworks allow for the creation of custom settings, screens, and macros that automate game mechanics. I’ve created one such framework but there
are [many, many others]({{ site.data.links.forums | escape }}/viewforum.php?f=33).

Craig added the [HTML frame and dialog functions]({{ site.data.links.wiki | escape }}/index.php/frame_%28roll_option%29) allowing for the creation of custom windows using
[HTML](https://en.wikipedia.org/wiki/HTML)/[CSS](https://en.wikipedia.org/wiki/CSS) with links and buttons that run [MTScript]({{ site.data.links.wiki | escape }}/index.php/Category:Macro)
macros. He also added the ability to update Token properties from within macros to automate game mechanics like hit point reduction due to a successful attack.
Other biggies include trusted macros created by the GM and LIB: tokens which allow for the distribution of frameworks and other MTScript utilities. Basically,
without Craig, I doubt we would have the frameworks you see in MapTool today.

Craig refuses to adopt a pseudonym or use an avatar. Some feel this reflects the practical manner he brings to MapTool development. It could be he never
intended to stick around long enough to need a nickname or stylized image. Still, others believe he just likes it when people ask why he doesn’t have them.
Whatever the case, we present the very practical interview of Craig “No Avatar” Wisniewski.

### When did you start gaming and what were the games you played in the early days?

I started gaming with friends back in the 80s, although we played a lot of different things we ended up playing D&D (and later AD&D) more than anything else.

### What games are you playing now?

Nothing for about 8 months now, it seems work commitments managed a highly coordinated attack against our group. Before that, we were mostly playing
[Call of Cthulhu](https://www.drivethrurpg.com/en/product/260810/call-of-cthulhu-starter-set).

### What’s your fondest gaming memory?

That’s hard to say, or maybe it’s just as I am getting older all my memories are starting to blur together. I have many fond gaming memories, but they really all boil down to the same thing and that is having a great time with great friends, I don’t think I would be able to single out a particular one to label as the fondest.

### How did you find MapTool?

The gaming group I was playing with was using [OpenRPG](https://www.rpgobjects.com/index.php?c=orpg) and we were relatively happy with it until there were a
series of updates that caused problems for those in the group using Macs. We continued limping along with OpenRPG because we couldn’t find anything that really
fit what we wanted and we really didn’t want to pay for something that was “not quite what we wanted” especially at some of the prices around at that time.
After one particularly bad night of OpenRPG instability we decided that we really needed to move to something else, that’s when we took a closer look at MapTool
— we had previously been fooled by the name and overlooked it a few times because we wanted something more than just a tool to make maps (oops!)…

### Do you use MapTool in face-to-face or remote games?

I have only used MapTool for remote games as all the people I game with live too far from each other to make face to face gaming practical.

### What about the product made it your VTT of choice?

Being cross-platform, Macs were one of the major reasons we first tried MapTool, you also can’t argue with the price. Once we started using MapTool it was
pretty easy to get hooked on the vision and lighting thing.

### What current feature of MapTool do you enjoy the most?

[Vision and Lighting]({{ site.data.links.wiki | escape }}/index.php/Introduction_to_Lights_and_Sights), it just makes things so much easier not having to expose parts of the
map manually when running the game.

### What in 1.3 do you find the most irritating?

The dialogs for setting up vision and lighting. Oh and the horrible regular expression that causes the stack problems with macros.

### What about the project convinced you to contribute to the project initially?

Like most people who contribute to an open source project, I wanted to make a small change to address something I needed. In this case, it was to make life a
little bit easier by adding two small changes, a slash command that could set/reset states on a token, and a slash command that could update token properties.

### What’s your primary role on the MapTool project?

With 1.4 starting its been design and coding. Oh, I also have a part-time role assuring people that the dice roller is not broken and rolling low all the time.
:)

### What areas of the application do you find yourself working on most?

In 1.3 mostly the macro stuff. I also did a lot of work quite a while ago on moving strings to an external file for translations although that is far from done.
For 1.4 I think it will mostly be the map/light/vision stuff and probably the macros again.

### What’s it like now that you’re one of the three primary directors of the project?

Apart from having to make a few decisions about what we think we can do for MapTool 1.4, and a few decisions about what we don’t want to do in MapTool 1.4 not
much is different at the moment, I am sure that will change once we start releasing alpha builds of 1.4.

MapTool brings old gaming groups back together again and brings in new folks that they would have never met otherwise. Does that awareness help motivate you?
Sure does. Without programs like MapTool, it would not be possible for the group I game with to play at all and I am sure there are many people in the same
situation. Hopefully by improving MapTool and making it easier to use we can introduce it to a lot more groups that would otherwise drift apart. It’s also a
nice change to write code that people want to use rather than have to use as part of their job.

### Thanks to Craig for taking the time to answer our questions. Up next, a combined interview with Frank, Bill, and Craig about MapTool 1.4.
