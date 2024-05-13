let display=document.getElementById('display');
let bag='';
let button1=document.getElementById('button1')
let button2=document.getElementById('button2')
let button3=document.getElementById('button3')
let button4=document.getElementById('button4')
let button5=document.getElementById('button5')
let button6=document.getElementById('button6')
let button7=document.getElementById('button7')
let button8=document.getElementById('button8')
let button9=document.getElementById('button9')
let button_zero=document.getElementById('button_zero')
let button_plus=document.getElementById('button_plus')
let button_minus=document.getElementById('button_minus')
let button_multi=document.getElementById('button_multi')
let button_divide=document.getElementById('button_divide')
let button_clear=document.getElementById('button_clear')
let button_equal=document.getElementById('button_equal')
function upadate_screen(ch)
{
    bag += ch;
    display.innerHTML=bag;
}
button1.addEventListener('click',()=>{
    upadate_screen('1');
});
button2.addEventListener('click',()=>{
    upadate_screen('2');
})
button3.addEventListener('click',()=>{
    upadate_screen('3');
})
button4.addEventListener('click',()=>{
    upadate_screen('4');
})
button5.addEventListener('click',()=>{
    upadate_screen('5');
})
button6.addEventListener('click',()=>{
    upadate_screen('6');
})
button7.addEventListener('click',()=>{
    upadate_screen('7');
})
button8.addEventListener('click',()=>{
    upadate_screen('8');
})
button9.addEventListener('click',()=>{
    upadate_screen('9');
})
button_zero.addEventListener('click',()=>{
    upadate_screen('0');
})
button_plus.addEventListener('click',()=>{
    upadate_screen('+');
})
button_minus.addEventListener('click',()=>{
    upadate_screen('-');
})
button_multi.addEventListener('click',()=>{
    upadate_screen('*');
})
button_divide.addEventListener('click',()=>{
    upadate_screen('/');
})
button_clear.addEventListener('click',function(){
    bag='';
    display.innerHTML=bag;
})

button_equal.addEventListener('click',function(){
    
    let res=calculation(bag)
    display.innerHTML=res;
     bag=res;
 })

function calculation(num){
    let res;
   // res=eval(num);
    if(num==='')return;
    else{
        let a='';
        let b='';
        let c='';
        let i=0;
    
        while(bag[i]!=='+' && bag[i]!=='-'&& bag[i]!=='*'&& bag[i]!=='/'){
            a+=bag[i];
            i++;
        }
        c+=bag[i];
        for(let j=i+1; j<bag.length; j++)
        {
            b+=bag[j];
        }
        a=parseFloat(a);
        b=parseFloat(b);
        
        switch(c)
        {
            case '+':
                res=a+b;
                break;
            case '-':
                res=a-b;
                break;
            case '*' :
                res=a*b;
                break;       
            case '/':
                res=a/b;
                break;
        }
        
    }

    return res;
}
