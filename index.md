---
layout: default
---
# JSON RENDER JS PLUGIN

This is a simple JS Plugin to render JSON Content, using just pure and simple HTML + Javascript.

## Getting Started

The Json Render JS Plugin needs jQuery library.
You can use direct link: 
```html
<script src="http://code.jquery.com/jquery-latest.js"></script>
```
You you need, get to the official jQuery site to another options: [Link to jQuery](https://jquery.com/download/).


```html
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="your-folder/json-render.js"></script>
```

### Json Array Data


```js
// Simple use - showing a list of data
var your_content = $('.your-content-class');
 
 your_content.RenderJson({
    data: jsonReference.result,
    mainKey: 'key_name',
  });

 your_content.RenderJsonList();

// JSON used in this sample
var jsonReference = 
{
    result:
    {
        items:
        [
            {
                id: 1,
                name: 'data-simple-json-data-source',
                description : 'Determine if the element is a DATA SOURCE. Is the container of the ITEMS'
            },
            {
                id: 2,
                name: 'data-simple-json-container',
                description : 'Default container of the contents. All the elements should be put within this elements.'
            },
            {
                id: 3,
                name: 'data-simple-json-item',
                description : 'The element template. This elements will be replicated for each element in the DATA SOURCE array. Allow CONTAINER and DATA SOURCE nested.'
            },
            {
                id: 4,
                name: 'data-simple-json-empty-data',
                description: 'This element will be showed if no item reached from the DATA SOURCE'
            },
            {
                id: 5,
                name: 'data-simple-json-remove-on-empty',
                description: 'This DataSet attribute says that element should be hide weather no elements found in DATA SOURCE'
            }
        ]    
    }
};

```
```html
<!-- HTML Structure -->
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
Json Render JS Plugin 2019

```
