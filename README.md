# Convert Chinese between simplified and traditional, for free using Google Translate

[![Build Status](https://travis-ci.org/TalkBank/convert-chinese-free.png)](https://travis-ci.org/TalkBank/convert-chinese-free)

## Prerequisites

Make sure to have Node installed, e.g., on macOS, you can use Homebrew with

```
$ brew install node
```

## Install

Clone this repo and `cd` into it, then run

```
$ npm install -g
```

to install `convert-chinese-free`.

## Usage

Example usage, to convert from traditional (`zh-TW`) to simplified (`zh-CN`):

```
$ convert-chinese-free --source zh-TW --target zh-CN test/tw/*.txt
```

converts each of the input files from traditional to simplified output
files with an extra extension `.output` added to the original files' paths.

Note: as usual, if you want to do something like convert an entire directory tree, using the shell to generate all the paths:

```
$ find rootDir -name '*.txt' -print0 | xargs -0 convert-chinese-free --source zh-TW --target zh-CN
```

will run `convert-chinese-free` on all `.txt` files under `rootDir` recursively.
