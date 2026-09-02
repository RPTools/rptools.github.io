---
layout: post
title: Playing Sound in MapTool via Syrinscape
tags: feature sound syrinscape maptool
author: bard
image: /assets/img/SyrinScape-2.webp
slug: playing-sound-in-maptool-via-syrinscape
---

![Syrinscape banner](/assets/img/SyrinScape.webp){: .post-example }

One of the overlooked features of MapTool 1.5 is the introduction of [RESTful]({{ site.data.links.wiki }}/index.php/RESTful_Functions_Overview) functionality in the MapTool scripting language – MTScript. For the non-programmers, RESTful is a software architectural style that defines a set of constraints to be used for creating Web services. These take the form of an HTTP call, like when you put a web site URL into your web browser. The industry term for exposing a RESTful interface is called an Application Programming Interface or API.

But enough of the Geek Speak.

To the rest of us, pun intended, a RESTful service is just a call to a web endpoint who’s purpose is to return data, not web pages. You can test out the GitHub API for our RPTools repository by placing the following into your web browser.
```
https://api.github.com/users/RPTools/repos
```
The call returns a large JSON array detailing the contents of the RPTools repository. Simple, right?

The gist of all this is that MapTool, via macros, can communicate with other online systems. You can leverage this to bring sounds into your campaign via [Syrinscape](https://syrinscape.com/) as demonstrated in the video below.

<div class="video-embed">
    <iframe src="https://www.youtube.com/embed/2Il246Si4xU?si=CrIbYABGHzaJQmqa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

MapTool is able to utilize Syrinscape’s REST API via a macro. You simply copy the URL and auth token by clicking Show Remote Control Links from the Syrinscape Master interface. Once you have the URL, you construct a macro call to Syrinscape with something like the following:
```
[r: REST.get('https://www.syrinscape.com/online/frontend-api/moods/19/play/?auth_token=<insert your auth token here>')]
```
Once run, the macro will start playing to all the connected players.

Of course, with MapTool’s powerful scripting engine, you can do a whole lot more, like fire off one-shots when a players Initiative comes around or that awesome Heal Light Wounds (from Kyra’s sound set) every time your Channel Healing macro is used. You could also bake in some tokens on a map for quick links to selected moods for easy access.

## The Path Forward

The RPTools contributors are currently in the process of adding audio streaming into MapTool. This will start with the macro calls to local or remote files and end with a GUI interface and preferences. It was made quite clear by some of our users they don’t want sound due to limited bandwidth and other considerations so you will always have the ability to keep MapTool mute. You can look for the first version of the new streaming ability in version 1.5.5.

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.


{% include md-links.md %}
