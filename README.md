# Sudoku Hinter

I'm capturing my thoughts on [Medium](https://medium.com/@CoderLyn/building-a-sudoku-hinter-part-1-6a530871198b) if you'd like to follow along.

## Design decisions

* **No squash merging:** I have decided not to squash merge my commits before merging them into the master branch. As it's just me, I figured it'd be nice to have a nice long history to see how I progressed.


## Backlog

**Functions in the `Puzzle` class**

I have a lot of functions here. I imagine I don't actually need them all, and I should rationalise them in the future.

Further, I think most of them should be private functions. I've researched this a little bit, got a bit lost and then decided to leave it alone and come back to it later.


## Acceptance Criteria

**As a user who enters the app**

**I want to** upload my partially finished sudoku puzzle

**So that** I can use this app to give me a hint on how to solve the uploaded puzzle

Implementation options:
* MVP: Enter in the puzzle manually

* Gold standard: OCR / image recognition reader. That way a user could upload a photo of a partially finished sudoku puzzle from my photo library.


**As a user who is stuck on a puzzle**

**I want to** know the technique I need to use to solve the next step of the puzzle

**So that** I can learn about the technique and try to apply it to the puzzle on my own

Implementation options:

* MVP: List the name. User can then google themselves.

* Gold standard: Link to Sudoku Swami's youtube clip, that opens a webview.



**As a user who is stuck after learning about the technique**

**I want to** know which numbers (or maybe rows / columns) I should look for

**So that** I can narrow down where I need to apply the technique

Implementation options:

* MVP: Text, e.g. Row 3

* Gold standard: Highlight the image (don't think I care about the gold standard here)


**As a user who is stuck after knowing which numbers / rows / columns to pinpoint**

**I want to** see the start the of the technique

**So that** I can continue the rest of the technique on my own

Implementation options:

* MVP: Text, e.g. like what Andrew's solver does

* Gold standard: Visual, like with Sudoku Swami's videos


**As a user who is stuck after seeing the start of the technique**

**I want to** step through the rest of the technique at my own pace

**So that** I have the option to complete the technique on my own or to see how it is completed

Implementation options:

* MVP: Text, e.g. like what Andrew's solver does

* Gold standard: Visual, like with Sudoku Swami's videos
