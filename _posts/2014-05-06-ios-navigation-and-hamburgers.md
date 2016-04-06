---
layout: post
title: iOS, navigation, and hamburgers
---
Remember the days when nearly every app on your iPhone used the same fixed 4 or 5 tab navigation at the bottom of your screen? Extreme gloss and all?

<aside class="blog-image full-width-image">
	<img src="/images/posts/gowalla.jpg" alt="Gowalla for iOS" class="gowalla-image" />
	<p class="image-caption">I have good memories of both Gowalla and this navigation design.</p>
</aside>

I've started to miss those days.

In fairness, a large portion of mainstream apps still use this navigation pattern, albeit with some much needed variation and improvements in visual design. When evaluating some of the apps I tend to use on a daily basis; Facebook, Tweetbot, and Dropbox all utilise it, and it's no surprise for me that they feel like some of the easiest and quickest apps to navigate around.

Nonetheless, app designers regularly seem intent on straying away from the path of standardised navigation design in iOS.

So, if we consider the alternative options, one design pattern in particular has obviously built up a lot of traction.

The off-canvas menu hasn't been lacking negative opinions lately, though most of the discussion tends to be around the icon and the potentially poor clarity of the menu's existence. Instead, I'll be focusing on the actual usability of the design pattern within iOS. I'd actually say off-canvas menus can be a great solution on the web as part of a responsive build for smaller viewports, but a [clear label](http://exisweb.net/menu-eats-hamburger) *definitely* helps.

My dislike for off-canvas menus on my iPhone increased with the release of iOS7, which introduced a new standardised interaction that really damaged the usability of the off-canvas navigation pattern — **swipe to go back**.

Swiping to return to the previous page was an interaction I'd wanted to become a standard in iOS for a while. Instead of aiming at a specific point in the top left corner of the screen, my lazy finger or thumb can now aimlessly pull from anywhere along the left hand side. However I quickly realised how much this clashed with the off-canvas menu, which has been steadily gaining in popularity with seemingly every app update and redesign.

Navigating backwards and revealing the navigation are two of the most regular tasks you'll perform while using an app. It feels confusing for the same interaction to jump between controlling both features, and I seem to get it wrong pretty regularly.

Of course, there is generally some strong logic to how the swipe can switch between each task. If you're at the home screen of the app, the menu will appear. Any screens deeper than the initial view will make sure swiping returns you to the previous view. But if this is the only logic implemented, another fault appears.

A huge percentage of apps using off-canvas navigation implement it so it can only be accessed from the initial home screen. It's a minor fault when your app structure only has two levels, but with more complex apps using five levels of hierarchy, such limited accessibility for the navigation creates a major user experience problem.

I've demoed an example of this with [Spotify for iOS](https://itunes.apple.com/gb/app/spotify-music/id324684580?mt=8 "Spotify in the App Store"). They've used an off-canvas navigation since the start of 2013. Let's say I've searched for a band, ended up viewing a related band, then want to check if this is the same band I recently filled a playlist with. That means switching between two key sections, which requires the off-canvas menu&hellip;

<section class="dark-vid-wrap">
	<div>
		<style>.embed-container { position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
		<div class='embed-container'>
			<iframe src="//player.vimeo.com/video/93538183" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
	</div>
</section>

There's a large amount of swiping and screen switching there. Worst of all, I've had to go back whilst in the Search section, and thus lost the artist I ended up viewing.

However, despite using their app to demo these issues, the design team at Spotify have actually implemented support for a gesture which means the main navigation can be opened up in the lower levels of the app, avoiding this obstacle altogether. By dragging across the top header from a central point to the right, the navigation reveals itself, instead of switching back to the previous screen.

<aside class="blog-image full-width-image">
	<img src="/images/posts/spotify-swipe.jpg" alt="Spotify for iOS - menu interaction" class="spotify-swipe-image" />
	<p class="image-caption">Swipe from the middle of the header to reveal the navigation. A solution, but an awkward one.</p>
</aside>

But here's the big problem with this. I had no idea that support for this gesture existed. In fact I only discovered it when researching the details of this post. I'm inclined to believe that many other iPhone users will be totally naive to this particular gesture too.

When delving further into this discovery, it's clear that this gesture is certainly not a standard alongside off-canvas navigation implementations. Rdio support it (their navigation setup is almost exactly the same as Spotify's experience). However, Gmail, Vine, and Foursquare (as some limited examples) do not. So, the standardisation isn't there, and perhaps most importantly, this design pattern simply doesn't feel intuitive. Even now when I'm aware of it, it seems awkward, and a solution formed from an afterthought.

Still, as a disputant of [absolute truths](/writing/never-use/), I'm certainly not saying off-canvas navigation should be thrown out of the designer's arsenal. I only wish to draw attention to the big problems with the majority of implementations.

Indeed, some app designers are thankfully experimenting with varying UI for these off-canvas navigations. One of the most interesting examples is what [IMDb](https://itunes.apple.com/gb/app/imdb-movies-tv/id342792525?mt=8 "IMDb for iOS") have done, which solves both problems mentioned above.</p>

<section class="dark-vid-wrap">
	<div>
		<style>.embed-container { position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
		<div class='embed-container'>
			<iframe src="//player.vimeo.com/video/94083346" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
		</div>
	</div>
</section>

Visually, their navigation panel slides down from the top, and swipe gestures don't control it at all, so there's no confusion between the "swipe to go back" interaction. Then when heading into sub-screens, the header UI manages to accommodate a back button and the menu icon side by side, so the navigation is always accessible (with no complex gestures required). To help fit these tools in the header, they've removed the current screen title that many apps choose to display, an option that I'd encourage more designers to consider — often the screen content alone explains itself well enough.

For me, this is one of the best solutions I've come across.

IMDb also highlights the biggest and most consistent benefit to off-canvas navigation that I'm sure every designer is aware of, but I've yet to mention. Pages in their app are typically packed full of content, creating long pages to browse through. Fixing a navigation panel to the bottom would reduce the readable viewport, and the IMDb app does feel like an example where this really would damage the user experience.

Nonetheless, as some sort of conclusion to this post, I'd like to insist that designers for iOS should see the fixed tab navigation as the default standard. No matter how good the implementation is, an off-canvas navigation will require two taps to use at a minimum. Tabs are better at constantly informing the user where they currently are in your app, the links are always available, and they'll nearly always be the best option for [encouraging interaction](http://thenextweb.com/dd/2014/04/08/ux-designers-side-drawer-navigation-costing-half-user-engagement/). And of course, they're Apple's choice for a design pattern standardisation. Using fixed tabs for your navigation may not have the slick, shiny visuals and interactions of an off-canvas menu, but they nearly always win for pure usability. Please, experiment with varying navigation types, experimentation is how better ideas come to fruition. But acknowledge the common problems that exist — don't ignore them.

<footer class="footnotes">
	I'm confident with my opinions on the central swipe gesture that Spotify and Rdio have utilised for a more accessible off-canvas navigation, but they certainly aren't data based. If Spotify or Rdio have been awesome enough to install advanced analytics like [Heatmaps](https://heatmaps.io/), and any designers from their teams are reading this (or anyone else who's implemented this interaction), I'd love to know more about the usage stats on what feels like quite an unknown gesture.
</footer>