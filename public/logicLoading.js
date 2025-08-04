
var percentage, 
    
    parallelCount, 
    
    phrase

    percentage = 100

    parallelCount = 0

    function main(){
	
            if( window.getComputedStyle(document.getElementById("responsive")).display == "none" ){
                
                //...
            
            }	
                
            parallelCount++
            
            percentage = parseInt(percentage - 1)
            

            if(percentage < 0){

                percentage = 0

            }

            phrase = `<div style="padding:20px;font-weight:400;font-family:monospace;position:absolute;font-size:15px;">loading... <span style="font-weight:600">${percentage}%</span> </div>`

            
            document.getElementById("loadingText").innerHTML = phrase 
            
            if( percentage ==  0){

                    location.href = `${redirectionLoading}`
                
            }
   

    }


    setInterval( () => { 
        main() 
    }, 100 )
