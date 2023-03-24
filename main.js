//showing nth element

			let d=[4,8,7,5,9,6,0,1,-2]
			let n=parseInt(prompt("enter a num"));
			function nth(d,n){
			for (i=0;i<d.length;i++){
				for (j=i+1;j<d.length;j++){
					if(d[i]>d[j]){
						d1=d[j];
						d[j]=d[i];
						d[i]=d1;
					}
				}
			}
			let nth1=d[n-1];
			return nth1;
			}
			console.log(d)
			console.log(nth(d,n));
			console.log(d)