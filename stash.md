--

### Use proper typography characters

#### Bad

```html
<Lnrs key="NameError">
  Name can't be empty
</Lnrs>
```

#### Good

```html
<Lnrs key="WriteAReviewErrorNameEmpty">
  Name can&rsquo;t be empty
</Lnrs>
```

--

### Use proper typography characters

#### English

<table>
  <tbody>
    <tr>
      <td>Single quotes</td>
      <td>‘ ’</td>
      <td><code>&amp;lsquo; &amp;rsquo;</code></td>
    </tr>
    <tr>
      <td>Double quotes</td>
      <td>“ ”</td>
      <td><code>&amp;ldquo; &amp;rdquo;</code></td>
    </tr>
    <tr>
      <td>Em (long) dash</td>
      <td>—</td>
      <td><code>&amp;mdash;</code></td>
    </tr>
    <tr>
      <td>Ampersand</td>
      <td>&amp;</td>
      <td><code>&amp;amp;</code></td>
    </tr>
  </tbody>
</table>





-- small

# Don’t use dangerouslySetInnerHTML

--

### Don’t use dangerouslySetInnerHTML

#### Bad

```html
<span
  dangerouslySetInnerHTML={{__html: errorMessage}}
/>
```

#### Good

```html
<Lnrs key="WriteAReviewSuccessMessage">
  Thanks for sharing! You&rsquo;ve been entered
  to win a {amount} shopping spree!
</Lnrs>
```