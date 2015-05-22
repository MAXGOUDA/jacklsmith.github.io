---
layout: post
title: Responsive principles
---
<p class="intro-paragraph">Responsive web design can be tricky. Trying to get your head around percentage sizing, media queries, and fluid grids can prove to be a bit of a headache for even the most experienced designers or developers.</p>

The ultimate goal of serving a suitable layout for each device can prove harder still.

However, with hard work, determination, and the willingness to learn - designing and coding with a responsive mindset can be learnt by anyone.

Applying these skills to a simple web layout can be straightforward (e.g. a personal blog, portfolio, one page promotion, etc). Things become a lot more difficult when you're dealing with a larger site, which holds a whole lot more content.

I thought I'd run through some general advice and useful tips which I've picked up over time, regarding this problem.

## Plan, plan and plan.

With any web design work you need to plan well, but when laying out responsive content, never has it been more important. Get out your pad and a pencil, and start sketching. Think about how your wireframes can adjust as the screen varies in size.

A media query powered layout change that you have in your mind as the perfect idea, may disrupt or break your layout elsewhere. Without proper, solid planning, these mistakes with laying out your content can easily be made.

You need to think about each and every layout that will display on the variety of devices and resolutions that exist, making sure the layout served is suitable for the screen it's being viewed on.

Key point - a suitable layout does not necessarily mean a different layout.

With fluid (percentage) widths, the layout you have in mind for your average desktop, may well still work on an iPad, or a similar tablet device.

The subject of fluid widths brings me on to my next point&hellip;

## Be ready to reject adaptive principles.

First things first, if you're not aware of the difference between &ldquo;adaptive web design&rdquo; and &ldquo;responsive web design&rdquo;, it's probably worth giving [this article](http://www.gavinelliott.co.uk/2011/08/responsive-and-adaptive-design-defined/ "Responsive and Adaptive Web Design") by <a title="Gavin Elliott" href="http://www.gavinelliott.co.uk/">Gavin Elliott</a> a read.

I'm not hating on adaptive methods. I've had various occasions where all that's required is some simple media query adjustments to set pixel widths.

However, the more content you're going to be working with, the more ready you should be to embrace the fully responsive mindset.

This doesn't mean you should never use a max-width on your overall layout width, but basing your whole design around fluid widths can be a massive help. When the content level is high, you don't want to be limiting the flexibility of it's display with set, rigid widths.

You'll also be surprised at the reduction in media queries compared to an adaptive layout, which can only be good for your CSS markup and file size.

## Use a grid

This doesn't need to be an existing framework or grid system if you're not a fan of delving into other people's code. Feel free to create your own.

Regardless of how you go about, using a grid in your layout will help out big time. Using a grid along with a well thought out column strategy and you'll be on the road to success.

There's nothing worse than dropping from a 3 column layout to 2 columns, only to realise you've got a few rogue divs or articles that are spilling over and out of line.

<aside class="post-image-right">
	<img src="http://www.designedbyjack.com/wp-content/uploads/2011/11/goldengrid.jpeg" alt="Golden Grid System" />
	<p class="caption">After a responsive grid? Try the [Golden Grid System](http://goldengridsystem.com/).</p>
</aside>

If you're after an awesome fluid and responsive grid system to use, I'd recommend the [Golden Grid System](http://goldengridsystem.com/). Not if you're looking to support IE7 and below though.

If you want to build your own, give Ethan Marcotte's [article on A List Apart](http://www.alistapart.com/articles/fluidgrids/ "Fluid Grids") a read.

## Responsive imagery

Even if you're still a bit of newbie with responsive web design, you may well have already heard about the fluid images technique.

It doesn't take long to learn, and you'll need to learn it if you're dealing with images in your responsive content (which if it's content heavy, you likely will be&hellip;)

There's no need to repeat what's already been described and taught so eloquently by Ethan (again). Check his article out [here](http://www.alistapart.com/articles/fluid-images/ "Fluid Images").

## Promote content

If your website project is overflowing with content, you need to get serious with its presentation - whether it's positioning, sizing, emphasis, or colouring, it all needs to be considered.

This is particularly important as your website is likely a website that you want users and readers to return to.

And when you have regular readers, you'll have regular changes to the devices that these readers are viewing the website on.

For example, I've read the likes of [Smashing Mag](http://www.smashingmagazine.com/) and [A List Apart](http://www.alistapart.com/) on everything from a 27" iMac, to an Galaxy S2, with an average 18" HP monitor inbetween.

When you captivate readers with regular, quality content, they'll be dropping by anytime of day, on any type of device.

Simply &ldquo;making everything smaller&rdquo; for mobile isn't gonna cut it anymore. Nor is randomly hiding content when you decide there's no room for it.

You need to consider if there's even any additional content that desktop users will want when compared to those on a mobile.

Remember, a desktop version shouldn't mean a bloated version.

It's naive to believe that those on a desktop will want to be served these many additional design elements or content areas you may have in mind. At the same time, you don't want an empty, soulless design.

As the title of this section states - always promote the content.

For example - on a desktop monitor, a large navigation block can work, but will it on a mobile?

<p class="no-m"><img src="http://designedbyjack.com/wp-content/uploads/2011/11/boston-globe-redesign.jpeg" alt="The Boston Globe" /></p>
<p class="caption">The Boston Globe has a whole lot of thought behind its navigation. Mobile users don't want to presented with an epic list of links upon page load - they want real content. Especially on an online newspaper.</p>

The navigation menu could simply have stacked up vertically when viewed on a mobile. Instead, it was rearranged as clickable sub menus.

This is so the user doesn't need to scroll down half the page before they get to the content.

*Always remember, content comes first.*