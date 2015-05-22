---
layout: post
title: Minified CSS etiquette
---
Minifying CSS should always be encouraged. To simply summarise, it'll reduce the size of your CSS files and improve the loading times of your website (albeit minimally in certain cases, but every little helps).

However, it does render it pretty much unreadable to the human eye (unless they make the effort of manually putting it through a de-minifier first).

<p class="no-m"><img src="/images/posts/markup-notthemosthumanfriendly.jpg" alt="Minified CSS" class="full-width-image" /></p>
<p class="caption">Minified CSS isn't known for being the most human friendly&hellip;</p>

Inspecting other people's code is known to be one of the best ways to learn web development and improve your overall knowledge and skill-set, and unreadable code kind of hinders that.


So, my proposed etiquette (that I'm sure plenty of you have already put in practice) is the following:

Simply include your minified CSS, and then include a commented out link to the original CSS file/s (or LESS/SASS if you're a fan of pre-processors). The actual page renders with the minified CSS with the smaller file size, while you're providing a human friendly version for anyone inspecting your code (without the webpage trying to download it).

No excuses for hiding behind your minified CSS now&hellip;