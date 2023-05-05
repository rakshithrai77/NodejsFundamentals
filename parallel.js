var async=require('async');

function sm(cb)
{
    setTimeout(function()
    {
        cb(null,'sm-result')
    },2000)
}
function md(cb)
{
    setTimeout(function()
    {
        cb(null,'md-result')
    },2000)
}
function lr(cb)
{
    setTimeout(function()
    {
        cb(null,'lr-result')
    },2000)
};

async.parallel([sm,md,lr],function(err,result)

{
    if (result)
        console.log(result)
    else    
        console.log(err)
})
