---
title: Imtiaz Zahoor
description: Veterinarian in Abu Dhabi. Essays, articles and clinical notes on horses, camels, work and life.
---

<div class="iz-hero">
  <div class="iz-avatar" title="Imtiaz Zahoor">IZ</div>
  <p class="iz-kicker">Hi, I'm Imtiaz.</p>
  <p class="iz-headline">I treat horses and camels, and write about the work, staying focused, and building things on the side.</p>
  <p class="iz-sub">Veterinarian in Abu Dhabi · sports medicine, lameness and diagnostic imaging</p>
  <nav class="iz-nav"><a href="./essays/">Essays</a><a href="./articles/">Articles</a><a href="./vet-notes/">Vet notes</a><a href="./now">Now</a><a href="./about">About</a></nav>
</div>

Welcome! You've stumbled upon my working notes. I've worked with horses and camels in Pakistan, Qatar, Oman, Saudi Arabia and the UAE for about ten years. My [[vet-notes/index|clinical notes]] began in 2020 as part of my practice and my preparation for vet exams, and over time they've become a resource that many vets have used to pass their own exams.

They're mostly written for myself, so some are rough, but I share them anyway and keep them evergreen. If something could be better, [email me](mailto:imtiazdvm@gmail.com).

<p class="iz-label">Start here</p>
<div class="iz-cards">
  <a class="iz-card" href="./essays/what-the-job-i-hated-taught-me"><span>Story</span><strong>What the job I hated taught me</strong><em>From failed interviews to camel sports medicine.</em></a>
  <a class="iz-card" href="./vet-notes/"><span>Clinical</span><strong>Clinical vet notes</strong><em>More than a hundred linked notes on diseases, anesthesia, imaging and drugs in horses, camels and livestock.</em></a>
  <a class="iz-card" href="./articles/how-to-get-your-vet-licence-in-the-uae-and-qatar"><span>Guide</span><strong>How to get your vet licence in the UAE and Qatar</strong><em>Attestations, documents and exams, step by step.</em></a>
</div>

## Writing

```base
filters:
  and:
    - or:
        - file.inFolder("essays")
        - file.inFolder("articles")
    - file.name != "index"
formulas:
  when: date(note.date).format("MMM YYYY")
views:
  - type: list
    name: Writing
    order:
      - file.name
      - formula.when
    sort:
      - property: date
        direction: DESC
```

## Library

- [![The 12 Week Year](attachments/books/the-12-week-year.jpg)](https://openlibrary.org/works/OL19968189W)
- [![Thinking, Fast and Slow](attachments/books/thinking-fast-and-slow.jpg)](https://openlibrary.org/works/OL15992072W)
- [![Man's Search for Meaning](attachments/books/man-s-search-for-meaning.jpg)](https://openlibrary.org/isbn/9780807014295)
- [![The Personal MBA](attachments/books/the-personal-mba.jpg)](https://openlibrary.org/works/OL15473892W)
- [![The Lean Startup](attachments/books/the-lean-startup.jpg)](https://openlibrary.org/works/OL16086010W)
- [![The Black Swan](attachments/books/the-black-swan.jpg)](https://openlibrary.org/works/OL3295030W)
- [![The Little Book of Stoicism](attachments/books/the-little-book-of-stoicism.jpg)](https://openlibrary.org/works/OL21930889W)
- [![Homo Deus](attachments/books/homo-deus.jpg)](https://openlibrary.org/isbn/9780062464316)
- [![The 4-Hour Workweek](attachments/books/the-4-hour-workweek.jpg)](https://openlibrary.org/works/OL3353439W)
- [![Greenlights](attachments/books/greenlights.jpg)](https://openlibrary.org/works/OL21911019W)
- [![A Promised Land](attachments/books/a-promised-land.jpg)](https://openlibrary.org/works/OL22235242W)
- [![As a Man Thinketh](attachments/books/as-a-man-thinketh.jpg)](https://openlibrary.org/works/OL43024W)

Books I've read and kept notes on.
