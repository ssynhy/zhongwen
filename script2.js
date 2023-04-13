let button1 = document.getElementById('btn1');

button1.addEventListener('click', () => {
    const width1 = parseInt(document.getElementById('width1').value);
    const width2 = parseInt(document.getElementById('width2').value);
    const result = document.getElementById('output1');
    let width1_status=false, width2_status=false;

    if(width1 === '' || isNaN(width1) || (width1 <= 0)){
        document.getElementById('width1_error').innerHTML = 'Please provide a valid width1';
    }else{
        document.getElementById('width1_error').innerHTML = '';
        width1_status=true;
    }
    if(width2 === '' || isNaN(width2) || (width2 <= 0)){
        document.getElementById('width2_error').innerHTML = 'Please provide a valid width2';
    }else{
        document.getElementById('width2_error').innerHTML = '';
        width2_status=true;
    }
    
    if(width1_status && width2_status){
            const radius = (width1+width2).toFixed(0);
        
                result.innerHTML = 'Size1: ' + radius;

        }else{
            alert('The form has errors');
            result.innerHTML = '';
        }    
});

let button2 = document.getElementById('btn2');

button2.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const width1 = parseInt(document.getElementById('width1').value);
    const result = document.getElementById('output2');
    let height_status=false, width1_status=false;

    if(height === '' || isNaN(height) || (height <= 0 )){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(width1 === '' || isNaN(width1) || (width1 <= 0)){
        document.getElementById('width1_error').innerHTML = 'Please provide a valid width1';
    }else{
        document.getElementById('width1_error').innerHTML = '';
        width1_status=true;
    }
    
    if(height_status && width1_status){
            const up = ((width1*width1)+(height*height)).toFixed(0);
        
                result.innerHTML = 'Size2: ' + up;

        }else{
            alert('The form has errors');
            result.innerHTML = '';
        }    
});

let button3 = document.getElementById('btn3');

button3.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const width2 = parseInt(document.getElementById('width2').value);
    const result = document.getElementById('output3');
    let height_status=false, width2_status=false;

    if(height === '' || isNaN(height) || (height <= 0 )){
        document.getElementById('height_error').innerHTML = 'Please provide a valid height';
    }else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(width2 === '' || isNaN(width2) || (width2 <= 0)){
        document.getElementById('width2_error').innerHTML = 'Please provide a valid width2';
    }else{
        document.getElementById('width2_error').innerHTML = '';
        width2_status=true;
    }
    
    if(height_status && width2_status){
            const down = ((width2*width2)+(height*height)).toFixed(0);
        
                result.innerHTML = 'Size3: ' + down;

        }else{
            alert('The form has errors');
            result.innerHTML = '';
        }    
});