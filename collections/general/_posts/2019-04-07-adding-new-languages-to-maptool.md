---
layout: post
title: Adding New Languages to MapTool
tags: community
author: bard
icon: /assets/img/img_1903.webp
slug: adding-new-languages-to-maptool
excerpt_separator: "<!--more-->"
---

<img class="post-example" src="/assets/img/img_1903.webp" alt="img_1903">

RPTools is an international community. We see this on the social sites as well as in our developer group. There are also several native language support sites. Translating the text in MapTool is one of the many ways we support each other.

<!--more-->

To date, we have translations for German, Spanish, French, Italian, Japanese, Polish, Russian and Chinese. The language files are located in the GitHub Repository [resources directory](https://github.com/RPTools/maptool/tree/master/src/main/resources/net/rptools/maptool/language) if you care to view them.

The format of the file name is i18n_xx.properties with xx being the [language description](https://www.w3.org/International/O-charset-lang.html) from W3C Internationalization Activity. RPTools uses English as the base — new keys are added here first. Then the descriptions for those keys are translated and put into the other language files by members of our community.

So if you see a language you would like to add, grab the i18n.properties file and rename it based on the country code above. Translate the file and submit it to the forums, GitHub or Discord. The most important thing is to submit changes in UTF-8 or use the `\u` notation in the description. Your favorite search engine can tell you how to do this or you can simply ask how on one of our social media outlets.

These translations will serve to expand the RPTools community and eventually bring about world peace through gaming.
