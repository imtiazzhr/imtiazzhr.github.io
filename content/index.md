---
title: "imtiaz's notes"
description: Veterinary clinician in Abu Dhabi. Essays, articles and clinical notes on veterinary work, productivity, philosophy and technology.
---

<div class="iz-hero">
  <div class="iz-avatar"><img src="./attachments/imtiaz.jpg" alt="Imtiaz Zahoor" width="176" height="176"></div>
  <p class="iz-kicker">Hi, I'm Imtiaz.</p>
  <p class="iz-headline">I'm a veterinary clinician. I treat animals, and write about the work, productivity, philosophy, technology and building things on the side.</p>
  <p class="iz-sub">DVM · Equine and camel medicine, lameness and diagnostic imaging · Abu Dhabi</p>
  <nav class="iz-nav"><a href="./essays/">Essays</a><a href="./articles/">Articles</a><a href="./vet-notes/">Vet notes</a><a href="./books/">Books</a><a href="./now">Now</a><a href="./about">About</a><a href="./cv">CV</a></nav>
</div>

I'm a veterinary clinician with about ten years of experience in equine and camel practice across Pakistan, Qatar, Oman, Saudi Arabia and the UAE. My work centres on sports medicine, lameness, diagnostic imaging and reproduction. My [[vet-notes/index|clinical notes]] began in 2020 while I was preparing for licensing exams, and they have since helped many colleagues prepare for theirs.

Outside the clinic I write about productivity, philosophy and technology, and I build things, including software for veterinary practices. You can find my [[cv|CV here]], or [email me](mailto:imtiazdvm@gmail.com).

<p class="iz-label">Start here</p>
<ul class="iz-start">
  <li><span>Story</span><a href="./essays/what-the-job-i-hated-taught-me">What the job I hated taught me</a><em>From failed interviews to camel sports medicine.</em></li>
  <li><span>Clinical</span><a href="./vet-notes/">Clinical vet notes</a><em>More than a hundred linked notes on diseases, anesthesia, imaging and drugs in horses, camels and livestock.</em></li>
  <li><span>Guide</span><a href="./articles/how-to-get-your-vet-licence-in-the-uae-and-qatar">How to get your vet licence in the UAE and Qatar</a><em>Attestations, documents and exams, step by step.</em></li>
</ul>

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

## Books

- [![The 12 Week Year](attachments/books/the-12-week-year.jpg)](books/The%2012%20Week%20Year.md)
- [![Thinking, Fast and Slow](attachments/books/thinking-fast-and-slow.jpg)](books/Thinking,%20Fast%20and%20Slow.md)
- [![Man's Search for Meaning](attachments/books/man-s-search-for-meaning.jpg)](books/Man's%20Search%20for%20Meaning.md)
- [![The Personal MBA](attachments/books/the-personal-mba.jpg)](books/The%20Personal%20MBA.md)
- [![The Lean Startup](attachments/books/the-lean-startup.jpg)](books/The%20Lean%20Startup.md)
- [![The Black Swan](attachments/books/the-black-swan.jpg)](books/The%20Black%20Swan.md)
- [![The Little Book of Stoicism](attachments/books/the-little-book-of-stoicism.jpg)](books/The%20Little%20Book%20of%20Stoicism.md)
- [![Homo Deus](attachments/books/homo-deus.jpg)](books/Homo%20Deus.md)
- [![The 4-Hour Workweek](attachments/books/the-4-hour-workweek.jpg)](books/The%204-Hour%20Workweek.md)
- [![Greenlights](attachments/books/greenlights.jpg)](books/Greenlights.md)
- [![A Promised Land](attachments/books/a-promised-land.jpg)](books/A%20Promised%20Land.md)
- [![As a Man Thinketh](attachments/books/as-a-man-thinketh.jpg)](books/As%20a%20Man%20Thinketh.md)
- [![Sapiens](attachments/books/sapiens.jpg)](books/Sapiens.md)
- [![Siddhartha](attachments/books/siddhartha.jpg)](books/Siddhartha.md)
- [![Reminiscences of a Stock Operator](attachments/books/reminiscences-of-a-stock-operator.jpg)](books/Reminiscences%20of%20a%20Stock%20Operator.md)
- [![The Alchemist](attachments/books/the-alchemist.jpg)](books/The%20Alchemist.md)
- [![The Forty Rules of Love](attachments/books/the-forty-rules-of-love.jpg)](books/The%20Forty%20Rules%20of%20Love.md)
- [![The Kite Runner](attachments/books/the-kite-runner.jpg)](books/The%20Kite%20Runner.md)
- [![Animal Farm](attachments/books/animal-farm.jpg)](books/Animal%20Farm.md)
- [![To Kill a Mockingbird](attachments/books/to-kill-a-mockingbird.jpg)](books/To%20Kill%20a%20Mockingbird.md)
- [![Elon Musk](attachments/books/elon-musk.jpg)](books/Elon%20Musk.md)
- [![The Subtle Art of Not Giving a F*ck](attachments/books/the-subtle-art-of-not-giving-a-f-ck.jpg)](books/The%20Subtle%20Art%20of%20Not%20Giving%20a%20F-ck.md)
- [![Jinnah of Pakistan](attachments/books/jinnah-of-pakistan.jpg)](books/Jinnah%20of%20Pakistan.md)
- [![Shahaab Nama](attachments/books/shahaab-nama.png)](books/Shahaab%20Nama.md)

A few of the books I've read. See [[books/index|all 93 books]], with summaries and key insights.
