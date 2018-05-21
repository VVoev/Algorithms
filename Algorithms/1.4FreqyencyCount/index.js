/*
        Freqyency Count
        Sum(a,n)
        {
            s=0;                        >1
            for(i=0;i<n;i++)            >n+1
            {
                s=s+a[i]                >n
            }
            return s;                   >1
        }                           ------------
                                        f(n)=2n+3
                                        O(n)
                                        s(n)=n+3
                                        O(n)


        Add(a,b,n)
        {
            for(i=0;i<n;i++)            >n
            {
                for(j=0;j<n;j++)        >n
                {
                    c[i,j] = a[i,j] + b[i,j];   n*n
                }                               2n2
                                                O(n2)
                                                s(n) => 3n2 + 3
            }                                   O(n2)
        }


        Multiply(a,b,n)
        {
            for()             n+1
            {
                for()             n+1
                {
                    n*n
                    for()             n+1
                    {
                        n*n*n
                    }
                }
            }
        }

        O(n3);
        O(n2);

*/