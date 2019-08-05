---
layout: default
---
# JSON RENDER JS PLUGIN

This is a simple JS Plugin to render JSON Content, using just HTML + Javascript.

## Getting Started

The Json Render JS Plugin needs jQuery library.
You can use direct link: 
```html
<script src="http://code.jquery.com/jquery-latest.js"></script>
```
Or get to oficial jQuery site to another options: [Link to jQuery](https://jquery.com/download/).


```html
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="your-folder/json-render.js"></script>
```

### Json Array Data

```js
// Simple use - showing a list of data
var your_content = $('.your-content-class');
 
 your_content.RenderJson({
    data: your_json,
    mainKey: 'key_name',
  });

 your_content.RenderJsonList();

```
```html
<section data-simple-json-container>
  <div data-simple-json-data-source>
    <div class="your-content-class" data-simple-json-item="{@id}">
      <h4 id="{@id}">{@name}</h4>
      <p>{@description}</p>
      <hr>
    </div>  
  </div>
</section>
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

*   This is an unordered list following a header.
*   This is an unordered list following a header.
*   This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

* * *

### Here is an unordered list:

*   Item foo
*   Item bar
*   Item baz
*   Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)


### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
