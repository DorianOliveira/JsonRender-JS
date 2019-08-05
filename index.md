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
If you need, get to the official jQuery site to another download options for your project:
[Link to jQuery](https://jquery.com/download/).

### How to use

```html
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="your-folder/json-render.js"></script>
```

### HOW TO LISTING DATA (JSON ARRAY ITEMS)

```js
// Simple use - showing a list of data
var your_content = $('.your-content-class');
 
 your_content.RenderJson({
    data: jsonReference.result,
    mainKey: 'key_name',
  });

 your_content.RenderJsonList();


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

```js
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


### HOW TO DISPLAY SINGLE DATA: Json Single Data

If you need display just a single data, follow this steps:

```js
// Simple use - showing a single item
var single = $('.single-data-container');

single.RenderJson({
    data: singleJson,
    mainKey: 'result'
});

single.RenderJsonItem();


```
```html
<!-- HTML Structure -->
<section class="default-box single-data-container" data-simple-json-container="single-data">
  <div class="single-data" data-simple-json-item="{@id}">
    <h4 id="{@id}">{@name}</h4>
    <p>{@dataNascimento}</p>
    <hr>
  </div>  
</section>
```

```js
// JSON used in this sample
var singleJson = 
{
    result:
    {
        id: 1, name: 'Andreia', dataNascimento: '03/01/1988'   
    }
}

```

### DISPLAYING DATA WITH MULTILEVELS

If you need display data with multileves, like:

- People 1
  - Book 1
    - Chapter 1
    - Chapter 2
    - Chapter 3
  - Book 2
    - Chapter Book 2 - 1
    - Chapter Book 2 - 2
    - Chapter Book 2 - 3
    - ...
  - Book 3
    - Chapter Book 3 - 1
    - Chapter Book 3 - 2
    - ...
- People 2
  - ...
    - ...
- People 3
  - ...

You can use the same way from **ARRAY**, and, in your html template, work with **data-source** options. Take a look:

```js
// Simple use - showing a single item
let levels = $('.levels-template');

levels.RenderJson({
    data: json3Levels.result,
    mainKey: 'pessoas'
});

levels.RenderJsonList();


```

```html
<!-- HTML Structure -->
  
  <!-- This is the main container from the data -->
  <section data-simple-json-container="container-levels">
      <div data-simple-json-data-source>

        <!-- This is the main TEMPLATE -->
        <div data-simple-json-item class="levels-template">
          <h4>{@id}. {@name}</h4>
          <hr>
          
          <!-- This is the container from the data-source BOOKS -->
          <div data-simple-json-container="template-livros">
            
            <!-- This is the DATA-SOURCE from BOOKS -->
            <ul
              id="ul-livros"
              data-simple-json-data-source="livros">

              <!-- This is the BOOKS TEMPLATE -->
              <li data-simple-json-item id="{@id}">
                <span>{@id} - {@title}</span>
                
                <!-- This is the container from next DATA-SOURCE: CHAPTERS -->
                <div id="container-capitulos" data-simple-json-container="template-chapters">
                  
                  <!-- This is the DATA-SOURCE from CHAPTERS -->
                  <select
                    id="select-capitulos"
                    data-simple-json-remove-on-empty
                    data-simple-json-data-source="capitulos">
                    
                    <!-- This is the CHAPTERS TEMPLATE -->
                    <option value="{@id}" data-simple-json-item>{@id} - {@name}</option>
                  </select>
                  <div data-simple-json-empty-data>
                    <p>Capítulos não encontrados para este livro</p>
                  </div>
                </div>
              </li>
            </ul>
            <div data-simple-json-empty-data>
              <p>Livros não encontrados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
```

```js

//JSON used in this sample
var json3Levels = 
{
    result:
    {
        people:
        [
            {
                id: 1,
                name: 'Dorian',
                //This person doesn´t have any book.
            },
            {
                id: 2,
                name: 'Paul',
                livros:
                [
                    {
                        id: 7,
                        title: 'A Menina que Roubava Livros',
                        capitulos:
                        [
                            {id: 100, name: 'Chapter 1'},
                            {id: 101, name: 'Chapter 2'},
                            {id: 102, name: 'Chapter 3'},
                        
                        ]
                    },
                    {id: 9, title: 'O Símbolo Sagrado'
                    //Chapters list not set to this book
                  },
                ]
            },
            {
                id: 2,
                name: 'John',
                livros:
                [
                    {id: 11, title: 'Poder sem Limites', capitulos:[]},
                    {id: 12, title: 'O Segredo'},
                    {id: 13, title: 'A Volta dos Que Não Foram'},

                ]
            }

        ]
    }
}
```

```
Json Render JS Plugin 2019

```
