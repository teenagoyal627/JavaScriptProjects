(function(){
 let screen =document.querySelector('.screen')
 let button =document.querySelectorAll('.btn')
 let equal  =document.querySelector(".btn-equal")
 let clear =document.querySelector(".btn-clear")

 button.forEach(function(button){
    button.addEventListener('click',function(event){
       
        let value=event.target.dataset.num;
        console.log(value)
        screen.value+=value;
       
    })

    equal.addEventListener('click',function(event){
       
        //let x=screen;
        if(screen.value ===''){
            screen.value= "Please Enter";
            
        }else{
            let answer=eval(screen.value)
           screen.value=answer;
        }
     })
    
     clear.addEventListener('click',function(event){
        screen.value='';
        console.log("clear screen")
     })
    
 })
 

 
  

})();