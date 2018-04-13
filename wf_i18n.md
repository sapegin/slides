title: I18n best practices
style: wayfair.css
output: public/wf_i18n.html

-- cover

# I18n best practices

## Artem Sapegin

-- secondary

# i18n and l10n

--

### Localization (l10n)

Adaptation of an app for a specific target market.

--

### Internationalization (i18n)

Making the app ready to be localized.

--

<video src="images/wf_i18n/doublingdogs.mp4" autoplay loop></video>

-- tertiary

# What should be localized?

--

### Text

* Find anything home...
* Alles für Zuhause...
* Tout pour la maison...

--

### Text

#### US

![](images/wf_i18n/cart.png)

#### UK

![](images/wf_i18n/basket.png)

--

### Numeric formats

* 1,025.63 — US
* 1.025,63 — Germany
* 1&thinsp;025,63 — Russia

--

### Date and time formats 😱

* 11/4/2018 — US
* 4.11.2018 — Germany

--

### Use of currency

* $100 — US
* 100 € — Germany

--

### Typography 😭

<!-- https://en.wikipedia.org/wiki/Quotation_mark -->

* ‘…’ “…” — English (UK)
* “…” ‘…’ — English (US, Canada)
* „…“ ‚…‘ or »…« ›…‹ — German
* « … » « … » or “…” — French
* «…» „…“ — Russian

--

### Brands

![](images/wf_i18n/sosasola.jpg)

-- split

### Brands

#### Everywhere else

![](images/wf_i18n/burgerking.svg)

#### Australia

![](images/wf_i18n/hungryjacks.svg)

--

# And many more things

--

<video src="images/wf_i18n/dramatichamster.mp4" autoplay loop></video>

-- secondary

# Best practices

-- tertiary

# Don’t concatenate strings

--

### Don’t concatenate strings

#### Bad

```html
<Lnrs key="Greeting1">Hey </Lnrs>
{name}<Lnrs key="Greeting2">, welcome back!</Lnrs>
```

#### Good

```html
<Lnrs key="HomepageGreeting">
  Hey {name}, welcome back!
</Lnrs>
```

--

### Don’t concatenate strings

* “<mark>red</mark> pencil” — English
* “crayon <mark>rouge</mark>” — French

-- tertiary

# Put punctuation inside localization strings

--

### Put punctuation inside localization strings

#### Bad

```html
<Lnrs key="Username">Username</Lnrs>{': '}
<input type="text" />
```

#### Good

```html
<Lnrs key="RegistrationUsername">Username:</Lnrs>{' '}
<input type="text" />
```

--

### Put punctuation inside localization strings

* “Username<mark>:</mark>” — English
* “Nom d’utilisateur<mark>␣:</mark>” — French

-- tertiary

# Don’t reuse translations in&nbsp;different contexts

--

### Don’t reuse translations in different contexts

#### Bad

```html
<h1><Lnrs key="Bookmark">Bookmark</Lnrs></h1>
<button><Lnrs key="Bookmark">Bookmark</Lnrs></button>
```

#### Good

```html
<h1><Lnrs key="ProductBookmarkHeading">Bookmark</Lnrs></h1>
<button><Lnrs key="ProductBookmarkButton">Bookmark</Lnrs></button>
```

--

### Don’t reuse translations in different contexts

* “Bookmark” (heading) and “Bookmark” (button) — English
* “Закладка” and “Добавить в закладки” — Russian

-- tertiary

# Don’t hardcode pluralization

--

### Don’t hardcode pluralization

#### Bad

```js
props.resultCount > 1 ? (
  <Lnrs key="NumberResults">
    {props.resultCount} results
  </Lnrs>
) : (
  <Lnrs key="NumberResult">
    {props.resultCount} result
  </Lnrs>
)
```

--

### Don’t hardcode pluralization

#### Good

![](images/wf_i18n/underconstruction.gif)

--

### Don’t hardcode pluralization


* “1 dog, 2 dogs, 5 dogs” — English
* “1 собака, 2 собаки, 5 собак” — Russian

-- tertiary

# Use language names instead of&nbsp;flags

--

### Use language names instead of flags

#### Bad

![](images/wf_i18n/languageflags.png)

--

### Use language names instead of flags

#### Good

![](images/wf_i18n/languagenames.png)

-- tertiary

# Use flexible containers for text

-- split

### Use flexible containers for text

![](images/wf_i18n/fixedcontainerenglish.png)

![](images/wf_i18n/fixedcontainergerman.png)

--

### Use flexible containers for text

<!-- https://www.andiamo.co.uk/resources/expansion-and-contraction-factors -->

<table>
  <thead>
    <tr>
      <th>Language</th>
      <th>From English</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>French</td>
      <td>+15% to +20%</td>
    </tr>
    <tr>
      <td>German</td>
      <td>+10% to +35%</td>
    </tr>
    <tr>
      <td>Russian</td>
      <td>+15%</td>
    </tr>
  </tbody>
</table>

--

<video src="images/wf_i18n/puppies.mp4" autoplay loop></video>

-- secondary

# A few words about Wayfair

--

### Translation branches 🦄

<code>FEATURE_<mark>translate</mark>_pt_XXXXXX</code>

![](images/wf_i18n/pttranslate.png)

--

### Resources

* #sf-i18n-platform
* [kb.wayfair.com/kbnode/i18n-guidelines](https://kb.wayfair.com/kbnode/i18n-guidelines)

--

<video src="images/wf_i18n/shipit.mp4" autoplay loop></video>

--

### <marquee style="width:50%">Thank you! Danke schön! Merci! Спасибо!</marquee>

Me: [sapegin.me](http://sapegin.me/)<br>
Twitter: [@iamsapegin](https://twitter.com/iamsapegin)<br>
GitHub: [sapegin](https://github.com/sapegin)

<img src="images/dogs.jpg" style="height:30vh">
