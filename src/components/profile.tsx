import "./profile.css";

export const Profile=(props:any)=>{
return <div>
   <div id="container">
    <h2>firstName:{props.firstName}</h2>
    <h2>lastName:{props.lastName}</h2>
    <h2>email:{props.email}</h2>
    <h2>password:{props.password}</h2>
   </div>
    </div>
}