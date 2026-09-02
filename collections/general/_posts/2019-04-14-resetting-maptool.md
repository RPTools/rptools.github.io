---
layout: post
title: Resetting MapTool JVM Settings
tags: maptool
author: bard
image: /assets/img/keep-calm-and-press-the-reset-button.webp
slug: resetting-maptool
---

**This information applies to MapTool v1.7.0 and prior. Note that these versions are no longer supported and should not be used. This information does not apply to later releases**

If you changed the JVM memory settings under Edit->Preferences, there is a possibility of adding an invalid value that will keep MapTool from starting.

<img class="post-example" src="/assets/img/ResetJVM.webp" alt="ResetJVM">

he first method is to pass the `-reset` option to your MapTool executable. The location of the MapTool executable will vary based on operating system.

- Windows: `C:\Users\[username]\AppData\Local\MapTool\MapTool.exe -reset`
- Linux: `/opt/MapTool/MapTool -reset`
- Mac: Varies but may be `open /Applications/MapTool –args -reset`

You can also manually edit the memory config file for MapTool to set the appropriate Java Virtual Machine (JVM) values. **Deleting the jvmuserargs.cfg file has the same effect as the reset flag.**

- Mac: `~/Library/Application Support/net.rptools.maptool.client/packager/jvmuserargs.cfg`
- Windows: `C:\Users\[username]\AppData\Roaming\net.rptools.maptool.client\packager\jvmuserargs.cfg`
- Linux: `~/.local/net.rptools.maptool.client/packager/jvmuserargs.cfg`

The contents of the file will look something like
```
[JVMUserOverrideOptions]
-Xmx=4G
-Xms=4G
```

You then modify the -Xmx= to be something your computer will digest. We generally recommend setting -Xmx (max) and -Xms(min) memory to the same settings. The -Xss defaults to 4M which satisfies the stack size for most frameworks. Note that only altered entries show up in the file.

For help with MapTool, TokenTool, or other RPTools products, please see the [RPTools Forums]({{ site.data.links.forums | escape }}) or live chat on [Discord]({{ site.data.links.discord | escape }}).

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.

