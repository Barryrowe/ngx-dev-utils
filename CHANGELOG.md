# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [2.0.0]

## Changes

- Resolves several minor tslint warnings with quotes and spacing.

### Fixes

- Issue #2: PrettyObjectComponent does not reflect object changes after component is initialized.
- Issue #3: PrettyObjectComponent renders a string as just a string instead of iterating its characters individually.

### Breaking changes

- The selector prefix was updated from "adu" to "ndu" to match the package name

  -To Update:

  1. for PrettyObjectComponent changed from ```adu-pretty-object``` to ```ndu-pretty-object```


## [1.0.0]

### Added

- Provides ```PrettyObjectComponent``` that will render a formatted version of any object provided