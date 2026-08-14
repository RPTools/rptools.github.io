---
layout: post
title: "Blast from the Past: Planned Changes for MapTool 1.4 pt2"
tags: blast-from-the-past interview
author: bard
icon: /assets/img/post-icons/MT1.4.webp
slug: blast-from-the-past-planned-changes-for-maptool-1-4-pt2
---

This is part two of a 2011 interview done at the end of MapTool 1.3 development. It’s a fun article to read again after all these years. We’ve accomplished a great deal of the 1.4 plans but had to delay some of the hopes due to JavaFX becoming a technical football at Oracle. We hope things have settled down with Oracle giving JavaFX to the Open JDK group.

Other parts of the plan have/will be part of the 1.5 series. MapTool 2.0 is where we currently plan to implement the new User Interface in Java FX.

The article originally appeared on the Tales of the Savage Troll bog. You can read Part 1 [here](/2019/03/28/planned-changes-for-maptool-1.4-pt1.html).

***

This is the second half of the MapTool 1.4 interview with [Frank](https://rptroll.blogspot.com/2011/02/interview-frank-edwards-maptool-gang-of.html),
[Craig](https://rptroll.blogspot.com/2011/02/interview-craig-wisniewski-maptool-gang.html), and
[Bill](https://rptroll.blogspot.com/2011/02/interview-bill-hart-maptool-gang-of-3.html) the project leaders for MapTool.

In [part one](https://rptroll.blogspot.com/2011/04/planned-changes-for-maptool-14-part-1.html), we discussed the user interface changes planned for 1.4. In this
portion, we focus on Macros, underlying architecture changes, JavaScript, third-party tool integration, and MapTool plug-ins.

### Macro Questions:

#### How will the new macro system be different? (if it isn’t too much trouble could you give us some old/ugly code and describe what the new js version would look like?)

[Frank] I’ll let Craig handle this. Be aware that JS macros will only be available to the GM. Users will still have access to dice rolling stuff, and the ability to call functions that the GM has “exported” or “made public”. But all JS stuff is the realm of the GM. The goal is to remove the complexity from the users as much as possible.

I’m of two minds on this. I agree with the precept, but I know that in the games I play I’m often the one tweaking or editing the macros! As a player I wouldn’t be able to do that during a game session if it was limited to the GM only. So I may lobby for some way to provide that access to the players…

[Craig] I think one of the lessons learned from 1.3 macros is the whole Trusted vs Non Trusted thing is not well understood, and it is really hard for a lot of people to come to terms with, not to mention get right during coding of the macro functions. Having a clear dividing line of only GMs can create JavaScript macros solves this problem, it is also really the only way to ensure that the GM can retain control of the game. If we were to allow players to run their own JavaScript code then there is really no way to stop them from doing things they should not be doing without getting into a situation that is a lot more complex than the 1.3 Trusted/Non Trusted method.

What would the JavaScript code look like? That’s hard to say at the moment, but for players, they would just use [] or {} to call them. For example: [dnd42.attack()].

[] / {} will probably be restricted to simple arithmetic and calling functions, so you wont get all these brackets like in 1.3.

#### I understand the old frameworks will break fairly early in the 1.4 development process. For the framework developers, where are they going to spend most of their time in the rewrite?

[Frank] Learning the new JS interfaces! The JS macros will provide a huge benefit by being a structured, consistent language. MT will export a lot of functions that the JS macro writers will be able to invoke to query the status of tokens, maps, campaigns, buttons, and so on. Just finding out what those functions are and playing with them will take some time. I expect that there will be 8-16 hours of such “play time” needed for someone who is proficient with MTscript to become similarly proficient with the JS language interface.
After that? Who knows? I want the ability for JS programmers to throw a custom-written dialog box up on the screen and let the user interact with it.

Sort of like how the MTscript input() function works but with the JSdeveloper being able to add any HTML component they want and with any layout scheme they want. This is entirely possible given our current plans, but there is some discussion about whether this is a good idea or not. :) As this is really Craig’s baby, I’m going to defer to his judgment in this regard.

[Craig] There will be a little bit of pain when it comes to re-doing your 1.3 frame work for 1.4, but there will also be a lot of benefit. I would expect that a lot more reusable libraries would be produced making it easier to load someone else’s inventory library for example rather than having to role your own. JavaScript is also a lot less fiddly than MTScript so there should be a huge benefit there. Also the API will be more consistent than the one that was kind of thrown together from different parts in 1.3. Plugins should also be able to provide an API for JavaScript macros to call so if anyone does want to write their own “does everything inventory” plug-in they can provide ways for macros to interact with it.

I also imagine there will be plenty of builds before 1.4 is ready for playing your weekly game giving people who want to develop macro libraries or frameworks plenty of time learn the new macro system and build what they need before moving over to 1.4.

#### Craig’s mentioned more than once he’d like to see a windowing system to support character sheets along with JavaScript functions to remove/reduce the need for the HTML frame functions. Will this happen in 1.4?

[Craig] I think the character sheets idea that has been thrown around will appear in some form — possibly very different from the current idea — as one of the first plug-ins for 1.4.

#### What sort of new tools will be available to the framework developers?

[Craig] From a creating code point of view, we need to make it easier to write your code in your favorite editor and load it into MapTool, as well as get it out and edit it. From a “what new things can I do with it” point of view, I don’t think the boundaries for what we will allow have been defined yet, but given plugins can allow JavaScript macros to interact with them there will be a lot of things you will be able to do in 1.4 that you can’t do in 1.3.

#### Will the token properties have assignable data types (numeric, character, JSON) and attributes (fixed length, arrays/lists, etc.)

[Frank] I don’t see “fixed types” as very important. In a way they are, but JS itself doesn’t have fixed types so grafting that onto the language would be troublesome. More likely is that properties will have an “input mask” that can be specified. This mask would define what the field can look like. So fields meant to be numeric could have a mask that has something like “#,##0” to indicate that a numeric value with commas inserted in the right places in the proper format. There are numerous issues with this. For example, when retrieved from JS the commas need to be removed for use in math formulas, but have to be there for display purposes — how do we determine which is which? Whatever technique we use it needs to be easy to understand and the defaults need to make sense.

#### Currently tokens serve as data and code stores for the frameworks. You’re forced into an odd position of having tabular data as token properties and saving code on a token. What improvements can we expect in 1.4 regarding internal data and code stores for MapTool? (let me know if this is unclear)

[Frank] There won’t be any code stores on tokens at all. At least, that’s my understanding of Craig’s vision. All code is ONLY in JS and therefore is under the control of the GM. And the JS code will be in its own storage area and not part of any particular token.

[Craig] JavaScript code will all be managed within the campaign and not attached to any token at all. Library tokens are kind of a hack that was needed to make code easy to move around in 1.3 without having to make a lot of changes.

#### What about data tables?

[Craig] Not sure about this at the moment, we have to come up with a better way of storing data if macros are going to be manipulating more complex data structures but we don’t know the how or where yet. I know there have been a lot of requests for a database in MapTool, but this opens a can of worms, do we replicate the database data between all clients, or does only the client that loads the campaign have access. But that means that no data is local and everything always has to be fetched across the network when it is used. There is also the question of where would a database be stored — inside or outside of the campaign file.

[Frank] There could, of course, be a plug-in written by a user that provides database access. Of course, they would be responsible for the database code, the functions used by JS to access it, and so on. This lets the dev-team work on MT while someone else works on the plug-in.

#### Will macros, properties, and data be exportable for easy distribution as canned settings without a prerequisite map or tokens?

[Frank] I’m not sure on this one. I envision a GUI that allows people to put check-boxes next to individual items and then click “Export” and have a single file containing those pieces. Import would work similarly. (In fact, this code is already in 1.3 but the menu options are disabled because it isn’t hooked into the rest of the code yet.)

We expect that framework developers will produce bundles that are very similar to the Art Packs that MT already has. Framework developers will post their framework on the forum and have other people try it out. When it’s ready, we’ll upload it to RPTools.net and it will become available to everyone using MapTool. The bundle might be named “D&D3.5/PF” or “GURPS” so that the GM can choose one quickly and easily.

Just like the Art Packs, the GM will be able to enter a URL instead so that the framework doesn’t have to come from the RPTools web site (this allows for easy non-public distribution, for testing purposes for example).

### Other Questions:

#### MapTool is moving to an [OSGi](https://www.google.com/url?q=http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FOSGi&sa=D&sntz=1&usg=AFQjCNH7x5hg-mfg4eIT6dcaWY3AYzclxQ) implementation. Can you explain this in layman’s terms what this is and how this benefits the end user?

[Frank] OSGi is a system of modularizing an application by breaking it down into components. Those components can then be enabled or disabled on the fly. Components can be stored locally or accessed via a URL.

The biggest advantage to the user will be for plugins. In a previous question I postulated a campaign that required features A, B, C, and D. Using OSGi will allow us (the developers) to simply say “enable feature D” and the OSGi library will find a web site that has that feature, download it, install it, and then enable it for MapTool use. So the most visible feature to the user will be transparent updates of functionality and features.

I plan to have an OSGi bundle responsible for frameworks, for example. When the user starts MapTool the bundle manager will check to see if a newer framework is available and provide the option of downloading it.

[Craig] There are two big advantages that OSGi will have for players. The more obvious is it will allow them to install plugins that others write that can offer additional functionality. The second is it should lead to increased stability. Since OSGi allows us to define clear boundaries between the different parts of the code, so changing one part of the code is a lot less likely to break something else.

[Bill] Again, not my area of expertise. Ozzgee? What in the heck is an Ozzgee? :)

#### Currently, MapTool uses the “hey everyone, get in and test” method of QA. Will there be any automated testing possible under the new architecture?

[Frank] There are some automated testing tools in place already (using jUnit). But not enough. So yes, we expect to include more automated testing. Having said that, automated testing of a GUI is fraught with complications and it’s likely that MT will never have 100% automated testing.

#### Any interfaces planned for non-RPTools products? Are there any changes coming that will make it easier to interface with 3rd party tools?

[Frank] The OSGi bundle manager should help with this. We plan to have a “plug-in architecture” available that will make it easier for third parties to interact with MapTool internally. I expect projects like PCGen will be the most interested in this, and I expect we’ll be collaborating with them to make sure that we provide whatever services they need to make this work.

There are RPTools forum users who have written some amazing things. Using the plug-in approach would significantly help with what they are doing. For example, there’s a “dungeon builder” app written as a spreadsheet. It dumps out letters to represent the contents of grid cells and then a MapTool macro reads those letters and builds a map. With a plug-in, the process would be significantly faster and could be more automated.

We are going to be watching Oracle closely to determine if/when the JavaFX extension becomes more usable. IMO the ultimate plug-in would be written in JFX. JFX can build dialog boxes and populate them with data read from MapTool and/or data read from local disk files (if security will allow it). The JFX plug-ins are true Java code so they will run at the speed of Java, not the speed of a fully interpreted language like MTscript or JS.

#### I understand part of the OSGi rewrite will make it easier to create plug-ins for MapTool. What sort of plug-ins do you expect?

[Craig] To start with I think we will see things like a game system specific initiative panel, inventory/spell/skill managers. I couldn’t even begin to guess at all the types of plugins that people may create though.

[Bill] I hope to eventually see all sorts of user-created plug-ins available for Maptool, floating all over the web. Rock on! :)

[Frank] I would like to see plug-ins for game-specific stuff. The line of sight for D&D. Charsheet tools perhaps. Terrain modifiers or movement controls. Perhaps even a simple database (something like hSQL or SQLite). Since plug-ins will be extending MapTool itself, they could do almost anything.

#### Will the plug-ins allow for dramatic changes in the way MapTool data is displayed like web-displayed maps, mobile device implementations, or interaction with other applications?

[Frank] Potentially. But I see them as more of a game-control feature than a presentation feature.

I already have a plan to put a server (an OSGi bundle) on port 80 so that a browser could connect to MT and see a picture of the current map. But perhaps plugins will provide something similar. It’s a plug-in so who knows what people will do with it?! I certainly wouldn’t have foreseen what some of the scriptwriters have done in 1.3!

#### What parts of 1.4 are most exciting to you as a developer?

[Frank] I am really looking forward to the reorganization of the code. It should open up a lot of possibilities with making MapTool more dynamic (like the plug-ins, for example) and that, in turn, allows for features to be added independently of other features so we should be able to add them faster and more reliably.

[Craig] Looking at how much there is to be done I am experiencing more trepidation than excitement at the moment :)

[Bill] I am not a developer but I am excited the most about Maptool having fresh eyes. I really can’t wait to see what Frank and Craig can come up with at the end of the day.

#### What parts of 1.4 are most exciting to you as a gamer/GM?

[Frank] Heh-heh. All of it! :) JavaScript, easier-to-use dialogs, customizing with JavaFX, user-defined layers, … Yep, “everything”!

[Craig] More flexible mapping/vision/lighting, movable spell templates, as well as a better macro system.

[Bill] Making MapTool easier to use for my friends who want to use MapTool like I do but have no clue how I do it.

#### Thanks again for taking time out to answer these questions for MapTool Month on [TheSavageTroll](https://rptroll.blogspot.com/).

[Bill] Thank you too, friend!

