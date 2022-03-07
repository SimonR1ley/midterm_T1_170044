import axios from "axios";

axios.get('https://api.spacexdata.com/v4/crew')
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


const ComTwo = () =>{
    return(
        <p>
            ComponentTwo
        </p>
    );
}

export default ComTwo;