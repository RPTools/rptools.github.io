---
layout: post
title: "Blast from the Past: Interview with Azhrei"
tags: blast-from-the-past interview
author: bard
image: /assets/img/post-icons/Az.webp
slug: blast-from-the-past-interview-with-azhrei
---

Frank Edwards, aka Azhrei, is one of the RPTools staff who does the hero’s work website upkeep. He’s also heavily involved in the current GitHub automation and past build automation. Perhaps most importantly to the end-user community, he serves as the main review gate/sanity check for new code and concepts entering into RPTools products.

The interview below is from February, 2011 appearing on the Tales from the Savage Troll blog.

***

[MapTool](/toolbox/maptool/) is my weapon of choice for online games. It started as a virtual battle mat but grew into a fully
configurable, game system agnostic, online table top with rich map making capabilities. With MapTool you can create custom properties and data for your
characters and creatures within your gaming ‘verse, roll dice inside an integrated chat system, and track initiative. With the addition of
[MTScript]({{ site.data.links.wiki | escape }}/index.php/Category:Macro) (MapTools scripting language), you can fully automate game mechanics within MapTool to share with your
friends across the Internet.

MapTool is an open source Java project meaning the product is free and its source can be viewed and changed if desired. Since it’s written in Java it works on
Mac, Linux, and Windows operating systems.

The project has dozens of contributors who donate their time to provide code, testing, and content. Last year, longtime project head Trevor Croft stepped down
handing control of the project to a triumvirate of talented technicians while running out the door mumbling something about going to the store for a pack of
cigs. We all thought this odd since Trevor doesn’t smoke. He was last seen in Las Vegas being thrown out of a casino for testing a card counting program
developed for an Android phone.

### When did you start gaming and what were the games you played in the early days?

I started playing 1st Edition D&D in 1978 and quickly moved to AD&D. As far as I knew then D&D was the only game around. :)

### What games are you playing now?

Mostly [Pathfinder](https://www.amazon.com/Pathfinder-Roleplaying-Game-Core-Rulebook/dp/1601251505?ie=UTF8&tag=tale088-20&link_code=btl&camp=213689&creative=392969)
from Paizo. I am running a PF campaign that started as D&D3.5. We then converted to PF Beta and then to PF Final when it came out. I also play in PF Society
pickup games that I find via PFSOC([Pathfinder Society Online Collective](https://groups.google.com/group/pathfinder-society-online-collective)).

### What’s your fondest gaming memory?

Hmmm. I like being the GM as much or more than being a player. I would say I have fond memories from both sides of the table! From the GM perspective, it was
probably killing PCs in Monte Cook’s [Return to the Temple of Elemental Evil](https://www.amazon.com/Elemental-Dungeons-Dragons-Roleplaying-Adventure/dp/0786918438?ie=UTF8&tag=tale088-20&link_code=btl&camp=213689&creative=392969)!
(Man, there was one paladin in that game that just couldn’t go more than a few levels between deaths!) As a player, I enjoy finding creative ways to use spells
or mundane equipment. My favorite would probably be playing an Str-based fighter trying to attack a creature in a tree. The party bard had just been hit and
slumped dead at my feet and I didn’t have an effective weapon, so I picked up the body and threw it at the enemy! Bludgeoning weapons FTW!

![Return to the Template of Elemental Evil cover](https://upload.wikimedia.org/wikipedia/en/d/d2/CookRttToEECover.jpg)

### How did you find MapTool?

Dorpond on the [DMGenie](https://www.dmgenie.com/smf/index.php) forums mentioned it over there in… April 2006, I think. I was registered at the
[RPTools.net](/) forums within a day or two; one of the first 50 or so to register, if I remember correctly.

### Do you use MapTool in face-to-face or remote games?

Yes. ;)

I used it for the [RttToEE](https://www.amazon.com/Elemental-Dungeons-Dragons-Roleplaying-Adventure/dp/0786918438?ie=UTF8&tag=tale088-20&link_code=btl&camp=213689&creative=392969)
campaign I mentioned previously, both on a laptop hooked up to an LCD projector and as a network server amongst the laptops that the players brought with them
to the game. My two ongoing campaigns currently (the [Curse of the Crimson Throne](https://www.amazon.com/Pathfinder-12-Curse-Crimson-Throne/dp/1601251092?ie=UTF8&tag=tale088-20&link_code=btl&camp=213689&creative=392969)
and the [Legacy of Fire](https://www.amazon.com/Pathfinder-Adventure-Path-Legacy-Carrion/dp/1601251599?ie=UTF8&tag=tale088-20&link_code=btl&camp=213689&creative=392969)
APs from Paizo) are 100% online.

### What about the product made it your VTT of choice?

Everything! Flexibility, functionality, portability, extensibility, etc. I typically use Unix at home (mostly Linux and now Mac OS X) and most of my players use
Windows so I needed a VTTthat worked across a variety of platforms. I consider [Java-based tools](https://www.java.com/) as the best way to go for that. Other
options include Python (such as used by [OpenRPG](https://www.openrpg.com/)) but those platforms just don’t have the industry base behind them that Java has.

![Java logo](https://i0.wp.com/liveperson-partners.s3.amazonaws.com/java/auto/java_logo.png?w=1200)

### What current feature of MapTool do you enjoy the most?

It would have to be the [vision blocking]({{ site.data.links.wiki | escape }}/index.php/Introduction_to_Vision_Blocking) ability. The GM can define walls and doors as “solid”
so that player tokens (what MapTool calls “minis” on the map) cannot see through them. Everything else they can see and MapTool automatically exposes the 
fog-of-war. This is a huge benefit from the point of view of running a game as it removes a lot of the guesswork about what a player can or cannot see.

### What in 1.3 do you find the most irritating?

Macro writing. Macro performance. I guess just about anything related to macros. ;-) Don’t get me wrong — the scripting language of MapTool puts it head and
shoulders above the competition (I’ve used some of the other VTTs and none have scripting as complete as MapTool’s). But I think it could be so much better. We
have plans to replace [MTscript]({{ site.data.links.wiki | escape }}/index.php/Category:Macro) (what we call our scripting language) with [JavaScript](https://en.wikipedia.org/wiki/JavaScript)
in the 1.4 development cycle.

### What about the project convinced you to contribute to the project initially?

How rapidly the application progressed and how involved the [community](/community/) was. I could see the potential in the
application and it has come a long way since those early days!

### What’s your primary role on the MapTool project?

Primary role? Probably “project lead”. I do a lot of bug fixing in the code itself, but I also manage the forum (other users are moderators) and I maintain the
main web site as well. As with most free software projects, there are more hats to go around than we have people!

### What areas of the application do you find yourself working on most?

I like the finishing touches. I have a professional design and development background, but I have a harder time staying motivated for long-term projects. So I
like to do tweaks against the final product that jazzes it up or improves the performance. That said, I’ve done some major restructuring of the file load/save
code and it will get a complete rewrite in 1.4. So I’d say that’s probably the biggest single subsystem that I work on regularly.

### What’s it like now that you’re one of the three primary directors of the project?

Oooo, I’m a director now?! Cool! :-)

I do pretty much what I did when I first started contributing to MapTool, except that I control the scheduling now and I get to contribute directly to the
vision of where MapTool is going in the future.

### MapTool is bringing old gaming groups back together again as well as letting them bring in new folks that they would have never met otherwise. Does that awareness help motivate you?

Definitely! We have posts on our forum from people who thank us for helping them get their college gaming group back in touch. One user said their group had
died as a result of members getting married, having kids, and moving away. And now they’ve been able to reconnect and not just the original group members, but
sometimes spouses as well! I like to think that MapTool has had some part in bringing people together.

### Our old gaming group and our new members say “THANK YOU”!

You’re welcome!

But we should really be thanking you — our user community — because without the encouragement you provide it would be a much tougher road for us to walk!

### Thanks again to Azhrei for taking the time for this interview. Up next, the affable Dorpond.
