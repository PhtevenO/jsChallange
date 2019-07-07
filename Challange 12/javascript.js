let pressed = []
let code = 'phteven'



window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);
    console.log(pressed)
    if(pressed.join('').includes(code)){
        switch(code){
            case 'phteven':
                firstCode();
                break;
            case 'next':
                nextCode();
                break;
            case 'further':
                mySecret();
                break;
        }
        
        
    }
    
})



function firstCode(){
    document.querySelector('body').style.background = 'orange';
    
    code = 'next'
}

function nextCode(){
            document.querySelector('body').style.background = 'green';
            // console.log(document.querySelector('h1').innerHTML)
           
            document.querySelector('h1').innerHTML = 'Stop please';
            document.querySelector('h2').innerHTML = '';
            code = 'further';
    }

function mySecret(){
        document.querySelector('body').style.background = 'black';
       
        document.querySelector('h1').innerHTML = '';
            document.querySelector('h2').innerHTML = ' Well you found my ball CMYK ball';
            document.querySelector('h2').style.color = 'gray';
            let ball = document.createElement('div');
            ball.className = 'ball'
            document.querySelector('body').appendChild(ball)
    }

