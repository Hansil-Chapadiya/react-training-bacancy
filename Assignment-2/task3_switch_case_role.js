const role = process.argv.slice(2);

console.log(role);
const role_ = {

    'ADMIN' : "ADMIN -> FULL ACCESS",
    'USER' : "USER -> Limited Access",
    'MANAGER' : "MANAGER -> Moderate Access",
}
console.log(role_[role[0]?role[0].toUpperCase():""]?role_[role[0].toUpperCase()] :"Invalid Access"); 


// switch (role[0])
// {
//     case 'ADMIN':
//         console.log("ADMIN -> Full Access"); break;
    
//     case 'USER':
//         console.log("USER -> Limited Access"); break;
    
//     case 'MANAGER':
//         console.log("MANAGER -> Moderate Access"); break;
    
//     default:
//         console.log("default -> Invalid Access");
// }