"""
Generate an HTML page with bookmarklets to drag and drop.

Usage:
$ python build.py
"""

from pathlib import Path
from string import Template
import webbrowser

import requests


BOOKMARKLETS = Path("bookmarklets/")
TEMPLATE = Path("templates/index.t")
INDEX = "index.html"


def main() -> None:
    """Script entry point."""
    template = Template(TEMPLATE.read_text(encoding="utf-8"))
    save(INDEX, template.substitute(dict(bookmarklets())))
    webbrowser.open(INDEX)


def bookmarklets(parent_dir: Path = BOOKMARKLETS):
    """Return a generator of bookmarklets by name."""
    for path in Path(parent_dir).iterdir():
        name = path.name.replace(".", "_")
        content = minify(path.read_text(encoding="utf-8"))
        yield name, content


def minify(javascript: str) -> str:
    """Return a minified JavaScript code."""
    url = "https://javascript-minifier.com/raw"
    return requests.post(url, {"input": javascript}).text


def save(filename: str, content: str) -> None:
    """Write the given content to a specified file."""
    with open(filename, mode="w", encoding="utf-8") as file_object:
        print(content, file=file_object)


if __name__ == "__main__":
    main()
