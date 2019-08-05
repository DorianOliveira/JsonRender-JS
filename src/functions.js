/*
* This script is to test calls to the Json Render JS Plugin.
* Use the 'local' folder to test in your local environment.
* The json-data-sample.js file have json data sample to test.
*/
function ShowMenu()
{
    let menu = $('.json-template-menu');

    menu.RenderJson({
        data: jsonMenu.result,
        mainKey: 'items'
    });

    menu.RenderJsonList();
}

function ShowMultilevels()
{
    let levels = $('.levels-template');

    levels.RenderJson({
        data: json3Levels.result,
        mainKey: 'pessoas'
    });

    levels.RenderJsonList();
}

function ShowSingle()
{

    let single = $('.single-data');

    single.RenderJson({
        data: singleJson,
        mainKey: 'result'
    });

    single.RenderJsonItem();
}

function ShowReference()
{

    reference = $('.template-reference');

    reference.RenderJson({
        data: jsonReference.result,
        mainKey: 'items',

        //All events sample
        complete: function()
        {
            $('.container-reference').fadeIn();
            //console.log('acabou');
            //console.log($(this));
        },

        init: function()
        {


            //console.log($(this));
            //console.log('iniciando');
            //console.log($(this));
            //console.log(data);
            // console.log('iniciou');
            // console.log(data);
        },

        onRenderKeyValue: function(key, value)
        {

            //$(this)
             console.log(key);
            // console.log(value);
            // console.log(value);
        },
        onRenderItem: function(element)
        {
            // console.log($(this));
            // console.log(element);

        },

        onRenderDataSource: function(data, dataSourceKey, children)
        {
            // console.log(data);
            // console.log(dataSourceKey);
            // console.log(children);
        },

        beforeClear: function(elements)
        {
            console.log('Antes de apagar');
            console.log($(this));
            console.log(elements);
        },

        afterClear: function()
        {
            console.log('terminou de apagar');
            console.log($(this));
        }
    });

    reference.RenderJsonList();
}

$(document).ready(function(e){

    // ShowMenu();
    // ShowMultilevels();
     ShowReference();
    //ShowSingle();



});