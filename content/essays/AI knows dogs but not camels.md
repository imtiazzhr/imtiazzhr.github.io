---
date: 2026-01-10
description: AI has quietly moved into veterinary practice, from reading X-rays to writing clinical notes. What it's good at, where it fails, and why camels and horses are its blind spot.
tags:
  - ai
  - clinical-practice
draft: false
---

More owners now send me a chatbot's answer along with the photo of the swelling, or affected limb or area. Some of the answers are good. Some are confidently wrong. All of them are written in perfect English, which is part of the problem.

AI didn't arrive in veterinary practice with an announcement. It came in through the side doors: the software that reads radiographs, the analyser that counts worm eggs, the app that turns a consultation into a clinical note. In early 2024, a survey of almost 4,000 veterinary professionals by AAHA and Digitail found that 39% were already using AI tools, and most of them used them every day or every week.

I use some of it myself. I've also seen enough to know where it can fail the animals I treat. This is where I've landed.

## Where AI already is

**Imaging.** Services such as SignalPET, Vetology and Antech's RapidRead read radiographs in minutes and can pass difficult cases to a radiologist. All three are built for dogs and cats.

**The lab.** Zoetis's Vetscan Imagyst uses AI to read faecal samples, blood smears and skin cytology, and since 2023 it can count strongyle and *Parascaris* eggs in horse dung in about ten minutes. IDEXX's inVue Dx, launched in 2024, analyses ear cytology and blood cells without a slide.

**Movement.** Sleip measures asymmetry in a horse's gait from a smartphone video. In a validation study co-authored by the company's researchers, its measurements differed from a multi-camera motion-capture system by about two millimetres on average.

**Paperwork.** AI scribes such as ScribbleVet, Talkatoo and CoVet record the consultation and draft the SOAP note. Human medicine is further ahead: at Kaiser Permanente, more than 3,400 doctors used ambient AI scribes in over 300,000 patient visits within ten weeks.

**Everyone's pocket.** Owners and trainers ask a chatbot before they ask me. Large language models now score at a passing level on medical licensing-style questions, but the same research found their answers still fell short of clinicians'.

## What it's good at

AI is at its best where there's plenty of data and a clear pattern: common species, common problems, the same view taken the same way a thousand times. It doesn't get tired at 3 am, it doesn't skip the last film in a series, and it doesn't mind doing paperwork.

The paperwork is where I'd most like help. The hour a day I spend writing records is the hour I'd most like back. That's the argument Eric Topol makes in *Deep Medicine*: that AI's biggest promise for clinicians is "the gift of time", time for the patient instead of the keyboard.

## The camel problem

Here's what worries me. AI learns from data, and most veterinary data comes from dogs and cats. A model that's excellent on a Labrador's chest has no reason to be good on a camel's fetlock, and it won't tell you it's out of its depth. You'll get the same confident report.

Camel medicine is nearly invisible in that data. There is early work in the region: researchers at the Fujairah Research Centre have trained a deep-learning model to recognise when farmed camels eat, drink, stand, sit and sleep. But I haven't found a single radiology tool trained on dromedary limbs.

Three more things worry me:

- **Nobody checks it before it's sold.** In the US, veterinary devices don't need approval before they go on the market, and the FDA can only act afterwards if a product is misbranded or adulterated. Veterinary radiologists have pointed out that there's no formal validation for these tools, and proposed a framework for vets to evaluate them. As one review put it, using AI without that is "putting the AI cart before the horse".
- **It's fluent when it's wrong.** A language model delivers errors in the same confident tone as facts. A dose in the wrong units reads just as smoothly as the right one.
- **The signature is still mine.** Whatever the software suggests, I'm the one who signs the record and answers to the owner.

Most vets share these worries. In the AAHA survey, the top concerns were reliability and accuracy (70%) and data security (54%).

## How I use it

- **Drafting** records, discharge instructions and client messages, always edited before they go out.
- **Translating** short, literal instructions for owners and handlers, and checking them. I wrote about why in [[My patients can't talk, and my Arabic is broken]].
- **Reading**: summarising papers, but I read the paper itself before I act on it.
- **Never** for doses without a formulary, the final read on an image, or anything I can't check myself.

## What I think vets should do

1. **Learn it.** Vets who understand these tools will use them better than vets who pretend they aren't there.
2. **Ask what it was trained on.** Before you trust a tool, ask which species and which cases it was built and tested on. If the answer is dogs and cats, treat its camel output as a guess.
3. **Keep a human in the loop.** AI suggests; the vet decides.
4. **Protect clients' data.** Know where recordings and records go before you press record.
5. **Build our own data.** The Gulf has some of the best camel and horse hospitals in the world, and years of radiographs, ultrasound scans and race records. Good AI needs vets to curate good data. If anyone should build AI for camels, it's us.

I once wrote a satire about where all this could end, [[VetBot will see your camel now]]. The real version is less dramatic and more useful: AI that takes the typing and the tedium, and leaves the vet more time for the animal and the person holding the lead rope.

## References

- Digitail & AAHA (2024). 39.2% of veterinary professionals use AI tools in their practice. [digitail.com](https://digitail.com/blog/39-2-of-veterinary-professionals-use-ai-tools-in-their-practice-digitail-and-aaha-survey/)
- Radiology AI: [SignalPET](https://www.signalpet.com/), [Vetology AI](https://vetology.net/ai/), [Antech RapidRead](https://www.antechdiagnostics.com/imaging-services/rapidread/)
- Zoetis (2023). AI dermatology and AI equine faecal egg count added to Vetscan Imagyst. [news.zoetis.com](https://news.zoetis.com/press-releases/press-release-details/2023/Zoetis-Expands-Diagnostic-Expertise-With-Additions-of-AI-Dermatology-and-AI-Equine-Fecal-Egg-Count-Analysis-to-Vetscan-Imagyst-Platform-/default.aspx)
- IDEXX (2024). IDEXX announces slide-free cellular analyzer, IDEXX inVue Dx. [ir.idexx.com](https://ir.idexx.com/news-events/press-releases/detail/116/idexx-announces-revolutionary-slide-free-cellular-analyzer-idexx-invue-dx-transforming-in-clinic-workflows)
- Lawin, F. J. et al. (2023). Is markerless more or less? Comparing a smartphone computer vision method for equine lameness assessment to multi-camera motion capture. *Animals*, 13(3), 390. [doi:10.3390/ani13030390](https://doi.org/10.3390/ani13030390)
- Tierney, A. A. et al. (2024). Ambient artificial intelligence scribes to alleviate the burden of clinical documentation. *NEJM Catalyst*, 5(3). [doi:10.1056/CAT.23.0404](https://doi.org/10.1056/CAT.23.0404)
- Singhal, K. et al. (2023). Large language models encode clinical knowledge. *Nature*, 620, 172–180. [doi:10.1038/s41586-023-06291-2](https://doi.org/10.1038/s41586-023-06291-2)
- Topol, E. (2019). *Deep Medicine: How Artificial Intelligence Can Make Healthcare Human Again*. Basic Books.
- Al-Khateeb, R., Mansour, N., Mirza, S. B. & Lamghari, F. (2024). Deep learning-based analysis of daily activity patterns of farmed dromedary camels. *Frontiers in Animal Science*, 5, 1445133. [doi:10.3389/fanim.2024.1445133](https://doi.org/10.3389/fanim.2024.1445133)
- US Food and Drug Administration. How FDA regulates animal devices. [fda.gov](https://www.fda.gov/animal-veterinary/animal-health-literacy/how-fda-regulates-animal-devices)
- Joslyn, S. & Alexander, K. (2022). Evaluating artificial intelligence algorithms for use in veterinary radiology. *Veterinary Radiology & Ultrasound*, 63(S1), 871–879. [doi:10.1111/vru.13159](https://doi.org/10.1111/vru.13159)
- Cohen, E. B. & Gordon, I. K. (2022). First, do no harm. Ethical and legal issues of artificial intelligence and machine learning in veterinary radiology and radiation oncology. *Veterinary Radiology & Ultrasound*, 63(S1), 840–850. [doi:10.1111/vru.13171](https://doi.org/10.1111/vru.13171)
- Appleby, R. B. & Basran, P. S. (2022). Artificial intelligence in veterinary medicine. *Journal of the American Veterinary Medical Association*, 260(8), 819–824. [doi:10.2460/javma.22.03.0093](https://doi.org/10.2460/javma.22.03.0093)
