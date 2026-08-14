---
layout: post
title: "Blast from the Past: Planned Changes for MapTool 1.4 pt1"
tags: blast-from-the-past interview
author: bard
icon: /assets/img/post-icons/MT1.4.webp
slug: blast-from-the-past-planned-changes-for-maptool-1-4-pt1
---

This interview was done in 2011 at the end of MapTool 1.3 development. It’s a fun article to read again after all these years. We’ve accomplished a great deal
of the 1.4 plans but had to delay some of the hopes due to JavaFX becoming a technical football at Oracle. We hope things have settled down with Oracle giving
JavaFX to the Open JDK group.

Other parts of the plan have/will be part of the 1.5 series. MapTool 2.0 is where we currently plan to implement the new User Interface in Java FX.

The article originally appeared on the Tales of the Savage Troll bog.

[MapTool](https://rptroll.blogspot.com/2010/04/sweet-spots-for-time-crunched-gamer_24.html) is a free, open-source Virtual Table Top (VTT) used to connect
gamers of all stripes. MapTool includes powerful map creation, token management, light and sight, and initiative tracking functionality in an easy-to-use
package that a user can pack with customizations to speed gameplay.

It is The Savage Troll’s go to technology for time-crunched gaming since it removes much of the setup and travel time required for our favorite hobby. You
simply drop a map onto the screen, create a few tokens to represent PC and NPCs, start your MapTool server, and play.

The 1.3 version of MapTool is in Release Candidate mode which means the developers are tidying up a few final bits and pieces before all work on 1.3 stops. At
that point, the developers rip the code apart and do major modifications and upgrades to the existing code base while adding a slew of new functionality. This
leads to the inevitable question regarding what’s changing, what’s staying, and what’s leaving in terms of MapTool form and functionality.

The current project leads for MapTool ([Frank](https://rptroll.blogspot.com/2011/02/interview-frank-edwards-maptool-gang-of.html),
[Craig](https://rptroll.blogspot.com/2011/02/interview-craig-wisniewski-maptool-gang.html), and
[Bill](https://rptroll.blogspot.com/2011/02/interview-bill-hart-maptool-gang-of-3.html)) took the time to answer a few questions regarding MapTool 1.4. Luckily
for us, they had a lot to say so we broke the interview into two sections. The first, Planned UI Changes for MapTool 1.4, is presented below. The follow-on
interview regarding macros and other functionality should follow in one week’s time.

***

### User interface questions

#### What new or changed mapping functionality will we find at 1.4 final?
[Frank] We have a lot of plans for 1.4 but our initial set of changes will be re-architecting the entire project. That means breaking down every feature and function into modules, then building the application back up again based on those modules. This initial step is likely to be very time-intensive and could take months to get to the point where we have a MapTool 1.4 that will even run! That means our definition of what goes into 1.4 vs. 1.5 might change over time. And it’s why it is so important to get 1.3 as bug-free as possible since users might be using the final build for months.

This also means that our goals for 1.4 might change. We may get part way into this process and decide that adding extensive new features as part of 1.4 might be too big a bite to take at once. It might be better to do the redesign and get it to a fail-safe point and call that 1.4b01, then add just some basic changes without extensive rewiring of the whole thing. For example, maybe just fix up the dialogs so that they are more “wizard-like”, but without making huge changes to the internals.

We’ll know more as we see how the process plays out.

[Craig] What Frank said, there is at this point in time no definitive list of “this will be in 1.4”. There is all this stuff we want to get into 1.4 but we may start pushing some of that into 1.5 depending on how things go.

[Bill]- I am hoping for better drawing tools.- I want to be able to click on a previously drawn texture and then be able to draw with that texture, even if I have it in my library or not.- I would like to see shadowing for walls but Maptool would need to utilize the video card to do that.- I would also like to see MT expand a bit on the unbound map code a bit, allowing us to use multiple texture files instead of just one – randomly placing them.- Layers! :)

#### Currently, MapTool has Token, Object, Background, and Invisible layers. How will the new layering system work?

[Frank] There are a lot of ideas in this area. We would like user-defined layers. An ideal configuration would allow the user to create a layer named “Lead Walls” and then define a sight type called “X-Ray”. Now the user could specify that anything on the Lead Walls layers would block the vision of type X-Ray. But it needs to be more general than that — we would like layers to be able to block sight, but also block movement. We also want terrain types and/or movement modifiers. Maybe it’s even possible to define layer to represent elevations — someone at a lower elevation would treat the layer as a sight-blocking layer (since they can’t see over it), but someone at a higher elevation would be able to see it clearly.

All of these ideas are being discussed amongst the development team and as we break the application into modules (see the previous question) we’ll be able to better determine what is realistic for implementation in 1.4.

[Craig] As Frank has said discussions are still happening about layers. Although I see how Vision Blocking interacts with light and vision more of an attribute of the vision blocker itself rather than the layer. Also, I think we are moving away from elevation as after approaching it several ways we keep running into the fact that it makes defining maps too hard. The latest idea that has been floated is the GM can define as many objects, tokens, background layers as they like and hide/show them and order them within their own category how they like, but all backgrounds will always be behind all objects which will always be behind all tokens.

[Bill] Layering is currently under discussion on the forums. It is very complex and we want to make sure we handle it the right way so that simple users can use Maptool and advanced users will have the power they need. At the moment, I think the three of us are in agreement that we will have the option to select certain drawables, objects, and other ‘things’, and send it over to some sort of Map Manager (think Map Explorer on steroids) to manage them better during a game.

#### Will the ability to apply VBL to objects be in place early in the 1.4 development cycle?

[Frank] Unlikely. As I mentioned above, 1.4b01 will be essentially the same as 1.3 Final. It will just be broken into modules. I know I keep harping on that “module” idea, but it’s very important for an application the size of MapTool to be organized in a logical way and much of MapTool’s recent development has been rather “organic” — meaning it’s been growing without any long-term design goals. We aim to change that in 1.4 by using modules to sharply define functionality, then we’ll go back and start adding new features.

[Bill] I have heard a lot of “VBL on objects” coming from Craig lately, so it sounds like he has this in the front of his mind.

#### Any changes or additions to the drawing tools or templates planned?

[Frank] Oh yeah…! One issue with MT right now is that drawables (which means all drawings on the map, including templates) are not objects per se; they can’t be selected and moved, for example. We want them to become first-class citizens: selecting, rotating, resizing, and so on. This plays into your previous question about layers: should we have one layer for all drawables? It’s very likely that the user will be able to define which layers can contain drawables and which can contain templates. If a user only has one of each, then any attempt to add a drawable or template would automatically use that layer. This allows the user to define the drawing order of each. If the user defines multiple layers as being able to contain drawables, then they would need to select one as part of the drawing process. There are user interface issues in both cases so we’ll be doing some research to determine which techniques might work best for the user community. This is the type of thing that will result in a public build of MapTool: we will want the community’s input on how best to handle this!

[Bill] I like everything Frank said. It will be nice dropping down that spell and then being able to move it around the battlefield :)

#### Any new map properties on the horizon?

[Frank] Map properties? Like what? The maps pretty much have everything they need. The image assets will be getting some big upgrades though.
For example, right now each token 100% encapsulates a “unit” on the map (could be a PC, a creature, or a tank depending on the game being played).

This will change. In 1.4 the token will be a reference to the unit, but not the actual unit itself. Windows users can think of “shortcuts”, OS X users can think of “aliases”, and Unix/Linux users can think of “symbolic links”. There will be a single unit defined within the campaign and the tokens will reference back to that single unit. So if there are three tokens across three maps that all refer to the same unit, only one set of properties will apply.

This should significantly simplify the process of managing units on a map.

[Bill] I haven’t really thought of properties at this point except that I hope to have rule sets that we can snap in to make Maptool run a certain way. If you want to play D&D, snap-in that rule set – Savage Worlds, that rule set.

#### I understand the Vision code will be rewritten. Will the Light system functionally change or is it mostly under the covers changes to make it more efficient?

[Frank] This is Craig’s baby, so I’ll let him cover it in more detail. But my understanding is that the vision code is being rewritten. He is currently investigating whether there are standard libraries that can be used by MapTool or whether we should keep our own code but revise the algorithms to be faster and more efficient.

[Craig] Vision and Light will be getting revamped. What we want to do is provide a way to define different types of vision (e.g. x-ray, see invisible etc), and then the GM could define what types of vision each of their light sources interact with, as well as what type of vision each of the vision blocking objects blocks. That way x-ray vision could see through most walls but normal vision would not be able to. The underlying implementation of vision/light will be more efficient but I am sure people will still be able to slow it down given you will be able to make it do much more.

[Bill] If there is one thing I would like to see the most with lighting, it would be for it to look like lighting. I have found that throughout the years, many users confuse FOW and vision with lighting. I would like to make lighting more obvious. Does that mean wavering 3d glowing or edges that are faded? That you will have to ask Craig and Frank..

[Frank] Heh, I can agree with that confusion! Vision (Off/Day/Night), Fog (hard/soft), Light (light/aura), and Sight are very confusing to new users. Heck, they’re confusing to existing users! Part of the problem is that we have so many options! While working on the new Individual View and Individual Fog options it’s become clear that if some options were removed not only would the code be much simpler, but it would be easier for us to document how MapTool works and thus make it easier to users to understand.

#### Will the Vision Blocking Layer change in the way VBL is placed and edited?

[Frank] That depends on the results of the previous question. :)

[Craig] Yes. I don’t think there will be a specific vision blocking layer in 1.4, instead, the “walls” (I will call them walls here for lack of a better name) will be drawn on other layers such as background/token/object layers. So there will be no specific vision blocking layer anymore, instead, you will draw walls on your layers so as you hide or reveal them you also hide or reveal the walls associated with them, likewise adding an object that blocks vision will be possible. To facilitate that I think we need to change how vision blocking is drawn and modified, in 1.3 you draw your VBL and its then nothing more than a line on the map, you can erase it but you can’t move it or edit it in any way. In 1.4 we might change this so that you can select the lines/polygon that you have laid down and move it or edit it in some ways.

[Bill] I am sure there will be much discussion with this now that I read Craig’s update :)

There are many ways to approach it for sure – all depends on how we tackle layering.

[Craig] And the discussion has begun ;).

#### Are there plans to implement a Movement Blocking/Movement Hindering Layer? If so, how will it work?

[Frank] As described under the Layers question, above, “yes”. The movement blocking feature will be tricky. Let’s say a user has a square grid on the map. Let’s also say that an MBL has been defined. So the user draws some terrain on the MBL and only part of a square grid cell is covered. How does that affect the token movement? If the terrain is defined as 2x movement and the grid cell is 50% covered, does that make the movement 1.5x?

I expect that any MBL we add will be somewhat late in the 1.4 cycle as we will have a lot of other details to work out before we get to MBL. I could be wrong though — Craig may find some simple solution to MBL issues while working on the vision module.

[Craig] I don’t think there is any simple solution that will address all of the issues I can think of with Movement blocking/hindering. I need to add more information here when I get a chance :)

#### Maybe define a layer with the degree of movement blocking (1.5x, 2x, .5x etc.) and then anything placed on the layer would block movement by that much? My pref for gridded movement would be any part of a square that was filled caused the entire square to be filled. Gridless affects movement by the part of the movement passing over the (whatever). Sorry for the kibitz. Couldn’t resist.

[Craig] The problem is more with the path finding. Once you add variable movement costs it either greatly increases the amount of work that the map maker must do to get path working decently or the amount of processing time that MapTool needs to spend processing the Map before it can be played on (this processing time would also occur when ever you modify the movement blocking or movement cost).

[Bill] I would like to see movement hindering. In D&D for example, it costs double movement to walk through certain cells. If MapTool could accurately count my movement, that would rock.

#### Will 1.4 support sound and animated GIFs?

[Frank] Sound? Very likely. There is an existing library that we can (probably) plug into MT and use. We will require a GUI to be defined and maintained, and we’ll need to do some security testing of the library, but I have high hopes for this.

Animated GIFs? Definitely. There are some issues with animated GIFs in Java — the libraries don’t provide direct support. We will likely need to create a layer of code that recognizes animated GIFs as distinct from non-animated GIFs. That layer of code will be responsible for registering some kind of countdown timer so that it can cause the next frame of an animated GIF to be displayed. And we’ll need a UI that allows the user to control the speed of each individual animation as well as an overall speed for all animations within MT (so that users with slower machines can choose to turn them off entirely if they wish).

Ideally, we’d be able to use animated PNGs instead, since GIFs may be patent encumbered. But the APNG format is only a community standard at this point and not an industry standard. That means it only works in certain applications (like Firefox) and doesn’t have widespread support in painting applications (like PhotoShop or GIMP).

[Bill] I hope to see sound implemented. I did a mock-up of how I would like it done but I play face to face so I am uncertain how all of it would work when going over the wire. Sound can be very complex in its own (mixing, channels, effects, proximity volume, looping, asset management, streaming, etc) and I am uncertain if anyone on the team really has the expertise or maybe even has the desire to do what I would want Maptool to do at the end of the day.

But like all the rest of you, I would be happy with even simple sound implementation since it would be more than what we have now in 1.3. It might not be the ambient march of the dragon soundscape, but if we can have just an image on the map that a user can click to play something, that is better than nothing.

#### How about things like object opacity?

[Frank] As you know, PNGs already have transparency. But I expect we’ll have a UI that allows an image’s overall opacity to be adjusted, possibly just by using a slider. This can have significant performance implications, however; if the user doesn’t have hardware support for this type of operation, doing the work in software will definitely be a performance hit. This will be a problem for Netbook users, for example. So as with the animated GIFs, we’ll need some way for the user to turn it off completely via the Preferences.

[Bill] Hardware support. That seems to be the key for doing many of the cool things I want to do, including shadows on walls and glowing torches. I guess by the time 1.4 is usable, everyone’s old laptops will have great video cards in them that can pull it off :)

#### How will handouts change in 1.4? Will we have the ability to load reference PDFs for the players?

[Frank] There are libraries that allow PDFs to be displayed by a Java application. We will need to evaluate them for (a) security and (b) compatibility. Often those types of libraries open windows themselves and 100% control the display of the contents. That means we would be unable to control any theming of the window and that might be a problem. This is another area that we will be evaluating as we get closer to having 1.4b01.

[Bill] I think we can all agree that handouts are a must for 1.4. In my perfect world, I can imagine a meeting room where players can look over handouts, look at maps, and chat before the game starts. I can also see accessing those same documents during the game.

#### Currently, the macro writers have devised clever ways to do things like teleport from one map to the other and use a movement pad to track movement. Will these commonly used features be absorbed into the MapTool code base or will they remain in the realm of macros?

[Frank] Many things will remain in the realm of macros. We want MapTool to be generic enough to be used with any game you might choose to play. So absorbing things into the MapTool code exposes two problems: changing how they work requires a new build from us, and users can’t design their own implementations of these things.

[Craig] Some simple things like teleport to other map or waypoints are possible since they can be made to work with many systems, for other things then JavaScript macros and/or plugins can provide functionality that is tailored to a specific system.

[Bill] I hope to implement warp points. Place Point A on a map and place Point B elsewhere and the token can warp between those two points. Maybe allow the option to only change the map view without moving the actual token. *shrug*

[Frank] (None of which requires support inside MT beyond what it currently has. But it would be nice if the user could select a “rule set” and have certain features (read: macros) imported automatically.)
That doesn’t mean that these macros won’t be pre-packaged with the MT download. In fact, I expect that a lot of MapTool will become “on-demand” in 1.4. I would like to have a Preferences dialog in which the user chooses which features they want and only those features are loaded and available. This will be something that can be selected at run-time. Campaign files will have a list of features that they require as well, so if a user indicates they want features A, B, and C, and then they load a campaign that also requires D, they will get a prompt asking if that feature should be enabled. If they say no, the campaign isn’t loaded. If they say yes, then we will check for feature dependencies (after all, feature D may require E and F to work properly) and then load the campaign.

These features will be downloadable from our web site on the fly. So if a campaign says it needs feature D and the local MapTool installation has no clue what “D” is, it will check our web site and get the information it needs — including the code for the feature itself!

#### What are the primary holes you see in the current 1.3 GUI?

[Frank] Wow. We don’t have time for this question. ;-)The Start Server dialog needs some major work (there are way too many people with network questions on the forum and a redesign would help with that, plus we want to be able to save the settings and restore them easily later). The various file choosers (such as Save Campaign, Save Token, Load Macro Set, and so on) are not consistent from one area to another. The MapTool code handles mouse events on its own instead of using the facilities provided by the language run-time and this causes some UI incompatibilities with the platform (Windows, Linux, OSX) regarding drag/drop and the context menus. Some of the things that appear in the dialog boxes are hard-coded and cannot be translated (such as the “PC” and “NPC” designations, but also token shapes and sizes).

[Craig] As well as what Frank mentioned let’s see: the dialogs to set up vision and lighting, the transmitting of the whole token to clients every time you move it, the anti-cheating mechanism for rolling dice needs to be more robust, the way the macro buttons on the selection panel are done (the continual recreation on selection really kills performance when selecting large groups).

[Bill] Holes?

#### Will the GUI change dramatically in 1.4 or is it mostly additions to the current layout?

[Frank] We have pie-in-the-sky hopes for changing the GUI. My personal belief is that changes like we’ve been talking about (the dev-team, that is) are beyond what we should plan for 1.4.

In some ways, 1.4 would be better called “2.0” since the internal structure is going to be significantly different. Yet “1.4” makes sense because we don’t expect a huge shift in the initial UI. If we called it 2.0 because of the internal changes, then the version that incorporates the GUI changes would have to be “3.0” because that will be another significant shift.

[Craig] I think the biggest GUI change in 1.4 will be fixing some dialogs that really need fixing and possibly a revamp of some areas like the Map Explorer. The more dramatic GUI enhancements will have to wait until at least 1.5.

[Bill] I think we can all agree that Maptool is ugly. I think one of our goals will be to make it prettier. I know we have had a lot of great ideas sent from our dedicated user base and we are reviewing a lot of them. If anyone has ideas or mock-ups of how MT could look nicer, pass them along to us. None of us are great artists :)

[Frank] Agreed! As Dorpond says, anyone with ideas — or talent! — is welcome to start a thread on the forum regarding what they would like to see. As we get closer to 1.4b01 I will be creating 1.4-specific forums.

#### Thanks again to the Gang of 3 for their input. Look for the conclusion of the 1.4 interview questions next week.
