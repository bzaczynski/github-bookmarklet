# GitHub Bookmarklet

A collection of [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet) to automate everyday tasks during a review of GitHub pull requests.

## Why?

My reviews tend to grow into hundreds of comments, which GitHub doesn't handle very well because it isn't a common scenario. To avoid missing some remarks that could be buried under a bunch of _Load More..._ sections, I needed a way to extend GitHub's functionality so that they would load all with one click. Another missing piece was a toggle button for expanding and collapsing resolved or outdated conversations.

## How Does It Work?

These bookmarklets are snippets of unobtrusive JavaScript code, which use CSS selectors to manipulate the current page's DOM and monkey-patch the browser's Fetch API to intercept HTTP traffic.

## Installation

Navigate to the [index page](https://bzaczynski.github.io/github-bookmarklet/) hosted on GitHub Pages and then drag and drop the bookmarklets to the bookmark bar in your web browser.

## Usage

Click one of the bookmarklets on the Conversation or the Files tab in an open pull request.

<img alt="Loading More Conversation Threads" src="https://raw.githubusercontent.com/bzaczynski/github-bookmarklet/master/docs/demo.gif" width="600">

## Building

Create and activate a virtual environment and install dependencies into it:

```shell
$ python -m venv .venv
$ source .venv/bin/activate
$ python -m pip install -r requirements.txt
```

Render an HTML file with the bookmarklet and open it in your default web browser:

```shell
$ python build.py
```
