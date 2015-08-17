
[![Build Status](https://travis-ci.org/onaluf/ngLipsum.svg?branch=master)](https://travis-ci.org/onaluf/ngLipsum) [![Bower version](https://img.shields.io/bower/v/ng-lipsum.svg)](http://bower.io/search/?q=ng-lipsum) [![MIT license](http://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

# ngLipsum
Simple Lorem Ipsum based dummy content generator directive and services for Angular. You can play in [the sandbox](http://onaluf.github.io/ngLipsum/) to get an idea of how it works.

## Usage
You can install the ngLipsum with bower:

```
bower install ng-lipsum
```

Then simply add `ng-lipsum.js` or `ng-lipsum.min.js` from the `dist` folder to your page and add `'ngLipsum'` as a 
dependency of your angular module.

## Service
###ngLipsum.get(motif)
`motif` can be a string of with the format: number[-number] followed by a letter
- number or number-number provide a count of the number of things you want. 
- the letter can be w, W, s or p and describe what can of thing you're counting with the preceding number:
  - w: words
  - W: words with capitalized first letter
  - s: sentenses (between 5 and 15 words begining with an uppercase letter and ending with a dot)
  - p: paragraphs (between 3 and 10 sentenses surrounded with `<p></p>`)

For example: 
- 2w will generate a string with two words in it.
- 2-10s will generate a string with 2 to 10 sentenses in it.

`motif` can be an object with any kind of strucutre where the value are string of the format described above. In this 
cases the methode will return an object with the exact same structure but values replaced with the generated text.

For example:
```
{
    foo: '2w',
    bar: {
        a: '1w',
        b: '1w'
    }
}
```

Will generate an object that could look like:
```
{
    foo: 'nos interpretaris',
    bar: {
        a: 'est',
        b: 'benivole'
    }
}
```

`motif` can be an array whith the following content `[motif, length, toLength]`. This will populate an array of lenght
`length`(or between `lenght`and `toLenght` if provided) where each element is generated by `motif`.

For example:

```
['2W',3]
```

Will generate the following array:
```
['Omnem Sensibus', 'Sibi Confirmat', 'Fidem Est']
```

You can of course combine arrays and object literal.

###ngLipsum.getPromise(motif [, failureRate])
Works just like get() but returns a promise. If `failureRate` is provided the promise will be rejected with a 
probability of `failureRate`. If it's 1 the promise will always be rejected, if it's omited or 0 it will never be 
rejected.


## directive
### ng-bind-lipsum
This attribute directive will replace the content of the element with a generated text that match the provided 
specification.

For example:
```
<div ng-bind-lipsum="3w"></div>
```

Could generate the following result:
```
<div ng-bind-lipsum="3w">autem quibusdam</div>
```
