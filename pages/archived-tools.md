---
title: Archived Tools
permalink: /toolbox/archived-tools/
---

{% assign legacy_tools = site.toolbox | where: "legacy", true %}

Each tool requires you to have a correctly configured Java installation. If you have Java configured correctly, you should be able to double click on the
downloaded JAR file to run each of the tools. However, depending on your Java install, you may need to invoke the command line for your operating system to run
the program.

<ul class="post-list">
    {%- for tool in legacy_tools -%}
    {%- include listed-tool.html tool=tool -%}
    {%- endfor -%}
</ul>
