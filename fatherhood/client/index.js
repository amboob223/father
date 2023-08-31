// here is where i will keep the script for everything 
        //father varibles
    const fname = document.getElementById("fname");
    const fage = document.getElementById("fage");
    const fchild = document.getElementById("fchild");
    const fbudget = document.getElementById("fbudget");
    const fbtn = document.getElementById("fbtn");

        //submit button 
        fbtn.addEventListener("click", async(event)=>{
            event.preventDefault()
               
                try {
                     const body = {
                    name:fname.value,
                    age:fage.value,
                    child:fchild.value,
                    budget:fbudget.value,
                }
                const response = await fetch("http://localhost:5000/father",{
                    method:"POST",    
                    headers:{"Content-type":"application/json"},
                    body:JSON.stringify(body)
                })
                alert("okay we got you pop")


  
                console.log("work")

                fname.value =""
                fage.value = ""
                fchild.value = ""
                fbudget.value = ""
                
                } catch (error) {
                    console.log(error)
                }
        })
        //baby elememnts 
    const bname = document.getElementById("bname");
    const bage = document.getElementById("bage");
    const bdoctor = document.getElementById("bdoctor");
    const bintrest = document.getElementById("bintrest");
    const bbtn = document.getElementById("bbtn");


    //
    bbtn.addEventListener("click", async (event)=>{

            try {
                event.preventDefault()

                //here we using split and join to format the input for the array and put [] around it 
                const val = bintrest.value.split(',')
                const formatarr = `{${val.map(item => `'${item.trim()}'`).join(',')}}`
                

            const body= {
                name:bname.value,
                age:bage.value,
                doctor:bdoctor.value,
                intrest:formatarr
            }
            const response = await fetch("http://localhost:5000/baby",
            {
                method:"POST",
                headers:{"Content-type":"Application/json"},
                body:JSON.stringify(body)
                
            })
            alert("okay we got you baby")
            console.log("work")

            bname.value =""
            bage.value = ""
            bdoctor.value = ""
            bintrest.value = ""
        
            } catch (error) {
                console.log(error)
            }
    })