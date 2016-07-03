var x=prompt('incert number', '');

function fibo(x)
{   if (x<3)
        return 1;
    else
        return fibo(x-1) + fibo(x-2);
}

for (var i = 1; i <= x; i++)
    alert(fibo(i));
