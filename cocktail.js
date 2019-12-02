function onrum(){
  var xmlhttp,x, txt = "";
  var th1=document.createElement("img");
  console.log(th1);
  var obj = { "table":"drinks", "limit":10 };
  var dbParam = JSON.stringify(obj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      txt +="<div class=\"cocktail-ingredient heading2\">"
      txt +="<div class='container'>"
      txt +="<div class= 'row'>"
    
      var myObj=JSON.parse(this.responseText);
      txt +="<div class=\"cocktails heading2\" id=\"demo6\">"
       for(x in myObj.drinks)
           {
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>";
            th1.setAttribute("style","width:300px;height:250px;") + "<br>" + "<br>" ;
            txt += myObj.drinks[x].strDrink + "<br>";
            
            console.log(txt);
            
            txt += myObj.drinks[x].strInstructions;
           }
           document.getElementById("panel-cocktail").innerHTML = txt;
           var myImageDiv = document.querySelector('#demo6');
           console.log(myImageDiv);
           myImageDiv.appendChild(th1);
     
      
         
           txt +="</div>";
           txt +="</div>";
           txt +="</div>";
       
           
    }
  };
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);


 }
 function onmargarita(){
  var xmlhttp,x, txt = "";
  var th1=document.createElement("img");
  console.log(th1);
  var obj = { "table":"drinks", "limit":10 };
  var dbParam = JSON.stringify(obj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      txt +="<div class=\"panel-cocktail heading2\">"
      txt +="<div class='container'>"
      txt +="<div class= 'row'>"
    
      var myObj=JSON.parse(this.responseText);
      txt +="<div id=\"demo6\">"
       for(x in myObj.drinks)
           {
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>";
            th1.setAttribute("style","width:300px;height:250px;") + "<br>" + "<br>" ;
            txt += myObj.drinks[x].strDrink + "<br>";
            
            console.log(txt);
            
            txt += myObj.drinks[x].strInstructions;
           }
           document.getElementById("demo").innerHTML = txt;
           var myImageDiv = document.querySelector('#demo6');
           console.log(myImageDiv);
           myImageDiv.appendChild(th1);
     
      
         
           txt +="</div>";
           txt +="</div>";
           txt +="</div>";
       
           
    }
  };
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);


 }
 function onbeer(){
  var xmlhttp,x, txt = "";
  var th1=document.createElement("img");
  console.log(th1);
  var obj = { "table":"drinks", "limit":10 };
  var dbParam = JSON.stringify(obj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      txt +="<div class=\"cocktail-ingredient heading2\">"
      txt +="<div class='container'>"
      txt +="<div class= 'row'>"
    
      var myObj=JSON.parse(this.responseText);
      txt +="<div class=\"cocktails heading2\" id=\"demo6\">"
       for(x in myObj.drinks)
           {
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>";
            th1.setAttribute("style","width:300px;height:250px;") + "<br>" + "<br>" ;
            txt += myObj.drinks[x].strDrink + "<br>";
            
            console.log(txt);
            
            txt += myObj.drinks[x].strInstructions;
           }
           document.getElementById("demo").innerHTML = txt;
           var myImageDiv = document.querySelector('#demo6');
           console.log(myImageDiv);
           myImageDiv.appendChild(th1);
     
      
         
           txt +="</div>";
           txt +="</div>";
           txt +="</div>";
       
           
    }
  };
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=beer", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);


 }

 function onwhiskey(){
  var xmlhttp,x, txt = "";
  var th1=document.createElement("img");
  console.log(th1);
  var obj = { "table":"drinks", "limit":10 };
  var dbParam = JSON.stringify(obj);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() 
  {
    if (this.readyState == 4 && this.status == 200) 
    {
      txt +="<div class=\"cocktail-ingredient heading2\">"
      txt +="<div class='container'>"
      txt +="<div class= 'row'>"
    
      var myObj=JSON.parse(this.responseText);
      txt +="<div class=\"cocktails heading2\" id=\"demo6\">"
       for(x in myObj.drinks)
           {
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>";
            th1.setAttribute("style","width:300px;height:250px;") + "<br>" + "<br>" ;
            txt += myObj.drinks[x].strDrink + "<br>";
            
            console.log(txt);
            
            txt += myObj.drinks[x].strInstructions;
           }
           document.getElementById("demo").innerHTML = txt;
           var myImageDiv = document.querySelector('#demo6');
           console.log(myImageDiv);
           myImageDiv.appendChild(th1);
     
      
         
           txt +="</div>";
           txt +="</div>";
           txt +="</div>";
       
           
    }
  };
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);


 }
function load(){

var xmlhttp,x, txt = "";
var th1=document.createElement("img");
//var th2=document.createElement("img");
console.log(th1);
var obj = { "table":"drinks", "limit":10 };
var dbParam = JSON.stringify(obj);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200) 
  {
   var myObj=JSON.parse(this.responseText);
   txt +="<div class=\"cocktails heading2\" id=\"demo6\">"
    for(x in myObj.drinks)
        {
          th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>";
         th1.setAttribute("style","width:300px;height:250px;") + "<br>" + "<br>" ;
         txt += myObj.drinks[x].strDrink + "<br>";
         
         console.log(txt);
         
         txt += myObj.drinks[x].strInstructions;
        }
        document.getElementById("demo").innerHTML = txt;
        var myImageDiv = document.querySelector('#demo6');
        console.log(myImageDiv);
        myImageDiv.appendChild(th1);
  
    txt +="</div>";
  }
};

xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/random.php", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send("x=" + dbParam);
}

function load1()
{

    var xmlhttp,x, txt = "";
    var obj = { "table":"drinks", "limit":10 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
{
  var myObj=JSON.parse(this.responseText);
       txt +="<div class=\"cocktail-ingredient heading2\">"
       txt +="<div class='container'>"
       txt +="<div class= 'row'>"
     
        for(x in myObj.drinks)
           {
             txt += "<div class='col-sm-3'>"  
             txt += myObj.drinks[x].strIngredient1 + "<br>";
             txt += "</div>"
            }
            document.getElementById("panel-ingredient").innerHTML = txt;
          
            txt +="</div>";
            txt +="</div>";
            txt +="</div>";
        
            
       }
    };
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
    
    
   }
    function Abrowse(){
      var xmlhttp,x, txt = "";
      var th1=document.createElement("img");
      var obj = { "table":"drinks", "limit":100 };
      var dbParam = JSON.stringify(obj);
      xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() 
      {
        if (this.readyState == 4 && this.status == 200) 
        {
         var myObj=JSON.parse(this.responseText);
         txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
          for(x in myObj.drinks)
              {
               txt += myObj.drinks[x].strDrink + "<br>";
               th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
               th1.setAttribute("style","width:300px;height:250px;");
               console.log(th1);
              
               
              }
              document.getElementById("A_drinks").innerHTML = txt;
               var myImageDiv = document.querySelector('#demo7');
              myImageDiv.appendChild(th1);
              console.log(myImageDiv);
         
          txt +="</div>";
  
        }
      };
     
      xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a", true);
     // xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      //xmlhttp.send("x=" + dbParam);
    }
  function Bbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
       txt +="<div class='container'>"
       txt +="<div class= 'row'>"
        for(x in myObj.drinks)
            {
              txt += "<div class='col-sm-3'>" 
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
             txt +="</div>";
             
            }
            document.getElementById("name-cocktail").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";
        txt +="</div>";
        txt +="</div>";
      

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=b", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }
  function Cbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=c", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Xbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=x", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Dbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=d", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Wbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=w", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Ebrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=e", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Fbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=f", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Gbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=g", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Ybrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Hbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=h", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Ibrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=I", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Jbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=j", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Kbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=k", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Lbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=l", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Mbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=m", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Nbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=n", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Obrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=o", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Pbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=p", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Qbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=q", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Rbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=r", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Sbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=s", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Tbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=t", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }function Ubrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=u", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }
  function Vbrowse(){
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=v", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }
  
  function Zbrowse()
  {
    var xmlhttp,x, txt = "";
    var th1=document.createElement("img");
    var obj = { "table":"drinks", "limit":100 };
    var dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
      if (this.readyState == 4 && this.status == 200) 
      {
       var myObj=JSON.parse(this.responseText);
       txt +="<div class= \"cocktails\" \"heading2\" id=\"demo7\">"
        for(x in myObj.drinks)
            {
             txt += myObj.drinks[x].strDrink + "<br>";
             th1.setAttribute("src",myObj.drinks[x].strDrinkThumb) + "<br>"; 
             th1.setAttribute("style","width:300px;height:250px;");
             console.log(th1);
            
             
            }
            document.getElementById("A_drinks").innerHTML = txt;
             var myImageDiv = document.querySelector('#demo7');
            myImageDiv.appendChild(th1);
            console.log(myImageDiv);
       
        txt +="</div>";

      }
    };
   
    xmlhttp.open("GET", "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=z", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("x=" + dbParam);
  }
 function getrecepie1()
 {
   document.getElementById("searchrecepie").innerHTML="";
    var button1 = document.getElementById("searchbutton");
    var value = document.getElementById("searchrecepie").value;
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange= function()
    {
      if (this.readyState == 4 && this.status == 200) 
		{
			var a=JSON.parse(this.responseText);
			getrecepie(a.response.drinks[0].strDrink);
		}
    };
    xhttp.open("GET","https://www.thecocktaildb.com/api/json/v1/1/random.php?q=" + value);
    xhttp.send();
 }
 function getrecepie(a)
 {
   var xmlhttp= new XMLHttpRequest();
   xmlhttp.onreadystatechange = function(){
     if(this.readyState == 4 && this.status == 200)
     {
       var ans = JSON.parse(this.responseText);
       for(var i=0;i<5;i++)
       {
         var div=document.createElement("div");
         var img= document.createElement("img");
         var title=document.createElement("p");
         div.appendChild(img);
         div.appendChild(title);
         document.getElementById("recepieFinal").appendChild(div);
         div.setAttribute("position","reletive");
         div.setAttribute("width","30%");
         title.innerHTML="Recepie"+ans.response.drinks[i].strInstructions;
       }
     }
   };
   xmlhttp("GET","https://www.thecocktaildb.com/api/json/v1/1/random.php?q=" + a );
   xmlhttp.send();
 }





 //
 