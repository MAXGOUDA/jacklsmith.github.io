---
layout: post
title: Quick wins
---

A little earlier in the week, [Ben](http://benhowdle.im) and I released a small little side project called [Permeate](http://permeate.im), an app that calculates and displays the 10 most popular recent tweets from the people you follow. It's a great way to catch up on the more interesting and useful things without having to skim through everything in your Twitter timeline.

We both thought it would be useful for us, so we went ahead and made it. By the usage stats and feedback we've had, lots of people agree.

It's a laughably simple app, but nonetheless, people seem interested in the tech behind it (which is always good). I'll hand over to Ben to run through it.

## The tech

Permeate is currently powered by PHP. Some of you may be perplexed at why I didn't use Node/Ruby, but in the spirit of "getting things done", just stick to what you know. Instead of Googling x, y, z in *new language*, you can use the strongest part of your existing knowledge to develop really quickly. By the by, I'm also learning Ruby and Node, but this project wasn't a place for me to learn but to produce!

So, we use the Twitter API, which allows us to grab the latest 200 tweets (max) from a user's timeline. This gives us a fairly decent set of metrics to analyse, although if you're following 1000+ people, then 200 tweets probably gives us about an hour of Twitter to work with. Twitter aren't that friendly with text formatting in their API, so unfortunately we've had to strip out a lot of special characters with PHP. This has meant losing a lot of foreign characters, i.e. umlauts, etc, something I want to address a little more.

My favourite thing about coding Permeate was working out the [algorithm](http://www.youtube.com/watch?v=BzZRr4KV59I) to determine what is popular. Initially, we released Permeate with just a basic sum of RT count + favourite count. However a few people, myself included, realised that their timeline was monopolised by Stephen Fry, BBC Breaking News and Justin Bieber (I won't name who follows the Biebz). So we tweaked it. The formula is now (RT count + favourite count) / follower count. This hopefully smooths out the extremes. We'll continue to tweak the algorithm and try to give a better impression of "popular" as we move forward!

## Making a quick win happen

That's how we've started to describe a [handful](http://benhowdle.im/svgeezy/) [of](http://ihi.im/) [things](http://mobosrc.co.uk/) that me and Ben have worked on. While we've got bigger projects in the works, we've always enjoyed hacking out these simple ideas and lightweight apps over the course of a weekend, or a few evenings during the week.

Neither of us spent more than two evenings designing or writing code for Permeate. We're chuffed with that.

Side projects are always beneficial, but as Ben briefly mentioned above, you can either focus on making your idea happen as quickly as possible, or take a different direction instead, whether that's utilising total freedom by experimenting with new technologies or techniques, or focusing more on perfection, especially if you're building something you're planning to sell (i.e. more of a product than a "hack").

You can decide on the suitable process depending on what you want the outcome to be. However, I'm going to make a safe assumption that most of us just want to see a basic idea come to fruition more than anything else. A quick win.

To make something in a matter of days, you need one basic idea, and the willpower not to expand on it. Hold off on extra features until it's shipped, when you can collate real user feedback. Use tools and languages that you feel most comfortable around, and work best for the job in hand. If you can't do it all yourself, bring someone else onboard. Permeate's code around the Twitter API would have taken me 2 weeks, not 2 nights. If you don't know anyone who can help you out, make friends in the industry!

There's nothing more motivational than rapidly building something. They'll always be awesome concepts and useful tools that can be built in a matter of days, even if they seem far too basic to you. Make. Ideas. Happen. Try a quick win.