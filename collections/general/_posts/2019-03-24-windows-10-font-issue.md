---
layout: post
title: "Windows 10 Font Issue"
tags: bug maptool
author: bard
icon: /assets/img/SwatBug.webp
slug: windows-10-font-issue
---

We interrupt our [Blast from the Past](/tag/blast-from-the-past) series to bring you a fix to a potentially irritating problem plaguing Windows 10 users.

Windows introduced DPI scaling to help with readability issues on monitors with high resolution. This appears to cause problems for some applications, like MapTool. According to [this help article](https://support.microsoft.com/en-us/help/3025083/windows-scaling-issues-for-high-dpi-devices), when you use a high-DPI device you may experience the following issues:

- Elements such as applications, the taskbar, icons, toolbars, text, and dialog boxes appear to be fuzzy.
- Elements are too large or too small compared to the rest of the desktop.
- Blurry text appears in applications or in the Windows interface.

Follow the instructions below if the text in MapTool has become hard-to-read when upgrading from 1.4 to 1.5.

Below is a screenshot showing MapTool 1.4.0.5, Nerps 1.4.5.4, and MapTool 1.5 demonstrating the problem. Different users report different issues but it all seems to revolve around making the adjustments below to fix narrow or small text.

<img class="post-example" src="/assets/img/WindowsAntiBlurrySettingProblem.webp" alt="WindowsAntiBlurrySettingProblem" width="1033">

To adjust the displayed text’s behavior, right click on Win10 desktop, hit display settings, then navigate to Advanced scaling settings.

<img class="post-example" src="/assets/img/WindowsAntiBlurrySystem-Display-Settings.webp" alt="WindowsAntiBlurrySystem-Display-Settings" width="641">

There are two advanced settings which affect your font display in MapTool 1.5. We recommend you first turn on ‘Let Windows try to fix apps so they’re not blurry’. Restart MapTool to see if that fixes the fonts to your satisfaction. If not, adjusting the scaling should fix the issue. You can go either up (to something like 150%) or down (to 100%) until the fonts work correctly for you.

<img class="post-example" src="/assets/img/WindowsAntiBlurrySystem-Display-Settings-Advanced-1.webp" alt="WindowsAntiBlurrySystem-Display-Settings-Advanced-1" width="530">

Once you save the settings and restart MapTool the fonts should be better behaved.

<img class="post-example" src="/assets/img/WindowsAntiBlurrySettingFix.webp" alt="WindowsAntiBlurrySettingFix" width="804">


Special thanks to @phergus and community member Drew Sibbing for helping us track down and solve the issue.
