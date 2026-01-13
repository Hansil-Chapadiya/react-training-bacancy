role = process.argv.slice(2);

switch (role[0])
{
    case 'ADMIN':
        console.log("ADMIN -> Full Access"); break;
    
    case 'USER':
        console.log("USER -> Limited Access"); break;
    
    case 'MANAGER':
        console.log("MANAGER -> Moderate Access"); break;
    
    default:
        console.log("default -> Invalid Access");
}