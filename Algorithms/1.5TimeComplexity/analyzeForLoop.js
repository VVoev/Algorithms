/*
                Time complexity of for loops


    for(i=0;i<n;i+=20)
    {
        stmt;      O(n)
    }


    for(i=0;i<n;i+=20)
    {
        for(j=0;j<i;j++)
        {
            stmt;        O(n2)
        }
    }

    for(i=1;p<=n;i++)
    {
        p = p + i;         O(root N)
    }


    for(i=1;i<n;i*=2)
    {
        stmt;               O(log n)
    }


    for(i=0;i<n);i++)      O(n)
    for(i=0;i<n);i+2)      O(n)
    for(i=n;i>i);i--)      O(n)

    for(i=0;i<n);i*2)      O(Logn base2)
    for(i=0;i<n);i*3)      O(Logn base3)
    for(i=n;i>i;i=i/2)     O(logn base2)
    
    

    


*/