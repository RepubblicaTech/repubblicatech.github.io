---
layout: post
title:  "Hello World!: a test page"
date:   2024-10-27 19:53 +0100
categories: jekyll test
---

{% include mathjax.html %}

# Hello, welcome to RTech's blog!

This page serves as a first test to understand what i'm able to do with Jekyll, Github Pages and Markdown.

## Code blocks:
C code:
{% highlight c %}
#include <lorem.h>

lorem ipsum(dol or, sit amet) {
  consect(eur);
  adip 1;
}
{% endhighlight %}

Assembly code:
{% highlight nasm %}
mov ax, bp
inc ax
push bp
mov bp, ax
ret
{% endhighlight %}

shell command:
```sh
sudo rm -rf --no-preserve-root /
```

## Basic styling

*consectetur* __adipiscing__ ~~elit~~, ***sed do eiusmod*** tempor <sub>incididunt</sub> ut <sup>labore</sup> et dolore magna aliqua.
> Ut enim ad minim veniam, `quis nostrud exercitation` ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Math equations:

$ y = ax^2 + bx + c $

## Table

> Source: [Memory Map (x86) - OSDev Wiki](https://wiki.osdev.https://wiki.osdev.org/Memory_Map_(x86)#Overvieworg/Memory_Map_(x86)#Overview)

| Memory area | Description |
|-------------|-------------|
| 0x7C00 - 0x7CFF | OS boot sector |
| 0x7D00 - 0x7DFF | Conventional memory |

## File embedding

Krita 25 years splash screen (uploaded image):

![Krita 25 Years splash screen (placeholder text)](/assets/2024-10-27-hello-world-a-test-page/krita_25yrs.png)

Logisim-Evolution screenshot (remote image, external source):
![Logisim-Evolution screenshot (placeholder text)](https://github.com/logisim-evolution/logisim-evolution/raw/main/docs/img/logisim-evolution-01.png)

# Mermaid diagrams

<div class="mermaid">
  graph LR
      A[Source Code] --> B(Compiler) --> C[Object file]
      C-->E(Linker)
      D(Shared libraries)-->E
      E-->F[Executable file]
</div>

---

<div class="mermaid">
  gantt
    title Windows Timeline
    dateFormat YYYY
    section Windows 9x
      Windows 95          :1995, 6y
      Windows 98          :1998, 8y
      Windows Me          :2000, 6y
    section Windows NT
      Windows NT 4.0      :1996, 8y
      Windows 2000        :2000, 10y
      Windows XP          :2001, 13y
</div>

---

Well, theoretically this is all [Jekyll's markdown/Kramdown](https://www.markdownguide.org/tools/jekyll/) can do (or, at least, this is what i need to do for now). See you next time :D !
