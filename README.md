# GitHub Bookmarklet

A collection of [bookmarklets](https://en.wikipedia.org/wiki/Bookmarklet) to automate everyday tasks during a review of GitHub pull requests.

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

## Installation

Drag and drop the bookmarklet to the bookmark bar.

## Usage

Navigate to the Conversation tab in an open pull request and click the bookmarklet.
