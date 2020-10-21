import string
import webbrowser

import requests

INDEX = "index.html"
JAVASCRIPT = "bookmarklet.js"
TEMPLATE = "index.template"


def main() -> None:
    save(INDEX, render(JAVASCRIPT, TEMPLATE))
    webbrowser.open(INDEX)


def save(filename: str, content: str) -> None:
    with open(filename, mode="w", encoding="utf-8") as fp:
        print(content, file=fp)


def read(filename: str) -> str:
    with open(filename, mode="r", encoding="utf-8") as fp:
        return fp.read()


def minify(javascript: str) -> str:
    url = "https://javascript-minifier.com/raw"
    return requests.post(url, {"input": javascript}).text


def render(input_filename: str, template_filename: str) -> str:
    template = string.Template(read(template_filename))
    return template.substitute(javascript=minify(read(input_filename)))


if __name__ == '__main__':
    main()
