var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');

var app=express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/timestamp/:value',function(req,res){
    // console.log('working');
    var val=req.params.value;
    // console.log(val);
    // res.send({value:val});
    var formatDate={
        year:'numeric',
        month:'long',
        day:'numeric'
    }
    if(isNaN(val)){
        var naturaldate=new Date(val);
        naturaldate=naturaldate.toLocaleDateString("en-us",formatDate);
        var unixdate=new Date(val).getTime()/1000;
    }else{
        naturaldate=new Date(val*1000).toLocaleDateString("en-us",formatDate);
        unixdate=val;
    }
res.json({unix:unixdate,natural:naturaldate})
    
})


app.listen(process.env.PORT,process.env.IP,function(){
    console.log('server started!');
})