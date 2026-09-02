---
layout: post
title: "New Macro Editor"
tags: feature macros maptool
author: bard
image: /assets/img/CodeCompletion-1.webp
slug: new-macro-editor
---

With the release of MapTool 1.5 comes a new macro editor with syntax highlighting and code completion. You no longer need to close the editor to run a macro or save changes. The new editor features:

- Syntax Highlighting
- Code Completion with function description and usage
- Line Numbers
- Find/Replace
- Bracket Matching
- The Macro editor window is no longer modal meaning you can have several up at once
- You can apply changes and run the macro without close the editor

Bug Alert! There is a known bug that can strike if you load a campaign with an edit window open. For now, make sure all macro editor windows are closed when you load a campaign. We have a fix in place for the next release.

Here’s a preview of the new macro editor with syntax highlighting.

![two macro editors showing syntax highlighting](/assets/img/MacroEditorDual.webp){: .post-example }

The code completion function brings up a list of functions with help on the parameters the function accepts. This is a work in progress but most of the functions are now documented.

![macro editor code completion](/assets/img/CodeCompletion-1.webp){: .post-example }

There is also the ability to search within a macro using command keys, find/replace dialog, or adding a search bar to your editor. You can also go to a specific line number in your macro. You access these features from the main MapTool Edit menu.

![macro editor search](/assets/img/MacroSearch-1.webp){: .post-example }

The new editor is compliments of RSyntaxTextArea. You can find more information regarding this widget on the [RsyntaxTextArea Github](https://bobbylight.github.io/RSyntaxTextArea/) site.

Excited about the new functionality? Let’s discuss in the comments below or on one of our many social outlets.

{% include social-outlets.html %}

You can download available versions of MapTool from [GitHub](https://github.com/RPTools/maptool/releases/latest).

All users running versions prior to 1.8.3 are strongly encouraged to update. See [this announcement post]({{ site.data.links.forums | escape }}/viewtopic.php?f=1&t=29314) on our forum.

A JAR file version may be downloaded as well but is only recommended for developers or other advanced users.

Mac Users are encouraged to use the PKG version of the install. Windows users are encouraged to use the MSI.

If you need interactive help, please join our [Discord Server]({{ site.data.links.discord | escape }}). Or visit our [wiki]({{ site.data.links.wiki | escape }}) for complete walk-throughs of how to use the tool. Our *Community* page has more links; see the toolbar at the top of the page.
