var x=prompt('incert number', '');

function fib(x)
{   if (x<3)
        return 1;
    else
        return fib(x-1) + fib(x-2);
}

for (var i = 1; i <= x; i++)
    alert(fib(i));
