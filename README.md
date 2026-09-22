# Politics & American Culture - Study Guide

Study site for the PAC class: https://daniel-projectt.github.io/pac/

Built from the class slides, the Aug 20 - Sep 15 notes, and the chapter 1-5 Canvas quizzes.
Wilson, *American Government: Institutions and Policies*; Thomas, *Politics and Culture: A Christian Perspective*.
Same look as the Greek study sheet.

## Tabs
- Guide - course rules, the Canvas quiz record (replay any quiz, or only the misses), every "know them" item with check-offs
- Chapters 1-5 - notes, flashcards (several decks), match, quiz; chapter 2 also has a timeline
- Faith & Paper - the paper checklist, the class-by-date log, Scripture from class and the Thomas themes
- Practice Exam - questions from every chapter, or only the real Canvas questions

## Install on a phone
Open the link, then "Add to Home Screen". It keeps an offline copy (manifest + service worker).

## Edit and rebuild
Content lives in `src/02*.js`. Rebuild and test with:

    sh build.sh

Optional click-through test in a simulated browser (needs jsdom somewhere):

    node src/test-dom.js <folder containing node_modules/jsdom>

`src/preview.html` is the artwork for `preview.png` and `icon.png`.
