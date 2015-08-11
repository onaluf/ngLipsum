# ngLipsum
Simple Lorem Ipsum based dummy content generator directive and services for Angular.

## Usage
You can install the ngLipsum with bower:

```
bower install ng-lipsum
```

Then simply add `ng-lipsum.js` or `ng-lipsum.min.js` from the `dist` folder to your page and add `'ngLipsum'` as a dependency of your angular module.

## Service
###ngLipsum.get(what)
`what` can be a string of with the format: number[-number] followed by a letter
- number or number-number provide a count of the number of things you want. 
- the letter can be w, W, s or p and describe what can of thing you're counting with the preceding number:
  - w: words
  - W: words with capitalized first letter
  - s: sentenses (between 5 and 15 words begining with an uppercase letter and ending with a dot)
  - p: paragraphs (between 3 and 10 sentenses surrounded with `<p></p>`)

For example: 
- 2w will generate a string with two words in it.
- 2-10s will generate a string with 2 to 10 sentenses in it.

`what` can be an object with any kind of strucutre where the value are string of the format described above. In this cases 
the methode will return an object with the exact same structure but values replaced with the generated text.

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

###ngLipsum.getPromise(what [, failureRate])
Works just like get() but returns a promise. If `failureRate` is provided the promise will be rejected with a probability
of `failureRate`. If it's 1 the promise will always be rejected, if it's omited or 0 it will never be rejected.


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
