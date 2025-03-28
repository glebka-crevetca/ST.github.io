const button = document.getElementById('toggleButton');
const triangle = document.getElementById('triangle');
const triangle1 = document.getElementById('triangle1');
const triangle2 = document.getElementById('triangle2');
const problems = document.getElementById('problems'); 
const header = document.getElementById('Header');
let isTriangleVisible = false;

button.addEventListener('click', () => {
    isTriangleVisible = !isTriangleVisible;

    if (isTriangleVisible) {
        triangle.classList.add('show'); 
        triangle.classList.remove('hide');

        triangle1.classList.add('show1'); 
        triangle1.classList.remove('hide1');

        triangle2.classList.add('show2'); 
        triangle2.classList.remove('hide2');
        
        problems.classList.add('problemsshow');
        problems.classList.remove('problemshide');

        button.classList.add('active');
        button.classList.remove('unactive');

        header.classList.add('gray');
        header.classList.remove('white');
    } else {
        triangle.classList.add('hide'); 
        triangle.classList.remove('show'); 

        triangle1.classList.add('hide1'); 
        triangle1.classList.remove('show1');

        triangle2.classList.add('hide2'); 
        triangle2.classList.remove('show2');

        problems.classList.add('problemshide');
        problems.classList.remove('problemshhow');

        button.classList.add('unactive');
        button.classList.remove('active')

        header.classList.add('white');
        header.classList.remove('gray');
    }
});