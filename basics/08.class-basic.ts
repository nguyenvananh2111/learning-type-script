/**
 * private:
 */

 abstract class Department {
    // private name: string;
    // private id: string;
    // constructor(name: string) {
    //     this.name = name;
    // }
    // ==> Shorthand: ngan gon, khong can khai bao nhieu nhu o tren
    // constructor(private name: string, private id: string) {}

    // Khi dùng private thì biến này chỉ truy cập trong nội bộ thằng này
    // thằng con mà kế thừa nó thì không thể truy cập được
    // private employees: string[] = [];

    // Khai báo protected để cho thằng con mà nó kế thừa có thể truy cập để
    // làm gì đó ví dụ override chẳng hạn
    protected employees: string[] = [];
    constructor(private readonly id: string, public name: string) {}

    addEmployees(employee: string) {
        this.employees.push(employee);
    }

    printEmployees() {
        console.log(this.employees);
    }

    /**
     * ABSTRACT chỉ cần 1 thằng function là abstract thì class đó phải là abstract
     * chỉ khai báo mà không mô tả nội dung
     * mục đích: thằng con nào mà extends thì phải implement nó
     */
    abstract describe(): void;
}

class ITDepartment extends Department {
    private lastReport: string;

    // Dùng get thì khi truy cập đến thì chỉ cần gọi
    // instance.mostRecentReport
    // không phải call function
    get mostRecentReport() {
        return this.lastReport;
    }

    describe() {
        console.log('IMPLEMENT ABSTRACT FROM PARENT');
    }

    // instance.mostRecentReport = 'abc'
    set mostRecentReport(value: string) {
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, "IT");
        this.lastReport = reports[reports.length - 1];
    }

    // Override add Employees
    addEmployees(employee: string) {
        if (employee === "K") {
            return;
        }
        this.employees.push(employee);
    }
    addReport(report: string) {
        this.reports.push(report);
        this.lastReport = report;
    }
}

const itDepartment = new ITDepartment("002", []);
itDepartment.addEmployees("Stephen");
itDepartment.addEmployees("K");
itDepartment.addEmployees("Chow");
itDepartment.printEmployees();
itDepartment.mostRecentReport = 'AAAA';
console.log(itDepartment.mostRecentReport);


// STATIC truy cập trực tiếp property hoặc method ko cần tạo instance new
// Thường dùng khi muốn lưu cái CONST hoặc các function global
// Ví dụ
// Math.PI;
// Math.pow(3,5);
