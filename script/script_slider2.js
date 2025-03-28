
const nextButton = document.getElementById('nextBut');
const prevButton = document.getElementById('prevBut');

    
function showNext() {
       
     document.querySelectorAll('.Slider2_first').forEach(element => {
        element.classList.remove('show2');
        element.classList.add('hidden2');
    });
      
    document.querySelectorAll('.Slider2_second').forEach(element => {
         element.classList.remove('hidden2');
         element.classList.add('show2');
    });
    nextButton.style.opacity = '0.3';
    prevButton.style.opacity = '1';
}

    
function showPrev() {
       
    document.querySelectorAll('.Slider2_first').forEach(element => {
        element.classList.remove('hidden2');
        element.classList.add('show2');
    });
        
    document.querySelectorAll('.Slider2_second').forEach(element => {
        element.classList.remove('show2');
        element.classList.add('hidden2');
    });
       
    prevButton.style.opacity = '0.3';
    nextButton.style.opacity = '1';
}

    
document.querySelectorAll('.Slider2_first').forEach(element => {
    element.classList.add('show2');
});
document.querySelectorAll('.Slider2_second').forEach(element => {
    element.classList.add('hidden2');
});
prevButton.style.opacity = '0.3';
nextButton.style.opacity = '1';

    
nextButton.addEventListener('click', showNext);
prevButton.addEventListener('click', showPrev);