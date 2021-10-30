# Front End Developer / Module 2 - HTML

[:arrow_backward: Front End Developer](/README.md)

---

- [Front End Developer / Module 2 - HTML](#front-end-developer--module-2---html)
  - [Markup languages](#markup-languages)
  - [About HTML](#about-html)
    - [History](#history)
    - [HTML5](#html5)
  - [Structure and syntax](#structure-and-syntax)
  - [Metadata](#metadata)
  - [Text formatting](#text-formatting)
  - [Lists](#lists)
  - [Media](#media)
    - [Images](#images)
      - [SVG](#svg)
      - [Canvas](#canvas)
    - [Audio](#audio)
      - [Accesibility concerns](#accesibility-concerns)
    - [Video](#video)
      - [Accesibility concerns](#accesibility-concerns-1)
  - [Hyperlinks](#hyperlinks)
  - [Tables](#tables)
  - [Forms](#forms)
    - [Non-semantic structural elements](#non-semantic-structural-elements)
    - [Semantic structural elements](#semantic-structural-elements)
  - [Sources](#sources)

## Markup languages

A markup language is a computer language that uses tags to define elements within a document. Markup languages are used to annotate a document in a way that is syntactically distinguishable from the text, and can assign semantic meaning to the text.

Types of markup languages:

- Presentational markup - used by traditional word-processing systems, implemented as binary codes embedded within document text (e.g. Microsoft Word).
- Procedural markup - markup is embedded in text, which then provides instructions for programs to process the text (e.g. TeX).
- Descriptive (logical) markup - markup is used to label parts of the document rather than to provide specific instructions as to how they should be processed (e.g. HTML).

## About HTML

HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.

HTML consists of a series of elements, which you use to enclose, wrap, or mark up different parts of the content to make it appear or act a certain way. The web browser parses the HTML to construct the DOM tree from which a render tree is constructed, then a layout is generated and the render tree is painted to the browser screen.

### History

HTML was initially developed by physicist Tim Berners-Lee at CERN as part of a proposed Internet-based hypertext system for CERN researchers to use and share documents.

The standard is currently being developed and maintained by the Web Hypertext Application Technology Working Group (WHATWG), founded by individualds from leading web browser vendors in 2004.

HTML is standardised by the World Wide Web Consortium (W3C), founded and currently led by Tim Berners-Lee.

| Version   | Year |
| --------- | ---- |
| HTML      | 1993 |
| HTML 2.0  | 1997 |
| HTML 4.01 | 1999 |
| XHTML     | 2000 |
| HTML5     | 2014 |

### HTML5

Notable HTML5 features:

- Semantics - allowing you to describe more precisely what your content is.
- Connectivity - allowing you to communicate with the server in new and innovative ways.
- Offline and storage - allowing webpages to store data on the client-side locally and operate offline more efficiently.
- Multimedia - making video and audio first-class citizens in the Open Web.
- 2D/3D graphics and effects - allowing a much more diverse range of presentation options.
- Performance and integration - providing greater speed optimization and better usage of computer hardware.
- Device access - allowing for the usage of various input and output devices.
- Styling - letting authors write more sophisticated themes.

HTML5 adheres to the "separation of concerns" design principle, meaning it is separated into distinct sections so that each section addresses a separate concern: HTML provides information, CSS provides appearance, JavaScript provides behavior.

> :clown: **Fun fact!**
>
> HTML originally defined 17 tags, 11 of which still exist as part of HTML5.
> 
> A comprehensive HTML tag history is presented on [Martin Rinehart's website](http://www.martinrinehart.com/frontend-engineering/engineers/html/html-tag-history.html).

## Structure and syntax

The building block of an HTML document is the **HTML tag**.

We use tags to _tag_ or _mark up_ plain text content in a way that gives it structure and meaning. This is why HTML and other languages are called _markup languages_.

Every tag has its tag name written between `<` and `>` characters. For example, the paragraph tag is written as `<p>`. Tags can also contain other tags or plain text as content. The content is enclosed in a closing tag which uses the forward slash character `/` and is paired with the opening tag. For example, the closing paragraph tag is written as `</p>`.

```html
<p>This is a paragraph.</p>
```

Tags can also contain attribute-value pairs that assign the tag additional information.

```html
<tagname attribute="value">Content</tagname>
```

Some attributes are global, meaning they can be defined on any tag. Commonly used global attributes are:

|Attribute|Example|Meaning|
|-|-|-|
|class|`<button class="button primary">Submit</button>`|A space-separated list of the classes of the element. Classess allow CSS and JavaScript to select and access specific elements via class selectors. More on that in the CSS and JS modules.|
|data-*|`<span data-copyright></span>`|Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the HTML and its DOM representation that may be used by scripts.|
|hidden|`<a href="/profile" hidden>Profile</a>`|Indicates that the element is not yet, or is no longer, relevant. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. The attribute must not be used to hide content that could legitimately be shown.|
|id|`<section id="about-us"></section>`|Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).|

A complete list of global attributes can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).

Some attributes are only available on specific tags. More on that later.

HTML tags that expect no content are considered self-closing. Self-closing tags can have an optional forward slash (`/`) character at the end of the tag, but as of HTML5:

```html
<hr>
<hr />
```

An HTML document has the following basic structure:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Document title</title>
    </head>
    <body>
        Document content
    </body>
</html>
```

A document type declaration (`<!DOCTYPE>`) is an instruction that associates a particular standard generalised markup language (SGML) with a document type definition. The  document type declaration is retained in HTML5 as a "mostly useless, but required" header only to trigger "standards mode" in common browsers.

The `<html>` element is the root element of the document and wraps all content on the entire page.

The `<head>` element acts as a container for metadata such as keywords and page description. In the case above, the metadata sets the content character set to UTF-8 and the document title in the browser tab to "Document title".

The `<body>` element contains all the content that you want to show to the users.

HTML comments aren't visible when the page is browsed. They are written as follows:

```html
<!-- Comment -->
```

W3C has recommended authoring practices for common design patterns and widgets. [Read more](https://www.w3.org/TR/wai-aria-practices-1.1/).

> :pencil: **Homework!**
> 
> Follow example [1](examples/01-document). Create a new HTML document, give it your own title, update the comment, and add some content inside the document body. Open the document in your browser of choice and note how comments and content are handled differently by the browser.

## Metadata

Meta elements in the head of the document provide metadata (data about the HTML document). Head content is not displayed on the page, but informs the browser of what is displayed by the document body and can affect its presentation.

Examples:

- `<title>My document title</title>`
- `<meta charset="utf-8">`
- `<meta name="viewport" content="width=device-width,initial-scale=1.0">`
- `<meta name="author" content="John Doe">`
- `<meta name="description" content="My site description for SEO">`
- `<link rel="stylesheet" href="style.css">`

The Open Graph protocol (https://ogp.me/) enables any web page to become a rich object in a social graph. It relies on specific metadata being present in the HTML head (e.g. `og:title`).

Metadata can sometimes be attributed to other HTML elements as well. For example:

- `<html lang="en-US">`
- `<p lang="en-US">This text is is American English.</p>`

> :point_up: **Note!**
>
> @todo metadata and seo

> :pencil: **Homework!**
> 
> Follow example [2](examples/02-metadata). Add metadata to an existing or new HTML document.

## Text formatting

Most structured text consists of headings and paragraphs. Structured content makes the reading experience easier and more enjoyable.

In HTML, each paragraph has to be wrapped in a `<p>` element, like so:

```html
<p>Quidem dictum dolores est phasellus enim labore et.</p>
```
Each heading has to be wrapped in a heading element:

```html
<h1>A feugiat conubia, rutrum.</h1>
```

There are six heading elements - `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>`. Each element represents a different level of content in the document with `<h1>` representing the main heading.

A line break is represented by the `<br>` element.

Preformatted text is represented by the `<pre>` element. Preformatted text is rendered as written in the document. Whitespace characters aren't collapsed into one.

Text formatting tags:

| Tag | Effect | Semantic alternative |
| --- | --- | --- |
| `<b>` | Bold   | `<strong>` |
| `<i>` | Italic | `<em>` |
| `<u>` | Underline | `<ins>` |
| `<s>` | Strikethrough | `<del>` |
| `<mark>` | Highlight | |
| `<sub>` | Subscript | |
| `<sup>` | Superscript | |
| `<small>` | Small | |

> :pencil: **Homework!**
> 
> Follow examples [3](examples/03-headings), [4](examples/04-text), [5](examples/05-text-attributes), and [6](examples/06-text-formatting). Try and use one of each element to mark-up your text and assign it the correct semantic meaning.

## Lists

An unordered list represents a list of items in no particular order.

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ul>
```

An ordered list represents a list of items sorted in a particular order.

```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
</ol>
```

Ordered lists can be reversed: `<ol reversed>`

Ordered lists can start counting from a specific integer: `<ol start="10">`

Ordered lists can be enumerated differently: `<ol type="a">`

| Type | Description |
| --- | --- |
| a | lowercase letters |
| A | uppercase letters |
| i | lowercase Roman numerals |
| I | uppercase Roman numerals |
| 1 | numbers (default) |

A description list represents a list of terms and descriptions, like a glossary.

```html
<dl>
    <dt>Term 1</dt>
    <dd>Term description 1</dd>
    <dt>Term 2</dt>
    <dd>Term description 2</dd>
    <dt>Term 3</dt>
    <dd>Term description 3</dd>
    <dt>Term 4</dt>
    <dd>Term description 4</dd>
    <dt>Term 5</dt>
    <dd>Term description 5</dd>
</dl>
```

> :pencil: **Homework!**
> 
> Follow example [7](examples/07-lists). Add one of each list to an existing or new HTML document. Try using a different ordered list type, for example lowercase Roman numerals.

## Media

### Images

Images are represented with the `<img>` tag.

```html
<img src="./image.jpg" alt="A sample image" width="640" height="480">
```

Image formats for the web:

| Format | Type | Description | Use case |
| --- | --- | --- | --- |
| JPEG, JPG | Raster | Compressed (lossy) format | Photorealistic images without transparency |
| PNG | Raster | Lossless format, supports transparency | Photorealistic images and graphics with transparency |
| GIF | Raster | Lossless format, limited to 256 colours, supports transparency and animations | Small, simple animated graphics |
| SVG | Vector | Lossless, defined through XML markup | Scalable vector graphics, icons, logos |

#### SVG

@todo SVG

#### Canvas

@todo CANVAS

### Audio

The HTML `<audio>` element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the `<source>` element: the browser will choose the most suitable one. It can also be the destination for streamed media. [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio).

```html
<audio src="foo.ogg" autoplay>
    <p>
        Your browser doesn't support HTML5 audio.
        Here is a <a href="foo.ogg">link to download the audio</a> instead.
    </p>
</audio>
```

```html
<audio controls>
    <source src="foo.opus" type="audio/ogg; codecs=opus"/>
    <source src="foo.ogg" type="audio/ogg; codecs=vorbis"/>
    <source src="foo.mp3" type="audio/mpeg"/>
    <p>Your browser doesn't support HTML5 audio.</p>
</audio>
```

Commonly used attributes:

| Attribute | Description |
| --- | --- |
| autoplay | Boolean. Default `false`. If specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading. |
| controls | If present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback. |
| loop | Boolean. Default `false`. If specified, the audio player will automatically seek back to the start upon reaching the end of the audio. |
| muted | Boolean. Default `false`. Indicates whether the audio will be initially silenced. |
| preload | Enum. Provides a hint to the browser about what the author thinks will lead to the best user experience. Values: `none` (audio should not be preloaded), `metadata` (audio metadata should be preloaded), `auto` (whole audio file should be preloaded). Spec advises `metadata`. |
| src | URL of the audio to embed. Optional, as `<source>` elements can be used to specify which audio to embed. |

The format of audio and video media files is defined in two parts (three if a file has both audio and video in it): the audio and/or video codecs used and the media container format (or file type) used.

Common container formats (file types) and codecs:

| Codec name | Full codec name | Container support | Browser support |
| --- | --- | --- | --- |
| AAC | Advanced Audio Coding | MP4, ADTS, 3GP | Chrome, IE 9> (MP4 only), Edge, Firefox, Opera, Safari |
| FLAC | Free Lossless Audio Codec | MP4, Ogg, FLAC | Chrome, Edge, Firefox, Opera, Safari (FLAC only) |
| PCM | Pulse Code Modulation | WAV | Chrome, Edge, Firefox, Opera, Safari |
| MP3 | MPEG-1 Audio Layer III | MP4, ADTS, MPEG1, 3GP | Chrome, IE 9>, Edge, Firefox, Opera, Safari |
| Opus | Opus | WebM, MP4, Ogg | Chrome, Edge, Firefox, Opera |
| Vorbis | Vorbis | WebM, Ogg | Chrome, Edge, Firefox, Opera, Safari (Ogg only) |

[Read more about containers](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers)

[Read more about codecs](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs)

[Read more about supported browsers](https://en.wikipedia.org/wiki/HTML5_audio)

Automatically starting the playback of audio (or videos with audio tracks) immediately upon page load can be an unwelcome surprise to users. While autoplay of media serves a useful purpose, it should be used carefully and only when needed. In order to give users control over this, browsers often provide various forms of autoplay blocking. [Read more](https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide).

Note: media with an active audio track are considered to be audible, and autoplay blocking applies to them. Inaudible media are not affected by autoplay blocking.

> Chrome's autoplay policies are simple:
> 
> - Muted autoplay is always allowed.
> - Autoplay with sound is allowed if:
>   - User has interacted with the domain (click, tap, etc.).
>   - On desktop, the user's Media Engagement Index threshold has been crossed, meaning the user has previously played video with sound.
>   - The user has added the site to their home screen on mobile or installed the PWA on desktop.
>  - Top frames can delegate autoplay permission to their iframes to allow autoplay with sound.
>
> [Read more](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)

#### Accesibility concerns

Audio with spoken dialog should provide both captions and transcripts that accurately describe its content. In addition to spoken dialog, subtitles and transcripts should also identify music and sound effects that communicate important information, including emotion and tone. This can be done using WebVTT (Web Video Text Tracks) format. [Read more](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

The `<audio>` element doesn't directly support WebVTT. You will have to find a library or framework that provides the capability for you, or write the code to display captions yourself. One option is to play your audio using a `<video>` element, which does support WebVTT.

Also it's a good practice to provide some content (such as the direct download link) as a fallback for viewers who use a browser in which the `<audio>` element is not supported.

### Video

The HTML Video element (`<video>`) embeds a media player which supports video playback into the document. [Read more](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video).

```html
<video controls width="250">
    <source src="/media/examples/flower.webm"
            type="video/webm">
    <source src="/media/examples/flower.mp4"
            type="video/mp4">
    <p>Sorry, your browser doesn't support embedded videos.</p>
</video>
```

Commonly used attributes:

| Attribute | Description |
| --- | --- |
| autoplay | Boolean. Default `false`. If specified, the audio will automatically begin playback as soon as it can do so, without waiting for the entire audio file to finish downloading. |
| controls | If present, the browser will offer controls to allow the user to control audio playback, including volume, seeking, and pause/resume playback. |
| height | The height of the video's display area, in CSS pixels (absolute values only; no percentages). |
| loop | Boolean. Default `false`. If specified, the audio player will automatically seek back to the start upon reaching the end of the audio. |
| muted | Boolean. Default `false`. Indicates whether the audio will be initially silenced. |
| playsinline | Boolean. Indicates that the video is to be played "inline", that is within the element's playback area. |
| poster | A URL for an image to be shown while the video is downloading. If this attribute isn't specified, nothing is displayed until the first frame is available, then the first frame is shown as the poster frame. |
| preload | Enum. Provides a hint to the browser about what the author thinks will lead to the best user experience. Values: `none` (audio should not be preloaded), `metadata` (audio metadata should be preloaded), `auto` (whole audio file should be preloaded). Spec advises `metadata`. |
| src | URL of the audio to embed. Optional, as `<source>` elements can be used to specify which audio to embed. |
| width | The width of the video's display area, in CSS pixels (absolute values only; no percentages). |

Common container formats (file types) and codecs:

| Codec and format name | Browser support |
| --- | --- |
| Theora (Ogg) | Chrome, Firefox, Opera |
| H.264 (MP4) | Chrome, IE, Edge, Firefox, Opera, Safari |
| HEVC (MP4) | Safari |
| VP8 (WebM) | Chrome, Firefox, Opera |
| VP9 (WebM) | Chrome, Firefox, Opera |
| AV1 (WebM) | Chrome, Firefox, Opera |

[Read more about supported browsers](https://en.wikipedia.org/wiki/HTML5_video)

#### Accesibility concerns

Videos should provide both captions and transcripts that accurately describe its content. In addition to spoken dialog, subtitles and transcripts should also identify music and sound effects that communicate important information, including emotion and tone. This can be done using WebVTT (Web Video Text Tracks) format. [Read more](https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API).

Also it's a good practice to provide some content (such as the direct download link) as a fallback for viewers who use a browser in which the `<video>` element is not supported.

## Hyperlinks

```html
<a href="#about">Jump to About section</a>
<a href="products.html">Open Products</a>
<a href="https://google.com" target="_blank">Open Google.com in a new tab</a>
<a href="tel:+385123456789">Call me</a>
<a href="mailto:hello@world.com">Email me</a>
```

## Tables

@todo

## Forms

@todo

### Non-semantic structural elements

@todo

### Semantic structural elements

@todo

## Sources

- https://en.wikipedia.org/wiki/Markup_language
- https://en.wikipedia.org/wiki/Document_type_declaration
- https://en.wikipedia.org/wiki/HTML5
- https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started
- https://en.wikipedia.org/wiki/WHATWG
- https://en.wikipedia.org/wiki/World_Wide_Web_Consortium
- https://en.wikipedia.org/wiki/Separation_of_concerns
- https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5
- https://www.w3.org/TR/wai-aria-practices-1.1/
- https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML
- https://ogp.me/
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
