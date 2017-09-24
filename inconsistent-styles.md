title: Custom CSS is the path to inconsistent UI
author:
  name: Artem Sapegin
  twitter: iamsapegin
  url: http://sapegin.me
style: styles.css
output: public/inconsistent-styles.html

--

# Custom CSS is the path to inconsistent UI

--

### Inconsistency in the UI

![](images/inconsistent-styles/doors.jpg)

-- teal

## What’s the issue?

--

### Sources of custom CSS

* Typography
* Whitespace

--

### Custom CSS

```css
.description {
  margin-bottom: 20px;
  font-size: 16px;
}

.contacts {
  margin-bottom: 10px;
  font-size: 14px;
}

.count {
  margin-left: 0.75em;
  font-size: 14px;
  opacity: 0.5;
}
```

--- orange

# Why not variables?

--

### CSS (preprocessor) variables

\+ Inconsistency

– More writing and thinking

– Hard to ensure correct usage

– May be hard to update

-- teal

# What’s the solution?

-- orange

# Components

--

### Typography

![](images/inconsistent-styles/text.png)

--

### &lt;Text>

```html
<div>
  <Header level={2}>Saluki</Header>
  <Text>
    The Saluki is classed as a sighthound
    and is typically deep-chested and long-legged.
    Salukis are “sight” hounds—hunting by sight—and
    run their quarry down to kill or retrieve it.
  </Text>
  <Text small>Don’t leave any food on a table when saluki is around.</Text>
</div>
```

--

### Whitespace

* Paddings inside components
* Glue components together

---

### Nathan Curtis’s framework

![](images/inconsistent-styles/whitespace.png)

--

### [React Spaceman](https://github.com/sapegin/react-spaceman)

* 8px grid
* `xxs` (2px) to `xxl` (128px)
* geometric progression

--

### Space inside components

```js
const Button = props => (
  <Panel
    inset="m"
    squish
    tag="button"
    className={classes.root}
    tagProps={props}
  >
    {props.children}
  </Panel>
);
```

--

### Glue components together

```html
<Panel inset="m" between="m">
  <Panel between="s">
    <h3>Saluki</h3>
    <div>The Saluki is classed as a sighthound…</div>
  </Panel>
  <Panel between="s" inline>
    <Tag href="/sighthounds">Sighthounds</Tag>
    <Tag href="/dogs">Dogs</Tag>
  </Panel>
  <Button>Buy a puppy</Button>
</Panel>
```

-- teal

# What’s the point?

--

### Components

* Limited freedom → consistency
* Avoid custom CSS for many components
* Easier code reviews
* Easier to document
* TypeScript and Flow
* More natural to use

--

### Image credits

* [Max Stoiber](https://mxstbr.com/)
* [Priyanka Godbole](https://blog.prototypr.io/10-practical-steps-to-create-a-predictable-accessible-and-harmonious-typography-system-a-case-6c85d901bedd)
* [Nathan Curtis](https://medium.com/eightshapes-llc/space-in-design-systems-188bcbae0d62))
