// does three things get the childs activities 
// and randomly generates quotes for fathers
//  and provides a get to to get the childs doctor

 // to get info from the other file we just had to add another scripty tag in the father html 
class Father {
    constructor(name, age, style) {
        this.name = name;
        this.age = age;
        this.style = style;

        const ibtn = document.getElementById("gbtn");
        ibtn.addEventListener("click", async (event) => {
            event.preventDefault();
            try {
                const response = await fetch("http://localhost:5000/baby");
                if (!response.ok) {
                    throw new Error("Something went wrong");
                }
                const json = await response.json();

                const inputName = prompt("Enter a name to search for:"); // the prompt becomes a string type thing where it can be accescepted
                if (inputName) {
                    await this.getInterest(inputName, json);
                }
            } catch (error) {
                console.log(error);
            }
        });
// this button gets a doctor 

        const dbtn = document.getElementById("dbtn");
                dbtn.addEventListener("click", async(event)=>{
                    event.preventDefault();
                    try {
                        const response = await fetch("http://localhost:5000/baby");
                            if(!response.ok){
                                throw new Error("something wrong")
                            }

                            const json = await response.json();
                            const inputBaby = prompt("what the baby name");

                            if(inputBaby){
                                await this.getDoctor(inputBaby,json)
                            }
                    } catch (error) {
                        console.log(error)
                    }
                })

                // this button gets random quotes 
        const qbtn = document.getElementById("qbtn");
                qbtn.addEventListener("click",async(event)=>{
                    event.preventDefault();
                    try {
                        const div = document.getElementById("dip")
                        const randomIndex = Math.floor(Math.random() * quotes.length)
                        const randomQuote = quotes[randomIndex]
                        div.innerHTML =randomQuote


                    } catch (error) {
                        console.log(error)
                    }
                })// here we need a random quote and i will get it from another page so I guess we will import it 

    } // I think we have to put button events in the constructor this the end of the class

    async getInterest(Bname, json) {
        let nameFound = false;

        const int = document.getElementById("pool");

        for (let i = 0; i < json.rows.length; i++) {
            const name = json.rows[i]["name"];
            const intrest = json.rows[i]["intrest"];

            if (name === Bname) {
            
                int.innerHTML = `${name}'s ` +" intrest are "+ `${intrest}`
                // Update your HTML here with the selected activity
                // For example, you can use innerHTML to display the selected activity
                // const activityDisplay = document.getElementById("activity-display");
                // activityDisplay.innerHTML = intrest;

                nameFound = true;
                break; // Exit the loop since we found the matching name
            }
        }

        if (!nameFound) {
            console.log("Name not found");
        }
    }//methods

    // this is how wee decalre a function 
    async getDoctor (bname,json){
        let nameFound = false;

            const doc = document.getElementById("cool");


            for(let i= 0; i < json.rows.length; i++){
                    const name = json.rows[i]["name"];
                    const doctor = json.rows[i]["doctor"];

                    if(name === bname){
                       
                        doc.innerHTML = `${name}'s `+" doctor's name is "+`${doctor}`
                        nameFound = true
                        break;
                    }
            }
            if(!nameFound){
                console.log("name found")
            }
        }
}

// Create an instance of the Father class
const fatherInstance = new Father("John", 40, "Casual");
