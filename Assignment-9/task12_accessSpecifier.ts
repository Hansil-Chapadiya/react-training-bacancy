/*

Create a service class exposing only required public methods
Keep internal data private
Explain which members should be accessible and why

*/

class StudentService {
    
    private enrollment: number;
    private name: string;
    private college: string;

    constructor(enrollment: number, name: string, college: string) {
        this.enrollment = enrollment;
        this.name = name;
        this.college = college;
    }

    getEnrollment(): number {
        return this.enrollment;
    }

    getName(): string {
        return this.name;
    }

    updateName(name: string) {
        if (!name.trim()) {
            throw new Error("Invalid name");
        }
        this.name = name;
    }

    getCollege(): string {
        return this.college;
    }
}

const s = new StudentService(5,"Hansil", "LDCE");

console.log(s.getEnrollment())
console.log(s.getName())
console.log(s.getCollege())