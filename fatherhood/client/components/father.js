// does three things get the childs activities 
// and randomly generates quotes for fathers
//  and provides a get to to get the childs doctor


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

                const inputName = prompt("Enter a name to search for:");
                if (inputName) {
                    await this.getInterest(inputName, json);
                }
            } catch (error) {
                console.log(error);
            }
        });

        const dbtn = document.getElementById("dbtn");
                dbtn.addEventListener("click", async(event)=>{
                    event.preventDefault();
                    try {
                        
                    } catch (error) {
                        
                    }
                })

    } // I think we have to put button events in the constructor

    async getInterest(Bname, json) {
        let nameFound = false;

        for (let i = 0; i < json.rows.length; i++) {
            const name = json.rows[i]["name"];
            const intrest = json.rows[i]["intrest"];

            if (name === Bname) {
                console.log("Selected intrest:", intrest);

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
    }

    // this is how wee decalre a function 
    getDoctor = (bname,json) =>{

    }
}

// Create an instance of the Father class
const fatherInstance = new Father("John", 40, "Casual");
