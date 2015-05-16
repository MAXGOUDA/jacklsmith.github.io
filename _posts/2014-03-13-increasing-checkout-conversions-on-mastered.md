---
layout: post
title: Increasing checkout conversions on Mastered
---
I've been working on [Mastered](http://www.mastered.com) since last autumn. Following the launch at New Year, it's mainly been good news with some fantastic feedback and a growing number of paying customers.

However, one statistic that had been consistently bothering us was the unusually high drop off rate within the checkout page. With a successful conversion rate of 12&#37;, it felt like that was a priority to try and improve on. While I felt we'd have to accept a slightly lower than [average percentage](http://baymard.com/lists/cart-abandonment-rate "Some stats on abandonment rate") due to our fairly insistent checkout prompting within the free trials provided (i.e. a *lot* of people will end up on the checkout), 12&#37; still felt too low.

With the existing checkout design already relatively simple, it was tricky to envisage changes that would really produce improvements to the conversions. As we're not selling physical products, no addresses are required. There's no basket/cart functionality to design around, with only single purchases supported. And Stripe's standard payment form had always done a good job with handling errors, formatting and such.

So, the changes and additions decided on would all be fairly minimal tweaks, but the hope was that together they'd have a stronger effect.

**The average conversion rate is now approaching 20&#37; in the period since the tweaks (up 8&#37;), so I thought I'd quickly run through the changes that I made.**

### Before

<img src="/images/posts/mastered-checkout-old.png" alt="Previous checkout design" class="blog-image" />

### After

<img src="/images/posts/mastered-checkout-new.png" alt="Updated checkout design" class="blog-image" />

### An extra click for the discount form

<img src="/images/posts/mastered-discount-example.gif" alt="Discount example" class="blog-image right discount-blog-image" />
Research showed that people were more likely to put the checkout on hold, and go hunting for potential discount codes around the web, when the discount form was sat, ready and waiting in the checkout. Of course they'll often return, but the more persuasive we can be about keeping them on the checkout page, the better. Hiding the form behind a more subtle link (which toggles form visibility) seemed to make people less insistent that they could find a valid discount code elsewhere.

### Confirming the purchase delivery method

<img src="/images/posts/mastered-delivery-confirm.png" class="blog-image right delivery-blog-image" />
As previously mentioned, Mastered don't sell physical items. Customers pay for fashion education courses, where they'll get access to an online classroom with video streaming and written exercises/articles. Not everyone in the customer base is totally tech savvy, and there had sometimes been confusion from customers with how they'd actually get their hands on the course material.

* "Will it be instantly available?"
* "Do I need to log in elsewhere to access it?"
* "Do I need to download anything?"

Answers to these questions are elsewhere on the site, but naturally sometimes get missed. I thought succinctly reinforcing the answers directly before payment would put a few minds at ease.

### Refining the payment form flow

We use [Stripe](https://stripe.com/) to power the payments system, which is absolutely the best provider you can use right now. The form we'd implemented had always been the default version, with only a few tweaks to the error formatting implemented. My main dislike was with the expiry date information being split into two select boxes — controls that don't feel great to navigate, and the needless creation of two form elements when one would suffice. I also wanted to add proper live validation while customers fill in the form.

Everything I planned had conveniently been created already by Stripe via their open source JS library, [jQuery.payment](https://github.com/stripe/jquery.payment). Implementing this meant we could have the following&hellip;

* Validation of card numbers (length), with live feedback informing the customer what card type they were using (via a slick little icon). Also, space formatting between each four numbers.
* Forced date formatting — only two numbers for each value, a slash automatically added to split the month and year.
* Max length of four numbers on the security code.

Here's how it works now&hellip;

<div class="video-iframe-wrap">
	<style>.embed-container { position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>
	<div class='embed-container'>
		<iframe src='https://player.vimeo.com/video/88900876?autoplay=1&amp;loop=1' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
	</div>
</div>

<br />*Note: the error message for that invalid card number does appear a few milliseconds afterwards. Relying on a red border alone wouldn't be ideal.*

Typically, just a few weeks after implenting all of this, Stripe took all that logic from jQuery.payment, mixed it with some beautiful UI design, and released a new embeddable payment form, [Checkout](https://stripe.com/checkout). Nonetheless, I'm not sure we'll switch from a fully customisable code-base to Checkout, especially after creating such a similar user experience, but it's certainly worth checking out (awful accidental puns ftw).

### Confirming SSL protection

<img src="/images/posts/mastered-ssl-secure.png" class="blog-image right ssl-blog-image" />
Simple confirmation of SSL protection, with some people seemingly still unaware of what the lock next to the browser's URL means.

### Reinforcing money back guarantee, and contact details

To finish off the page revamp, I added a final mention of the 14 day money back guarantee that Mastered offer, directly below the payment form.

<img src="/images/posts/mastered-money-back.png" class="blog-image" />

This instantly makes clicking the submit button above feel like less of a commitment. Though there's barely been any money back requests as of yet, so clearly the product is doing all the right things!

***

These design tweaks seem to be performing well for Mastered, but that may not be the case for all websites. Still, hopefully it's all food for thought, especially for those of you who are also looking to improve already very simple checkout designs.

(Make sure you have a good analytics service running on your payment user journey. We've been using [Kissmetrics](https://www.kissmetrics.com "Visit Kissmetrics") lately, which feels like a dream to navigate when compared to Google Analytics.)