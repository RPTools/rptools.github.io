---
layout: post
title: GitHub Basics
tags: github
author: bard
icon: /assets/img/logos/GitHub_Invertocat_Black.svg
slug: github-basics
---

This will begin a series of articles on GitHub to help our community better understand what goes into the production of MapTool and TokenTool and how to us it to check on your favorite open source project.

So what is GitHub?

GitHub is a web interface for Git – a popular distributed version control system. In simple terms, it’s how the RPTools staff manage the contributions of source code to create new versions of MapTool and TokenTool. It allows the staff to resolve code conflicts which can occur as different developers work on the same section of code and roll back changes that aren’t quite ready for primetime.

But it does much more than that. By linking GitHub to Travis CI and AppVeyor and using GitHub automation, the team is able to rapidly build and deploy new versions of RPTools products. It’s not simple but it is much easier than it used to be.

GitHub also functions as a social networking site for programmers and/or developers. On GitHub, they can show off their skills, projects, and contributions to the broader open source world. It has discovery tools that allow developers to find other projects that may be of use to their current project.

## A Quick Tour of RPTools on GitHub

The first thing to do is to create a GitHub account if you don’t have one already. Simply go to [github.com](https://github.com/) and register. Next, you’ll want to navigate to RPTools home on GitHub: [github.com/RPTools](https://github.com/RPTools). There you’ll be on the factory floor of all RPTools development. The two most important project here will be [MapTool](https://github.com/RPTools/maptool) and [TokenTool](https://github.com/RPTools/TokenTool). Note that we have other projects in the work such as a new Dice Library being worked on by Craig.

<img class="post-example" src="/assets/img/github1.webp" alt="github1">

Clicking on either link will take you down into the repositories themselves. What you’ll see is the guts of the project including all the source code and other files that make up the RPTools products.

<img class="post-example" src="/assets/img/github2.webp" alt="github2">

As a non-coder, there are a few things you might want to do on this page. All these options are near the top.

<img class="post-example" src="/assets/img/github3.webp" alt="github3">

The **Issues** tab gives you a list of past and current issues along with the GitHub conversations regarding them. You can create an issue here as well. The devs are pretty good at responding in short order.

The **Insights** tab is interesting as well. It shows you who’s working on what and how many issues have changed state during a given period of time.
- **Merged** indicates a change has been merged into a branch (usually the development branch used for the next release).
- **Proposed** are Pull Requests that have been submitted. A Pull Request is the developer requesting the Release Manager pull their bright and shiny new code into one of the products i.e. MapTool or TokenTool.
- **Closed** means the Release Manager or another member of the staff has closed the issue meaning all the work is complete or the issue will not be worked.
- **Opened** Issues are items that have been created but no conversation has yet occurred for them.
- **Open** Issues are those with conversations. They will eventually be assigned to a project and worked as time allows.

The **Fork** Button will create a copy of the code in your GitHub space. If you plan on working with either MapTool or TokenTool, this will be one of your first steps.

There are two other buttons to note:
- **Follow** will send you all the updates that occur to a project. We’re very active right now so you’ll get a lot of emails or notices if you pick this.
- **Star** lets the project know you like it and it will allow you to select it easily from your space.

We’ll continue discussing GitHub in the coming days including how to set up for MapTool Development.
