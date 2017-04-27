# Convert Chinese between simplified and traditional

[![Build Status](https://travis-ci.org/TalkBank/convert-chinese.png)](https://travis-ci.org/TalkBank/convert-chinese)

## Prerequisites

Make sure to have Node installed, e.g., on macOS, you can use Homebrew with

```
$ brew install node
```

## Install

```
$ npm install -g
```

installs `convert-chinese`.

## Usage

Example usage:

```
$ convert-chinese --source zh-TW --target zh-CN test/tw/*.txt
```

converts each of the input files from traditional to simplified output
files with an extra extension `.output` added to the original files' paths.

## Development notes

Note: currently using a fork https://github.com/arthurlacoste/google-translate-api that fixes a bug in the main `google-translate-api` distribution.
