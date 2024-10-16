// Define a common interface for both leaf and composite nodes
interface Employee {
    getDetails(): string;
}

// Implement a Leaf node (Employee)
class Developer implements Employee {
    constructor(private name: string, private position: string) {}

    getDetails(): string {
        return `${this.name} (${this.position})`;
    }
}

// Implement a Composite node (Manager)
class Manager implements Employee {
    private subordinates: Employee[] = [];

    constructor(private name: string, private position: string) {}

    add(employee: Employee): void {
        this.subordinates.push(employee);
    }

    remove(employee: Employee): void {
        this.subordinates = this.subordinates.filter(e => e !== employee);
    }

    getDetails(): string {
        const details = this.subordinates.map(e => e.getDetails()).join('\n  ');
        return `${this.name} (${this.position})\n  ${details}`;
    }
}

// Client code
const dev1 = new Developer('Sudeera', 'Frontend Developer');
const dev2 = new Developer('Nimali', 'Backend Developer');
const manager = new Manager('Gayan', 'Development Manager');

manager.add(dev1);
manager.add(dev2);

console.log(manager.getDetails());

/* Output: tsc CompositePattern.ts, node CompositePattern.js */

//  Gayan (Development Manager)
//  Sudeera (Frontend Developer)
//  Nimali (Backend Developer)
